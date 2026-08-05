#!/usr/bin/env node
// One-off maintenance script: renames every Cloudinary asset in
// scripts/image-map.json from "adc/<rest>" to "<rest>" (drops the
// top-level "adc/" folder prefix), then rewrites image-map.json with the
// new public IDs. Requires CLOUDINARY_CLOUD_NAME/API_KEY/API_SECRET in env.

import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

function loadEnv(file) {
  try {
    const text = readFileSync(file, 'utf8')
    for (const line of text.split('\n')) {
      const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
    }
  } catch {}
}
loadEnv(path.join(root, '.env'))

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME
const API_KEY = process.env.CLOUDINARY_API_KEY
const API_SECRET = process.env.CLOUDINARY_API_SECRET

if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
  console.error('Missing Cloudinary credentials in .env')
  process.exit(1)
}

const mapPath = path.join(root, 'scripts/image-map.json')
const map = JSON.parse(readFileSync(mapPath, 'utf8'))

function sign(params) {
  const toSign = Object.keys(params)
    .sort()
    .map((k) => `${k}=${params[k]}`)
    .join('&')
  return createHash('sha256').update(toSign + API_SECRET).digest('hex')
}

async function renameOne(fromId, toId) {
  const timestamp = Math.floor(Date.now() / 1000)
  const params = { from_public_id: fromId, to_public_id: toId, overwrite: 'true', timestamp }
  const signature = sign(params)

  const form = new FormData()
  form.append('from_public_id', fromId)
  form.append('to_public_id', toId)
  form.append('overwrite', 'true')
  form.append('timestamp', String(timestamp))
  form.append('api_key', API_KEY)
  form.append('signature', signature)

  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/rename`, {
    method: 'POST',
    body: form,
  })
  const json = await res.json()
  if (!res.ok) {
    throw new Error(`${fromId} -> ${toId}: ${JSON.stringify(json)}`)
  }
  return json.public_id
}

const results = []
for (const [localFile, entry] of Object.entries(map)) {
  const fromId = entry.publicId
  if (!fromId.startsWith('adc/')) {
    results.push({ localFile, ok: true, skipped: true })
    continue
  }
  const toId = fromId.slice('adc/'.length)
  try {
    await renameOne(fromId, toId)
    map[localFile] = { ...entry, publicId: toId }
    results.push({ localFile, fromId, toId, ok: true })
    console.log(`OK   ${fromId} -> ${toId}`)
  } catch (err) {
    results.push({ localFile, fromId, toId, ok: false, error: String(err) })
    console.error(`FAIL ${fromId} -> ${toId}: ${err}`)
  }
}

const failed = results.filter((r) => !r.ok)
if (!failed.length) {
  writeFileSync(mapPath, JSON.stringify(map, null, 2) + '\n')
  console.log('\nimage-map.json updated with new public IDs.')
}

console.log(`\nDone. ${results.length - failed.length}/${results.length} renamed.`)
if (failed.length) {
  console.log('Failed:', failed.map((f) => f.localFile).join(', '))
  process.exit(1)
}
