import React from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string | React.ReactNode
  align?: 'left' | 'center' | 'right'
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  return (
    <div className={`mb-12 max-w-3xl ${alignmentClasses[align]}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk font-heading">
        {title}
      </h2>
      {subtitle && (
        <div className="flex justify-center">
          <p className="text-lg text-gray-600 font-body">{subtitle}</p>
        </div>
      )}
    </div>
  )
}
