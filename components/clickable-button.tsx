'use client'

import type React from 'react'

interface ClickableButtonProps {
  href?: string
  className?: string
  children: React.ReactNode
  onClick?: (e: React.MouseEvent) => void
  external?: boolean
  disabled?: boolean
}

const ClickableButton: React.FC<ClickableButtonProps> = ({
  href,
  className = '',
  children,
  onClick,
  external = false,
  disabled = false,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault()
      return
    }
    if (onClick) {
      onClick(e)
      return
    }
    if (href) {
      if (external) {
        window.open(href, '_blank', 'noopener,noreferrer')
      } else {
        window.location.href = href
      }
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`${className} cursor-pointer`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default ClickableButton
