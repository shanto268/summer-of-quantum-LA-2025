'use client'

import { Analytics } from '@vercel/analytics/react'
import Navbar from '../../components/navbar'
import SectionHeading from '../../components/section-heading'

export default function Signup() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Event Overview', href: '/#event-overview' },
    { name: 'Upcoming Events', href: '/#upcoming-events' },
    { name: 'Calendar', href: '/calendar' },
    { name: 'Join Our Mailing List', href: '/signup' },
    { name: 'Our Volunteers', href: '/volunteers' },
    { name: 'Partner with Us', href: '/sponsorship' },
  ]

  return (
    <>
      <Navbar navLinks={navLinks} />
      <main className="min-h-screen bg-gradient-to-br from-la-sky via-la-blush to-la-sand text-gray-900 pt-20">
        <section className="py-12 sm:py-20 px-4 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm -z-10"></div>
          <div className="container mx-auto">
            <SectionHeading
              title="Join Our Mailing List"
              subtitle="Stay updated about upcoming quantum events, public lectures, volunteer opportunities, and exclusive activities happening across Los Angeles"
            />

            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeMryxw8oZejUUHuGPyxrRjyyVxPPFZR-Xd8jk-qUbPuqUv0Q/viewform?embedded=true"
                  className="w-full h-[800px]"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Analytics />
    </>
  )
}
