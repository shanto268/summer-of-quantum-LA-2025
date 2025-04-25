'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, TreePalmIcon as PalmTree, SunIcon } from 'lucide-react'

import { useEffect, useState } from 'react'

interface NavLink {
  name: string
  href: string
  external?: boolean
}

interface NavbarProps {
  navLinks?: NavLink[]
}

export default function Navbar({ navLinks: propNavLinks }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const defaultNavLinks = [
    { name: 'Home', href: '#' },
    { name: 'Event Overview', href: '#event-overview' },
    { name: 'Upcoming Events', href: '#upcoming-events' },
    {
      name: 'Volunteer with Us',
      href: 'https://forms.gle/ZSaeCCjfn7HQjELy5',
      external: true,
    },
    {
      name: 'Partner with Us',
      href: 'https://forms.gle/DyUdErt8nMdxNmai8',
      external: true,
    },
  ]

  const navLinks = propNavLinks || defaultNavLinks

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md py-2 border-b border-la-sunset/30 shadow-sm'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#"
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk font-heading"
        >
          <span className="flex items-center gap-2">
            <SunIcon className="h-5 w-6 text-la-coral" />
            Quantum in LA
            <PalmTree className="h-6 w-6 text-la-coral" />
          </span>
        </a>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="text-gray-700 hover:text-la-coral transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-la-coral after:via-la-sunset after:to-la-dusk hover:after:w-full after:transition-all"
              onClick={(e) => {
                if (link.external) {
                  e.preventDefault()
                  window.open(link.href, '_blank')
                }
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <Sheet>
          <SheetTrigger
            asChild
            className="md:hidden"
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-la-coral"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-white border-la-blush"
          >
            <div className="flex flex-col space-y-6 mt-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="text-gray-700 hover:text-la-coral transition-colors text-lg font-heading"
                  onClick={(e) => {
                    if (link.external) {
                      e.preventDefault()
                      window.open(link.href, '_blank')
                    }
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
