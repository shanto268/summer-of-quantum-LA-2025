'use client'

import { Analytics } from '@vercel/analytics/react'
import {
  AlertCircle,
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
import SponsorsSection from '../../components/sponsors-section'

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
                  <span className="font-medium">Date: July 12th, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-la-coral">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Time: 10:30 AM – 2:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-la-coral">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Location: Caltech Campus</span>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Dive into the world of quantum science with hands-on activities,
                interactive demos, creative crafts, coding workshops, and more!
                Kids will explore at their own pace, collect stamps in their
                "Quantum Explorer Passport," and discover the wonders of the
                quantum world with real scientists and educators.
              </p>
              <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 mt-8 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-la-coral" /> Event Agenda
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>
                  <b>10:30 AM:</b> Check-in opens outside the{' '}
                  <a
                    href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOTIHCAMQABiPAjIHCAQQABiPAjIGCAUQRRg8MgYIBhBFGDwyBggHEC4YQNIBCDE0MzRqMGoxqAIAsAIA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=Kc900XSoxMKAMaun2aCo3TEw&daddr=Winnett+Student+Center,+1200+E+California+Blvd,+Pasadena,+CA+91125"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-la-coral hover:underline"
                  >
                    Red Door Cafe
                  </a>{' '}
                  on Caltech Campus
                </li>
                <li>
                  <b>11:00 AM:</b> Event officially begins
                </li>
              </ul>
              <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 mt-8 flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-la-coral" /> Activity Zones
              </h3>
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-2">Demo + Arts & Crafts Room</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Open from 11:00 AM to 2:00 PM</li>
                  <li>Hands-on demos and creative activities running continuously</li>
                </ul>
                
                <h4 className="font-medium text-gray-900 mb-2 mt-4">Workshop & Special Programming Room</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li><b>11:00 AM – 12:15 PM:</b> Quantum-themed board Games</li>
                  <li><b>12:30 PM – 1:15 PM:</b> Scratch Coding Workshop</li>
                  <li><b>1:30 PM – 2:00 PM:</b> Ask a Scientist Q&A session</li>
                </ul>
                
                <h4 className="font-medium text-gray-900 mb-2 mt-4">Scavenger Hunt</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Self-guided and can be completed at any time during the event</li>
                </ul>
              </div>
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

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Day of Event Questions?
                    </h4>
                    <p className="text-gray-700 text-sm">
                      If you have any questions during the event, please ask any of our volunteers or staff members.
                      You can also{' '}
                      <a
                        href="mailto:summerofquantumla@gmail.com?subject=Quantum for Kids @ Caltech - Day of Event"
                        className="text-la-coral hover:underline"
                      >
                        email us at summerofquantumla@gmail.com
                      </a>{' '}
                      or call/text us at the number provided at check-in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sponsors Section */}
        <SponsorsSection />
      </main>
      <Analytics />
    </>
  )
}
