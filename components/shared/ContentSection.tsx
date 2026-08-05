'use client'

import { Check } from 'lucide-react'

interface ContentSectionProps {
  heading: string
  content?: string
  highlights?: string[]
  treatments?: string[]
  services?: string[]
  procedures?: string[]
  benefits?: string[]
  features?: string[]
  technology?: string[]
  layout?: 'default' | 'grid' | 'list'
}

export function ContentSection({
  heading,
  content,
  highlights,
  treatments,
  services,
  procedures,
  benefits,
  features,
  technology,
  layout = 'default',
}: ContentSectionProps) {
  const items = highlights || treatments || services || procedures || benefits || features || technology || []

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">{heading}</h2>

        {content && (
          <p className="text-lg text-gray-600 leading-relaxed mb-12 whitespace-pre-line">
            {content}
          </p>
        )}

        {items.length > 0 && (
          <div
            className={
              layout === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : layout === 'list'
                  ? 'space-y-3'
                  : 'flex flex-wrap gap-3'
            }
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className={
                  layout === 'list'
                    ? 'flex gap-3 items-start'
                    : 'inline-flex items-center gap-2'
                }
              >
                <Check className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span
                  className={
                    layout === 'list'
                      ? 'text-gray-700'
                      : 'text-gray-700 text-sm md:text-base'
                  }
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
