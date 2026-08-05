'use client'

import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface PageHeroProps {
  title: string
  subtitle?: string
  showBreadcrumb?: boolean
  pageName?: string
  cta?: {
    label: string
    href: string
  }[]
}

export function PageHero({
  title,
  subtitle,
  showBreadcrumb = true,
  pageName,
  cta = [],
}: PageHeroProps) {
  return (
    <section className="min-h-96 bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-32 pb-20">
      <div className="container-custom">
        {showBreadcrumb && pageName && (
          <div className="flex items-center gap-2 mb-8 text-sm text-gray-600">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-gray-900 font-medium">{pageName}</span>
          </div>
        )}

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        )}

        {cta.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {cta.map((item, idx) => (
              <Link key={idx} href={item.href}>
                <Button
                  className={
                    idx === 0
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
