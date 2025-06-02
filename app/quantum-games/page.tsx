'use client'

import { Analytics } from '@vercel/analytics/react'
import { Gamepad2 } from 'lucide-react'
import Navbar from '../../components/navbar'
import SectionHeading from '../../components/section-heading'

export default function QuantumGames() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Event Overview', href: '/#event-overview' },
    { name: 'Upcoming Events', href: '/#upcoming-events' },
    { name: 'Join Our Mailing List', href: '/signup' },
    { name: 'Partner with Us', href: '/sponsorship' },
  ]

  return (
    <>
      <Navbar navLinks={navLinks} />
      <main className="min-h-screen bg-gradient-to-br from-la-sky via-la-blush to-la-sand text-gray-900 pt-20">
        <section className="py-12 sm:py-20 px-4 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm -z-10"></div>
          <div className="container mx-auto max-w-2xl">
            <SectionHeading
              title="Quantum Games"
              subtitle="Experience quantum concepts through interactive games and entertainment."
            />
            <div className="space-y-8">
              {/* Video Games Section */}
              <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40">
                <div className="flex items-center gap-2 mb-4 text-la-coral">
                  <Gamepad2 className="w-6 h-6" />
                  <span className="font-bold text-lg">Quantum Video Games</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Join us for an exciting showcase of quantum-themed video games
                  from QuantumRealmGames. Experience quantum mechanics through
                  immersive gameplay and interactive demonstrations.
                </p>
                <div className="bg-la-sand/20 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">
                    <strong>Location:</strong> TBD
                    <br />
                    <strong>Registration:</strong> Eventbrite registration
                    coming soon
                  </p>
                </div>
                <button
                  disabled
                  className="block w-full bg-gray-200 text-gray-500 font-medium shadow-sm rounded-full py-3 text-sm cursor-not-allowed"
                >
                  Registration Coming Soon
                </button>
              </div>

              {/* Board Games Section */}
              <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40">
                <div className="flex items-center gap-2 mb-4 text-la-coral">
                  <Gamepad2 className="w-6 h-6" />
                  <span className="font-bold text-lg">
                    Quantum Board Games Night
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  Join us for an evening of quantum-themed board games at
                  various locations across Los Angeles, including Odyssey Games
                  in Pasadena. Learn about quantum concepts while having fun
                  with friends and fellow enthusiasts.
                </p>
                <div className="bg-la-sand/20 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">
                    <strong>Locations:</strong> Various locations across LA,
                    including Odyssey Games (1795 E Colorado Blvd, Pasadena, CA
                    91106)
                    <br />
                    <strong>Registration:</strong> Eventbrite registration
                    coming soon
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-la-sunset/20 shadow mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.000000000000!2d-118.144036684789!3d34.1472471806001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0e2e2e2e2e3%3A0x7e2e2e2e2e2e2e2e!2sOdyssey%20Games!5e0!3m2!1sen!2sus!4v1718040000004!5m2!1sen!2sus"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Odyssey Games Map"
                  ></iframe>
                </div>
                <button
                  disabled
                  className="block w-full bg-gray-200 text-gray-500 font-medium shadow-sm rounded-full py-3 text-sm cursor-not-allowed"
                >
                  Registration Coming Soon
                </button>
              </div>

              {/* Online Games Section */}
              <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40">
                <div className="flex items-center gap-2 mb-4 text-la-coral">
                  <Gamepad2 className="w-6 h-6" />
                  <span className="font-bold text-lg">
                    Online Quantum Games
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  Experience quantum concepts through open-source online games.
                  We'll be hosting dedicated game servers for these interactive
                  experiences.
                </p>
                <div className="bg-la-sand/20 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">
                    <strong>Platform:</strong> Online (Web-based)
                    <br />
                    <strong>Registration:</strong> Eventbrite registration
                    coming soon
                  </p>
                </div>
                <button
                  disabled
                  className="block w-full bg-gray-200 text-gray-500 font-medium shadow-sm rounded-full py-3 text-sm cursor-not-allowed"
                >
                  Registration Coming Soon
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Analytics />
    </>
  )
}
