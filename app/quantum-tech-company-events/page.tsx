'use client'

import { Analytics } from '@vercel/analytics/react'
import { Briefcase, Calendar, Clock, MapPin, Mic, Users } from 'lucide-react'
import { useState } from 'react'
import Navbar from '../../components/navbar'
import SectionHeading from '../../components/section-heading'

interface Event {
  title: string
  date: string
  time: string
  location: string
  description?: string
  isAvailable: boolean
  showSponsorship?: boolean
  registrationUrl?: string
  details: {
    industryPanel?: string
    expoBooths?: string[]
    resumeDrop?: string[]
  }
}

export default function QuantumTechCompanyEvents() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Event Overview', href: '/#event-overview' },
    { name: 'Upcoming Events', href: '/#upcoming-events' },
    { name: 'Calendar', href: '/calendar' },
    { name: 'Join Our Mailing List', href: '/signup' },
    { name: 'Our Volunteers', href: '/volunteers' },
    { name: 'Partner with Us', href: '/partner-with-us', external: true },
  ]

  const events: Event[] = [
    {
      title: 'Quantum Tech Company Events',
      date: 'July 15th',
      time: '11 AM - 2 PM',
      location: 'USC (with Caltech/UCLA/Chapman partners)',
      isAvailable: true,
      showSponsorship: true,
      registrationUrl: '/registration/quantum-tech-company-events',
      details: {
        industryPanel:
          'Hear from 5-6 leaders in quantum hardware, software, and startups about career paths, industry trends, and the future of quantum technology.',
        expoBooths: [
          'Meet company reps at their tables, see demo reels, hardware mockups, and learn about internships and jobs.',
          'Ask questions, pick up info, and make connections with students, researchers, engineers and scientists in the field.',
        ],
        resumeDrop: [
          'Connect with industry professionals and explore career opportunities in quantum technology.',
        ],
      },
    },
    {
      title: 'D-Wave Facilities Tour',
      date: 'July 17th',
      time: 'TBD',
      location: 'USC Information Sciences Institute',
      description:
        'Tour of the D-Wave facilities at USC Information Sciences Institute. Details to be announced.',
      isAvailable: true,
      showSponsorship: false,
      registrationUrl: '/registration/d-wave-tour',
    },
    {
      title: 'qBraid Workshop',
      date: 'TBD',
      time: 'TBD',
      location: 'TBD',
      description:
        'Workshop on learning how to use qBraid to run programs on real quantum hardware.',
      isAvailable: true,
      showSponsorship: false,
      registrationUrl: '/registration/qbraid-workshop',
    },
  ]

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-la-sky via-la-blush to-la-sand text-gray-900 pt-20">
        <div className="container mx-auto max-w-3xl p-8">
          <div className="bg-white p-8 rounded-2xl border border-red-200 shadow-md">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Error Loading Events
            </h2>
            <p className="text-gray-700">{error}</p>
          </div>
        </div>
      </div>
    )
  }

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
            {isLoading ? (
              <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40">
                <div className="animate-pulse space-y-4">
                  <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">
                      {event.title}
                    </h2>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-la-coral">
                        <Calendar className="w-5 h-5" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-la-coral">
                        <Clock className="w-5 h-5" />
                        <span className="font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-la-coral">
                        <MapPin className="w-5 h-5" />
                        <span className="font-medium">{event.location}</span>
                      </div>
                    </div>

                    {event.isAvailable && (
                      <>
                        <div className="mb-6">
                          <div className="block w-full bg-gray-200 text-gray-500 font-medium shadow-sm rounded-full py-3 text-sm text-center cursor-not-allowed">
                            Registration Coming Soon
                          </div>
                        </div>
                        {event.showSponsorship && (
                          <div className="mb-6">
                            <a
                              href="/sponsorship"
                              className="block w-full bg-gradient-to-r from-la-dusk via-la-sunset to-la-coral text-white font-medium shadow-sm rounded-full py-3 text-sm text-center hover:opacity-90 hover:scale-105 transition-all"
                            >
                              Sponsorship & Partnership Form
                            </a>
                          </div>
                        )}
                      </>
                    )}

                    {event.description && (
                      <p className="text-gray-700 mb-6">{event.description}</p>
                    )}

                    {event.details?.industryPanel && (
                      <>
                        <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 mt-8 flex items-center gap-2">
                          <Mic className="w-5 h-5 text-la-coral" /> Industry
                          Panel Discussion
                        </h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                          <li>{event.details.industryPanel}</li>
                          <li>Audience Q&A at the end of the panel.</li>
                        </ul>
                      </>
                    )}

                    {event.details?.expoBooths && (
                      <>
                        <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 mt-8 flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-la-coral" />{' '}
                          Mini-Expo Booths & Showcases
                        </h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                          {event.details.expoBooths.map((booth, i) => (
                            <li key={i}>{booth}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    {event.details?.resumeDrop && (
                      <>
                        <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 mt-8 flex items-center gap-2">
                          <Users className="w-5 h-5 text-la-coral" /> Career
                          Connections & Networking
                        </h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                          {event.details.resumeDrop.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Analytics />
    </>
  )
}
