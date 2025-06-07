'use client'

import { Analytics } from '@vercel/analytics/react'
import { Briefcase, Calendar, Clock, MapPin, Mic, Users } from 'lucide-react'
import Navbar from '../../components/navbar'
import SectionHeading from '../../components/section-heading'

export default function QuantumTechCompanyEvents() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Event Overview', href: '/#event-overview' },
    { name: 'Upcoming Events', href: '/#upcoming-events' },
    { name: 'Calendar', href: '/calendar' },
    { name: 'Join Our Mailing List', href: '/signup' },
    { name: 'Our Volunteers', href: '/volunteers' },
    { name: 'Partner with Us', href: '/partner-with-us', external: true },
  ]

  return (
    <>
      <Navbar navLinks={navLinks} />
      <main className="min-h-screen bg-gradient-to-br from-la-sky via-la-blush to-la-sand text-gray-900 pt-20">
        <section className="py-12 sm:py-20 px-4 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm -z-10"></div>
          <div className="container mx-auto max-w-3xl">
            <SectionHeading
              title="Quantum Tech Company Events"
              subtitle="Panels, showcases, and networking with the leading quantum companies in LA."
            />
            <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40 mb-8">
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-la-coral">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">July 15-20, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-la-coral">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">TBD</span>
                </div>
                <div className="flex items-center gap-2 text-la-coral">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">
                    USC (with Caltech/UCLA/Chapman partners)
                  </span>
                </div>
              </div>
              <div className="mb-6">
                <a
                  href="https://eventbrite.com/placeholder-quantum-tech-company-events"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white font-medium shadow-sm rounded-full py-3 text-sm text-center hover:opacity-90 hover:scale-105 transition-all"
                >
                  Registration Coming Soon
                </a>
              </div>
              <div className="mb-6">
                <a
                  href="/sponsorship"
                  className="block w-full bg-gradient-to-r from-la-dusk via-la-sunset to-la-coral text-white font-medium shadow-sm rounded-full py-3 text-sm text-center hover:opacity-90 hover:scale-105 transition-all"
                >
                  Sponsorship & Partnership Form
                </a>
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 mt-8 flex items-center gap-2">
                <Mic className="w-5 h-5 text-la-coral" /> Industry Panel
                Discussion
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>
                  Hear from 3–5 leaders in quantum hardware, software, and
                  startups about career paths, industry trends, and the future
                  of quantum technology.
                </li>
                <li>
                  Get your questions answered in a 15-minute audience Q&A (with
                  optional anonymous questions via QR code).
                </li>
              </ul>
              <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 mt-8 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-la-coral" /> Mini-Expo Booths
                & Showcases
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>
                  Meet company reps at their tables, see demo reels, hardware
                  mockups, and learn about internships and jobs.
                </li>
                <li>
                  Ask questions, pick up info, and make connections with
                  engineers and scientists in the field.
                </li>
              </ul>
              {/*
              <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 mt-8 flex items-center gap-2">
                <Users className="w-5 h-5 text-la-coral" /> Quantum Speed Mentoring (Optional)
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>1:1 or 2:1 mini-interviews/chats with company reps (5–7 min per round).</li>
                <li>Attendees rotate tables for high-energy engagement and personal connections.</li>
              </ul>
              */}
              <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 mt-8 flex items-center gap-2">
                <Users className="w-5 h-5 text-la-coral" /> Resume Drop &
                Follow-Up
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>
                  Submit your resume for company follow-up and job postings.
                </li>
                <li>
                  Get notified about new opportunities and connect with hiring
                  contacts after the event.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Analytics />
    </>
  )
}
