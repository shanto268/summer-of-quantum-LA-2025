'use client'

import { Analytics } from '@vercel/analytics/react'
import { Building2, Calendar, Clock, MapPin } from 'lucide-react'
import Navbar from '../../components/navbar'
import SectionHeading from '../../components/section-heading'

export default function PublicTalks() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Event Overview', href: '/#event-overview' },
    { name: 'Upcoming Events', href: '/#upcoming-events' },
    {
      name: 'Join Our Mailing List',
      href: '/signup',
    },
    {
      name: 'Our Volunteers',
      href: '/volunteers',
    },
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

  const talks = [
    {
      university: 'USC',
      title: 'Quantum for Everyone: A Public Talk at USC',
      date: 'June 11, 2025',
      time: '6:30 PM - 8:15 PM',
      location: 'Science Lecture Hall (SLH), University of Southern California',
      description:
        "Join us for a fun and engaging public talk on quantum physics - it's for everyone, no matter your background! Led by Dr. Aaron Wirthwein, a theoretical physicist specializing in quantum systems.",
      eventbriteLink:
        'https://www.eventbrite.com/e/quantum-for-everyone-a-public-talk-at-usc-tickets-1391569575059?aff=oddtdtcreator',
      isAvailable: true,
    },
    {
      university: 'Caltech',
      title: 'Quantum for Everyone: A Public Talk at Caltech',
      date: 'Coming Soon',
      time: 'TBD',
      location: 'California Institute of Technology',
      description:
        'Stay tuned for details about our upcoming public talk at Caltech!',
      eventbriteLink: '#',
      isAvailable: false,
    },
    {
      university: 'UCLA',
      title: 'Quantum for Everyone: A Public Talk at UCLA',
      date: 'Coming Soon',
      time: 'TBD',
      location: 'University of California, Los Angeles',
      description:
        'Stay tuned for details about our upcoming public talk at UCLA!',
      eventbriteLink: '#',
      isAvailable: false,
    },
    {
      university: 'Chapman',
      title: 'Quantum for Everyone: A Public Talk at Chapman',
      date: 'Coming Soon',
      time: 'TBD',
      location: 'Chapman University',
      description:
        'Stay tuned for details about our upcoming public talk at Chapman!',
      eventbriteLink: '#',
      isAvailable: false,
    },
  ]

  return (
    <>
      <Navbar navLinks={navLinks} />
      <main className="min-h-screen bg-gradient-to-br from-la-sky via-la-blush to-la-sand text-gray-900 pt-20">
        <section className="py-12 sm:py-20 px-4 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm -z-10"></div>
          <div className="container mx-auto">
            <SectionHeading
              title="Public Talks"
              subtitle="Join us for engaging public lectures on quantum science at universities across Los Angeles"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {talks.map((talk, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40 hover:border-la-sunset/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 font-heading">
                      {talk.university}
                    </h3>
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 font-heading mb-4">
                    {talk.title}
                  </h4>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5 text-la-coral" />
                      <span>{talk.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-5 h-5 text-la-coral" />
                      <span>{talk.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5 text-la-coral" />
                      <span>{talk.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{talk.description}</p>

                  {/* Embedded Google Map for each university */}
                  {talk.university === 'USC' && (
                    <div className="rounded-xl overflow-hidden border border-la-sunset/20 shadow mb-6">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.406278874019!2d-118.28705768478144!3d34.02073018061037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b8e2e2e2e3%3A0x7e2e2e2e2e2e2e2e!2sScience%20Lecture%20Hall%20(SLH)%2C%20USC!5e0!3m2!1sen!2sus!4v1718040000001!5m2!1sen!2sus"
                        width="100%"
                        height="220"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="USC Science Lecture Hall Map"
                      ></iframe>
                    </div>
                  )}
                  {talk.university === 'Caltech' && (
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
                  )}
                  {talk.university === 'UCLA' && (
                    <div className="rounded-xl overflow-hidden border border-la-sunset/20 shadow mb-6">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.000000000000!2d-118.4455166847805!3d34.0689211806101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7e2e2e2e2e3%3A0x7e2e2e2e2e2e2e2e!2sUniversity%20of%20California%2C%20Los%20Angeles!5e0!3m2!1sen!2sus!4v1718040000003!5m2!1sen!2sus"
                        width="100%"
                        height="220"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="UCLA Map"
                      ></iframe>
                    </div>
                  )}
                  {talk.university === 'Chapman' && (
                    <div className="rounded-xl overflow-hidden border border-la-sunset/20 shadow mb-6">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.000000000000!2d-117.852036684789!3d33.7932471806001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0e2e2e2e2e3%3A0x7e2e2e2e2e2e2e2e!2sChapman%20University!5e0!3m2!1sen!2sus!4v1718040000004!5m2!1sen!2sus"
                        width="100%"
                        height="220"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Chapman University Map"
                      ></iframe>
                    </div>
                  )}

                  {talk.isAvailable ? (
                    <a
                      href={talk.eventbriteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white hover:opacity-90 transition-all font-medium shadow-sm rounded-full py-3 text-sm hover:scale-105 text-center"
                    >
                      Register on Eventbrite
                    </a>
                  ) : (
                    <button
                      disabled
                      className="block w-full bg-gray-200 text-gray-500 font-medium shadow-sm rounded-full py-3 text-sm cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Analytics />
    </>
  )
}
