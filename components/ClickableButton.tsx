'use client'

import React from 'react'

interface ClickableButtonProps {
  href?: string
  className?: string
  children: React.ReactNode
}

const ClickableButton: React.FC<ClickableButtonProps> = ({
  href,
  className = '',
  children,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className={`${className} cursor-pointer relative z-10`}
      >
        {children}
      </button>
      {/* Invisible overlay to increase clickable area */}
      <div
        onClick={handleClick}
        className="absolute inset-0 z-20 cursor-pointer"
        aria-hidden="true"
      ></div>
    </div>
  )
}

export default ClickableButton
