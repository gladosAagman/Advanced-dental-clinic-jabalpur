#!/usr/bin/env node
// One-off / re-runnable maintenance script: uploads every image listed in
// scripts/image-map.json from public/images to Cloudinary, using the
// public_id (folder + descriptive name) declared in the map.
// Requires CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET in env.

import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

// minimal .env loader (no extra dependency)
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

const map = JSON.parse(readFileSync(path.join(root, 'scripts/image-map.json'), 'utf8'))

function sign(params) {
  const toSign = Object.keys(params)
    .sort()
    .map((k) => `${k}=${params[k]}`)
    .join('&')
  return createHash('sha256').update(toSign + API_SECRET).digest('hex')
}

async function uploadOne(localFile, publicId) {
  const filePath = path.join(root, 'public/images', localFile)
  const buf = await readFile(filePath)
  const timestamp = Math.floor(Date.now() / 1000)
  const params = { public_id: publicId, overwrite: 'true', timestamp }
  const signature = sign(params)

  const form = new FormData()
  form.append('file', new Blob([buf]))
  form.append('public_id', publicId)
  form.append('overwrite', 'true')
  form.append('timestamp', String(timestamp))
  form.append('api_key', API_KEY)
  form.append('signature', signature)

  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
    method: 'POST',
    body: form,
  })
  const json = await res.json()
  if (!res.ok) {
    throw new Error(`${localFile} -> ${publicId}: ${JSON.stringify(json)}`)
  }
  return json.secure_url
}

const results = []
for (const [localFile, { publicId }] of Object.entries(map)) {
  try {
    const url = await uploadOne(localFile, publicId)
    results.push({ localFile, publicId, url, ok: true })
    console.log(`OK   ${localFile} -> ${publicId}`)
  } catch (err) {
    results.push({ localFile, publicId, ok: false, error: String(err) })
    console.error(`FAIL ${localFile}: ${err}`)
  }
}

const failed = results.filter((r) => !r.ok)
console.log(`\nDone. ${results.length - failed.length}/${results.length} uploaded.`)
if (failed.length) {
  console.log('Failed:', failed.map((f) => f.localFile).join(', '))
  process.exit(1)
}
