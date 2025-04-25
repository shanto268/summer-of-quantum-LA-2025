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

  const justifyContent = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }

  return (
    <div className={`mb-8 md:mb-12 max-w-3xl ${alignmentClasses[align]}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk font-heading">
        {title}
      </h2>
      {subtitle && (
        <div className={`flex ${justifyContent[align]}`}>
          <p className="text-base sm:text-lg text-gray-600 font-body max-w-full break-words">
            {subtitle}
          </p>
        </div>
      )}
    </div>
  )
}
