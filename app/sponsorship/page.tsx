'use client'

import { Analytics } from '@vercel/analytics/react'
import { HeartHandshake } from 'lucide-react'
import Navbar from '../../components/navbar'
import SectionHeading from '../../components/section-heading'

export default function Sponsorship() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Event Overview', href: '/#event-overview' },
    { name: 'Upcoming Events', href: '/#upcoming-events' },
    { name: 'Calendar', href: '/calendar' },
    { name: 'Join Our Mailing List', href: '/signup' },
    { name: 'Partner with Us', href: '/sponsorship' },
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
              title="Support Summer of Quantum in LA"
              subtitle="Thank you for considering a sponsorship!"
            />
            <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40 mb-8">
              <div className="flex items-center gap-2 mb-4 text-la-coral">
                <HeartHandshake className="w-6 h-6" />
                <span className="font-bold text-lg">Why Sponsor?</span>
              </div>
              <p className="text-gray-700 mb-4">
                <b>Summer of Quantum in LA</b> is a 10-week, volunteer-led
                celebration of quantum science-bringing free public talks, lab
                tours, demos, and community programming to people across Los
                Angeles.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Science events that are open to everyone</li>
                <li>Programs for students, families, and the broader public</li>
                <li>
                  A citywide effort to make quantum science fun, visible, and
                  accessible
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                <b>Why we need your support:</b>
                <br />
                We keep all our programming free. But running a citywide science
                event takes resources. Your sponsorship will help cover:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Venue rentals and permits</li>
                <li>Flyers, signage, and outreach materials</li>
                <li>Refreshments and event-day supplies</li>
                <li>Speaker thank-you gifts</li>
                <li>Kid-friendly workshop kits and arts & crafts supplies</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <b>What you get:</b>
                <br />
                Partnering with us connects your brand to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  80+ student organizers from USC, UCLA, Caltech, and Chapman
                </li>
                <li>Thousands of public-facing event attendees</li>
                <li>A fast-growing, highly engaged SoCal quantum community</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Sponsors are featured on our website, T-shirts, event signage,
                and social media. Higher-tier sponsors may also be invited to
                speak, host tables, or co-create programming.
              </p>
              <p className="text-gray-700 mb-6">
                Want to get involved?
                <br />
                <b>
                  👉 Fill out the form and we'll be in touch within 2 business
                  days.
                </b>
              </p>
              <div className="rounded-xl overflow-hidden border border-la-sunset/20 shadow">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSceSh_zPIvwNnydih-0ldDVr8XC7jJl5m-5zaaKZzJhBbr8PQ/viewform?usp=sharing&ouid=109764518158939977685"
                  width="100%"
                  height="900"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sponsorship Form"
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
