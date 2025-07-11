'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface Sponsor {
  name: string
  logo: string
  url: string
  width: number
  height: number
  tier?: 'primary' | 'secondary'
}

const sponsors: Sponsor[] = [
  {
    name: 'D-Wave',
    logo: '/images/sponsors/dwave-logo-dark.png',
    url: 'https://www.dwavequantum.com/',
    width: 200,
    height: 80,
    tier: 'primary',
  },
  {
    name: 'USC Dornsife',
    logo: '/images/sponsors/usc-dornsife-logo.jpg',
    url: 'https://dornsife.usc.edu/',
    width: 240,
    height: 80,
    tier: 'secondary',
  },
  {
    name: 'Caltech Science Exchange',
    logo: '/images/sponsors/caltech-science-exchange-logo.png',
    url: 'https://scienceexchange.caltech.edu/',
    width: 220,
    height: 70,
    tier: 'secondary',
  },
  {
    name: 'PapaFut Education',
    logo: '/images/sponsors/papafut-logo.png',
    url: 'https://www.papafut.com/education',
    width: 200,
    height: 50,
    tier: 'secondary',
  },
  {
    name: 'Team Quantum Games',
    logo: '/images/sponsors/teamquantum-logo.png',
    url: 'https://www.teamquantumgames.com/',
    width: 200,
    height: 140,
    tier: 'secondary',
  },
  {
    name: 'Quantum Realm Games',
    logo: '/images/sponsors/quantumrealm-logo.png',
    url: 'https://quantumrealmgames.com/',
    width: 200,
    height: 60,
    tier: 'secondary',
  },
]

export default function SponsorsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)
  const animationRef = useRef<number>()
  
  // Rearrange sponsors to feature D-Wave prominently
  const primarySponsor = sponsors.find(s => s.tier === 'primary')
  const secondarySponsors = sponsors.filter(s => s.tier !== 'primary')
  
  // Create a pattern with D-Wave appearing frequently
  const basePattern = []
  
  // Pattern: 2 secondary, D-Wave, 3 secondary, D-Wave
  basePattern.push(secondarySponsors[3]) // PapaFut
  basePattern.push(secondarySponsors[4]) // Team Quantum
  if (primarySponsor) basePattern.push(primarySponsor) // D-Wave
  basePattern.push(secondarySponsors[0]) // USC
  basePattern.push(secondarySponsors[1]) // Caltech
  basePattern.push(secondarySponsors[2]) // Quantum Realm
  if (primarySponsor) basePattern.push(primarySponsor) // D-Wave
  
  // Duplicate the pattern for smooth infinite scroll
  const duplicatedSponsors = [...basePattern, ...basePattern, ...basePattern]
  
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return
    
    let scrollPos = 0
    
    // Initialize scroll position to center D-Wave
    setTimeout(() => {
      const firstDWaveIndex = duplicatedSponsors.findIndex(s => s.name === 'D-Wave')
      const items = scrollContainer.querySelectorAll('a')
      if (items.length === 0) return
      
      let targetPosition = 0
      let currentWidth = 0
      
      items.forEach((item, index) => {
        if (index === firstDWaveIndex) {
          const itemWidth = item.offsetWidth
          const containerWidth = scrollContainer.offsetWidth
          targetPosition = currentWidth + (itemWidth / 2) - (containerWidth / 2)
        }
        currentWidth += item.offsetWidth
      })
      
      scrollPos = Math.max(0, targetPosition)
      scrollContainer.scrollLeft = scrollPos
    }, 100)
    
    const animate = () => {
      if (!pausedRef.current) {
        scrollPos += 0.5
        
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth
        if (scrollPos >= maxScroll) {
          scrollPos = 0
        }
        
        scrollContainer.scrollLeft = scrollPos
      }
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animationRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])
  
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-la-sky/5 to-white overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk font-heading">
            Our Sponsors
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We're grateful to our sponsors who share our vision of making quantum science accessible to everyone in Los Angeles
          </p>
        </motion.div>
      </div>
      
      {/* Carousel Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling Container */}
        <div
          ref={scrollRef}
          className="flex items-center gap-16 overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-16 py-8"
          >
            {duplicatedSponsors.map((sponsor, index) => (
              <a
                key={`${sponsor.name}-${index}`}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex-shrink-0 transition-all duration-300 ${
                  sponsor.tier === 'primary' ? 'px-12 hover:scale-115' : 'px-8 hover:scale-110'
                }`}
                onMouseEnter={() => {
                  if (sponsor.tier === 'primary') {
                    pausedRef.current = true
                  }
                }}
                onMouseLeave={() => {
                  if (sponsor.tier === 'primary') {
                    pausedRef.current = false
                  }
                }}
              >
                {sponsor.tier === 'primary' ? (
                  // Primary sponsor with enhanced styling
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-la-coral/20 via-la-sunset/20 to-la-dusk/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative w-64 h-28 sm:w-72 sm:h-32 rounded-xl overflow-hidden bg-gradient-to-br from-white to-gray-50 shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-la-sunset/30">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 640px) 256px, 288px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                ) : sponsor.name === 'USC Dornsife' || sponsor.name === 'Team Quantum Games' ? (
                  // Secondary sponsors with colored backgrounds
                  <div className="relative w-48 h-20 sm:w-56 sm:h-24 rounded-lg overflow-hidden bg-white shadow-sm group-hover:shadow-md transition-shadow">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 640px) 192px, 224px"
                    />
                  </div>
                ) : (
                  // Secondary sponsors with transparent backgrounds
                  <div className="relative h-16 sm:h-20 flex items-center bg-white rounded-lg px-6 py-4 shadow-sm group-hover:shadow-md transition-shadow">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={sponsor.width}
                      height={sponsor.height}
                      className="w-auto h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                )}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="container mx-auto px-4 mt-12"
      >
        <div className="text-center">
          <p className="text-base text-gray-700 mb-4">
            Interested in supporting quantum education in Los Angeles?
          </p>
          <a
            href="/sponsorship"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-la-coral to-la-sunset text-white px-6 py-2.5 rounded-full font-medium hover:opacity-90 transition-all duration-200 hover:scale-105 shadow-sm"
          >
            Become a Sponsor
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  )
}