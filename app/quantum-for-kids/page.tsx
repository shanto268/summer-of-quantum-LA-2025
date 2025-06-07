'use client'

import { Analytics } from '@vercel/analytics/react'
import {
  Calendar,
  Clock,
  Gamepad2,
  Lightbulb,
  MapPin,
  Sparkles,
  Users,
} from 'lucide-react'
import Navbar from '../../components/navbar'
import SectionHeading from '../../components/section-heading'

export default function QuantumForKids() {
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
          <div className="container mx-auto max-w-3xl">
            <SectionHeading
              title="Quantum for Kids @ Caltech"
              subtitle="An interactive science day for curious minds - hands-on demos, crafts, coding, and more!"
            />
            <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40 mb-8">
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-la-coral">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">
                    Aimed mainly at middle schoolers, but younger and older kids
                    (and parents) are all welcome!
                  </span>
                </div>
                <div className="flex items-center gap-2 text-la-coral">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">Date: July 8-13, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-la-coral">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Duration: ~2.5–3 hours</span>
                </div>
                <div className="flex items-center gap-2 text-la-coral">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Caltech Campus</span>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Dive into the world of quantum science with hands-on activities,
                interactive demos, creative crafts, coding workshops, and more!
                Kids will explore at their own pace, collect stamps in their
                "Quantum Explorer Passport," and discover the wonders of the
                quantum world with real scientists and educators.
              </p>
              <div className="mb-6">
                <a
                  href="#register"
                  className="block w-full bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white font-medium shadow-sm rounded-full py-3 text-sm text-center hover:opacity-90 hover:scale-105 transition-all"
                >
                  Register on Eventbrite (Coming Soon)
                </a>
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 mt-8 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-la-coral" /> Event Highlights
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>
                  <b>Welcome & Orientation:</b> Get your event map, "Quantum
                  Explorer Passport," and meet the team!
                </li>
                <li>
                  <b>Activity Zones:</b> Explore hands-on science demos, quantum
                  crafts, coding workshops, and more at your own pace.
                </li>
                <li>
                  <b>Quantum Demos & Hands-On Science:</b> Try the double-slit
                  experiment, superposition spin wheel, and entanglement games.
                </li>
                <li>
                  <b>Quantum Crafts:</b> Make qubit bracelets, atom models, and
                  "uncertainty" watercolor art.
                </li>
                <li>
                  <b>Experiment & Simulation Workshop:</b> Build quantum games
                  and simulations using Scratch and simple circuits.
                </li>
                <li>
                  <b>Quantum Q&A Corner:</b> Ask real scientists your biggest
                  questions about quantum and science careers.
                </li>
                <li>
                  <b>Mini Stage Shows:</b> Fun talks, magic tricks, and live
                  demos every hour. Stickers for participants!
                </li>
                <li>
                  <b>Scavenger Hunt:</b> Complete clue-based tasks around campus
                  and earn prizes!
                </li>
                <li>
                  <b>Wrap-Up:</b> Turn in your stamped passport for a sticker
                  and group photo.
                </li>
              </ul>
              <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 mt-8 flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-la-coral" /> Activity Zones
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>
                  <b>Zone A: Quantum Demos & Science</b> - Probability games and
                  hands-on experiments.
                </li>
                <li>
                  <b>Zone B: Quantum Crafts</b> - Projects to take home.
                </li>
                <li>
                  <b>Zone C: Coding & Simulations</b> - Build quantum games and
                  experiments in Scratch.
                </li>
                <li>
                  <b>Zone D: Ask a Scientist</b> - Q&A with quantum researchers
                  and mentors.
                </li>
              </ul>
              <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 mt-8 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-la-coral" /> Why Attend?
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Fun, hands-on learning for all ages and backgrounds</li>
                <li>Meet real scientists and explore Caltech's campus</li>
                <li>Earn prizes and take home your own quantum creations</li>
                <li>Parents welcome and encouraged to participate</li>
                <li>
                  All activities are free and open to the public (registration
                  required)
                </li>
              </ul>
              <div className="rounded-xl overflow-hidden border border-la-sunset/20 shadow mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.964282019994!2d-118.1252696847817!3d34.1376571805907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c2e2e2e2e2e3%3A0x7e2e2e2e2e2e2e2e!2sCalifornia%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1718040000002!5m2!1sen!2sus"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Caltech Map"
                ></iframe>
              </div>
              <div
                id="register"
                className="mt-8"
              >
                <a
                  href="#"
                  className="block w-full bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white font-medium shadow-sm rounded-full py-3 text-sm text-center hover:opacity-90 hover:scale-105 transition-all"
                  aria-disabled="true"
                  tabIndex={-1}
                >
                  Registration Coming Soon
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Analytics />
    </>
  )
}
