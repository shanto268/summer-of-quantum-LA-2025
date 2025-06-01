'use client'

import { Analytics } from '@vercel/analytics/react'
import { Calendar, Clock, MapPin } from 'lucide-react'
import Navbar from '../../components/navbar'
import SectionHeading from '../../components/section-heading'

export default function QuantumForSeniors() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Event Overview', href: '/#event-overview' },
    { name: 'Upcoming Events', href: '/#upcoming-events' },
    { name: 'Join Our Mailing List', href: '/signup' },
    { name: 'Our Volunteers', href: '/volunteers' },
    {
      name: 'Partner with Us',
      href: 'https://forms.gle/DyUdErt8nMdxNmai8',
      external: true,
    },
    {
      name: 'Volunteer with Us',
      href: 'https://forms.gle/ZSaeCCjfn7HQjELy5',
      external: true,
    },
  ]

  return (
    <>
      <Navbar navLinks={navLinks} />
      <main className="min-h-screen bg-gradient-to-br from-la-sky via-la-blush to-la-sand text-gray-900 pt-20">
        <section className="py-12 sm:py-20 px-4 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm -z-10"></div>
          <div className="container mx-auto max-w-2xl">
            <SectionHeading
              title="Quantum for Seniors"
              subtitle="A special event for lifelong learners at Griffith Park Adult Community Center"
            />
            <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-5 h-5 text-la-coral" />
                <span className="font-medium text-gray-900">
                  Griffith Park Adult Community Center
                </span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="w-5 h-5 text-la-coral" />
                <span className="font-medium text-gray-900">
                  Friday, June 6th, 2025
                </span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-5 h-5 text-la-coral" />
                <span className="font-medium text-gray-900">
                  2:30 or 3:00 pm (TBD)
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                Join us for an engaging and accessible introduction to quantum
                science, tailored for seniors and lifelong learners. No
                technical background required—just curiosity!
              </p>
              <div className="flex flex-col gap-2 mb-6">
                <a
                  href="https://www.laparks.org/scc/griffith-adult-community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-la-coral hover:text-la-sunset underline font-medium"
                >
                  Griffith Park Adult Community Center
                </a>
                <a
                  href="https://aging.lacity.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-la-coral hover:text-la-sunset underline font-medium"
                >
                  City of Los Angeles Department of Aging
                </a>
              </div>
              <div className="rounded-xl overflow-hidden border border-la-sunset/20 shadow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.017282019994!2d-118.2939836847826!3d34.1258571805911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0b2e2e2e2e3%3A0x7e2e2e2e2e2e2e2e!2sGriffith%20Park%20Adult%20Community%20Center!5e0!3m2!1sen!2sus!4v1718040000000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Griffith Park Adult Community Center Map"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Analytics />
    </>
  )
}
