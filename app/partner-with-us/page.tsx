'use client'

import { Analytics } from '@vercel/analytics/react'
import { Briefcase } from 'lucide-react'
import Navbar from '../../components/navbar'
import SectionHeading from '../../components/section-heading'

export default function PartnerWithUs() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Event Overview', href: '/#event-overview' },
    { name: 'Upcoming Events', href: '/#upcoming-events' },
    { name: 'Join Our Mailing List', href: '/signup' },
    { name: 'Our Volunteers', href: '/volunteers' },
    {
      name: 'Quantum Tech Company Events',
      href: '/quantum-tech-company-events',
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
              title="Partner With Us: Quantum Tech Company Events"
              subtitle="For companies and organizations interested in participating, sponsoring, or showcasing at our events."
            />
            <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40 mb-8">
              <div className="flex items-center gap-2 mb-4 text-la-coral">
                <Briefcase className="w-6 h-6" />
                <span className="font-bold text-lg">
                  For Companies & Organizations
                </span>
              </div>
              <p className="text-gray-700 mb-6">
                Join the Quantum Tech Company Events as a partner, sponsor, or
                exhibitor and connect directly with top students, early-career
                scientists, and the LA quantum community. Benefits for companies
                include:
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li>High visibility to hundreds of engaged participants</li>
                  <li>
                    Direct networking with students, postdocs, and faculty
                  </li>
                  <li>
                    Access to submitted resumes for hiring and internships
                  </li>
                  <li>
                    Showcase your technology and company culture at your own
                    booth
                  </li>
                  <li>
                    Optional guided tours of USC, Caltech, or UCLA quantum labs
                    for your team
                  </li>
                </ul>
                Please use the form below to tell us about your organization and
                how you'd like to participate.
              </p>
              <div className="mb-6">
                <a
                  href="/sponsorship"
                  className="block w-full bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white font-medium shadow-sm rounded-full py-3 text-sm text-center hover:opacity-90 hover:scale-105 transition-all"
                >
                  Sponsorship & Partnership Form
                </a>
              </div>
              <p className="text-gray-600 text-sm">
                (For individual volunteers, please see our{' '}
                <a
                  href="/volunteers"
                  className="text-la-coral underline"
                >
                  volunteer page
                </a>
                .)
              </p>
            </div>
          </div>
        </section>
      </main>
      <Analytics />
    </>
  )
}
