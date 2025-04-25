'use client'

import type React from 'react'

interface ClickableButtonProps {
  href?: string
  className?: string
  children: React.ReactNode
  onClick?: (e: React.MouseEvent) => void
}

const ClickableButton: React.FC<ClickableButtonProps> = ({
  href,
  className = '',
  children,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e)
      return
    }

    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`${className} cursor-pointer`}
    >
      {children}
    </button>
  )
}

export default ClickableButton
