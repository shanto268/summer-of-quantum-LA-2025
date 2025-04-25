'use client'

import {
  Atom,
  Beer,
  Building2,
  Gamepad2,
  GraduationCap,
  Lightbulb,
  Sparkles,
  Telescope,
  Theater,
  Users,
} from 'lucide-react'
import ClickableButton from '../components/ClickableButton'
import EventCard from '../components/event-card'
import Navbar from '../components/navbar'
import SectionHeading from '../components/section-heading'
import NeonIsometricMaze from '../neon-isometric-maze'

export default function Home() {
  const upcomingEvents = [
    {
      title: 'Professor Talks',
      date: 'June 15, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'UCLA Physics Department',
      description:
        'Lectures by experts at local universities exploring the frontiers of quantum mechanics and its applications.',
      image: '/placeholder.svg?height=300&width=600',
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      title: 'Quantum at the Bar',
      date: 'June 22, 2025',
      time: '6:00 PM - 9:00 PM',
      location: 'Arts District Brewing Co.',
      description:
        'Informal science discussions in LA bars where experts and novices mingle to discuss quantum concepts over drinks.',
      image: '/placeholder.svg?height=300&width=600',
      icon: <Beer className="w-6 h-6" />,
    },
    {
      title: 'Quantum Realm Games',
      date: 'July 5, 2025',
      time: '7:00 PM - 10:00 PM',
      location: 'Two Bit Circus, Downtown LA',
      description:
        'Play night to explore quantum concepts through interactive games, VR experiences, and puzzle challenges.',
      image: '/placeholder.svg?height=300&width=600',
      icon: <Gamepad2 className="w-6 h-6" />,
    },
    {
      title: 'Griffith Observatory Event',
      date: 'July 12, 2025',
      time: '8:00 PM - 11:00 PM',
      location: 'Griffith Observatory',
      description:
        'Quantum meets stargazing in this special evening event connecting quantum physics with astronomy and cosmology.',
      image: '/placeholder.svg?height=300&width=600',
      icon: <Telescope className="w-6 h-6" />,
    },
    {
      title: 'Shakespeare in the Park + AMA',
      date: 'July 19, 2025',
      time: '6:30 PM - 9:30 PM',
      location: 'Grand Park, Downtown LA',
      description:
        'Live outdoor Q&A with quantum experts before a special Shakespeare performance with quantum themes.',
      image: '/placeholder.svg?height=300&width=600',
      icon: <Theater className="w-6 h-6" />,
    },
    {
      title: 'Quantum for Kids',
      date: 'July 26, 2025',
      time: '10:00 AM - 1:00 PM',
      location: 'California Science Center',
      description:
        'Interactive science demos for young learners making quantum concepts accessible and fun for children.',
      image: '/placeholder.svg?height=300&width=600',
      icon: <Atom className="w-6 h-6" />,
    },
  ]

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Event Overview', href: '#event-overview' },
    { name: 'Upcoming Events', href: '#upcoming-events' },
    { name: 'Volunteer with Us', href: '#volunteer' },
    { name: 'Partner with Us', href: '#partner' },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black text-white">
        {/* Hero Section */}
        <NeonIsometricMaze />

        {/* Event Overview Section */}
        <section
          id="event-overview"
          className="py-20 px-4 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm -z-10"></div>
          <div className="container mx-auto">
            <SectionHeading
              title="Event Overview"
              subtitle="A 10-week summer event series to make quantum mechanics engaging, accessible, and impactful for a diverse audience across LA."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-gradient-to-br from-black to-orange-950/30 p-6 rounded-lg border border-orange-500/30 group hover:border-orange-500/60 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Increase awareness of quantum mechanics
                </h3>
                <p className="text-white/70">
                  Bringing quantum concepts to the public through engaging
                  events and accessible explanations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-black to-pink-950/30 p-6 rounded-lg border border-pink-500/30 group hover:border-pink-500/60 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Engage families, students, and professionals
                </h3>
                <p className="text-white/70">
                  Creating inclusive events for all ages and expertise levels
                  throughout Los Angeles.
                </p>
              </div>

              <div className="bg-gradient-to-br from-black to-purple-950/30 p-6 rounded-lg border border-purple-500/30 group hover:border-purple-500/60 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Collaborate with academia and industry
                </h3>
                <p className="text-white/70">
                  Partnering with UCLA, Caltech, USC and industry leaders to
                  bring expert knowledge to the public.
                </p>
              </div>

              <div className="bg-gradient-to-br from-black to-blue-950/30 p-6 rounded-lg border border-blue-500/30 group hover:border-blue-500/60 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Make quantum mechanics fun and accessible
                </h3>
                <p className="text-white/70">
                  Transforming complex concepts into enjoyable, interactive
                  experiences for everyone.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-900/20 to-pink-900/20 p-8 rounded-lg border border-orange-500/30">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Join us for a summer of quantum discovery!
              </h3>
              <p className="text-white/80 mb-6">
                From interactive workshops and public lectures to art
                exhibitions and family-friendly activities, our 10-week program
                offers something for everyone. Stay updated with our latest
                events and announcements by joining our mailing list. Don't miss
                out on the opportunity to experience quantum mechanics in the
                vibrant setting of Los Angeles!
              </p>
              <div className="flex flex-wrap gap-4">
                <ClickableButton
                  href="https://forms.gle/LxiJ77QGkAx8JBog8"
                  className="inline-block bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-black hover:opacity-90 transition-opacity font-medium px-3 py-1.5 rounded-md text-sm"
                >
                  Join Mailing List
                </ClickableButton>
                <ClickableButton
                  href="https://quantum2025.org/"
                  className="inline-block border border-orange-500 text-orange-400 hover:bg-orange-950/30 px-3 py-1.5 rounded-md transition-colors text-sm"
                >
                  Learn More
                </ClickableButton>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section
          id="upcoming-events"
          className="py-20 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black relative"
        >
          <div className="absolute inset-0 opacity-5 bg-venice-texture mix-blend-overlay"></div>
          <div className="container mx-auto">
            <SectionHeading
              title="Upcoming Events"
              subtitle="Join us for these exciting quantum events happening across Los Angeles"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <EventCard
                  key={index}
                  {...event}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <ClickableButton
                href="#"
                className="inline-block bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-black hover:opacity-90 transition-opacity font-medium px-6 py-3 text-base rounded-md"
              >
                View All Events
              </ClickableButton>
            </div>
          </div>
        </section>

        {/* Volunteer with Us Section */}
        <section
          id="volunteer"
          className="py-20 px-4 bg-gradient-to-b from-black via-orange-950/20 to-black relative"
        >
          <div className="absolute inset-0 opacity-5 bg-venice-texture mix-blend-overlay"></div>
          <div className="container mx-auto">
            <SectionHeading
              title="Volunteer with Us"
              subtitle="Help us make quantum science accessible to everyone in LA"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-black to-orange-950/20 p-8 rounded-lg border border-orange-500/30">
                <h3 className="text-xl font-bold mb-6 text-white">
                  Volunteer Opportunities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Social Media</h4>
                      <p className="text-white/70">
                        Help manage our social media presence and create
                        engaging content.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="3"
                          rx="2"
                        />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Eventbrite</h4>
                      <p className="text-white/70">
                        Assist with event setup and management on our Eventbrite
                        platform.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <path d="m22 6-10 7L2 6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Mailing Lists</h4>
                      <p className="text-white/70">
                        Help manage and grow our mailing lists to keep our
                        community informed.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Promotions</h4>
                      <p className="text-white/70">
                        Distribute flyers and promote our events throughout LA.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle
                          cx="9"
                          cy="7"
                          r="4"
                        />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">
                        Contacting Partners
                      </h4>
                      <p className="text-white/70">
                        Reach out to potential partners and sponsors in the LA
                        area.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-green-500 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
                        <path d="m12 19-2 3" />
                        <path d="m12 19 2 3" />
                        <path d="M12 2v2" />
                        <path d="m2 12 3-2" />
                        <path d="m19 12 3-2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">
                        Website Maintenance
                      </h4>
                      <p className="text-white/70">
                        Help keep our website updated with the latest events and
                        information.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-yellow-400 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M3 7V5c0-1.1.9-2 2-2h2" />
                        <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
                        <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
                        <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
                        <path d="M8 7v10" />
                        <path d="M12 7v10" />
                        <path d="M16 7v10" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Hosts</h4>
                      <p className="text-white/70">
                        Welcome attendees and help facilitate our events as a
                        host.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Day Helpers</h4>
                      <p className="text-white/70">
                        Assist with setup, teardown, and various tasks during
                        our events.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Why Volunteer With Us?
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m7 10 3 3 7-7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        Make an Impact
                      </h4>
                      <p className="text-white/80">
                        Help make quantum science accessible to diverse
                        communities across Los Angeles and inspire the next
                        generation of scientists.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle
                          cx="9"
                          cy="7"
                          r="4"
                        />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        Build Your Network
                      </h4>
                      <p className="text-white/80">
                        Connect with leading scientists, educators, and
                        professionals from UCLA, Caltech, USC, and industry
                        partners.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        Gain Experience
                      </h4>
                      <p className="text-white/80">
                        Develop valuable skills in event management, science
                        communication, and community outreach that will enhance
                        your resume.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8">
                  <ClickableButton
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfodXNeKVG5fIC1mkqorKicN3xoBvnRBZWW5fDti69qX1H_4A/viewform?usp=send_form"
                    className="block w-full py-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-black hover:opacity-90 transition-opacity font-medium text-center rounded-md text-base"
                  >
                    Apply to Volunteer
                  </ClickableButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner with Us Section */}
        <section
          id="partner"
          className="py-20 px-4 relative"
        >
          <div className="absolute inset-0 bg-la-skyline bg-no-repeat bg-bottom opacity-10"></div>
          <div className="container mx-auto">
            <SectionHeading
              title="Partner with Us"
              subtitle="Join our mission to make quantum science accessible and engaging for everyone in LA"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Why Partner with Summer of Quantum?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-white/80">
                      <span className="font-bold text-white">
                        Community Impact:
                      </span>{' '}
                      Reach diverse audiences across Los Angeles and contribute
                      to scientific literacy.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-white/80">
                      <span className="font-bold text-white">Networking:</span>{' '}
                      Connect with leading institutions like UCLA, Caltech, USC,
                      and industry innovators.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-white/80">
                      <span className="font-bold text-white">Visibility:</span>{' '}
                      Showcase your organization's commitment to science
                      education and innovation.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-white/80">
                      <span className="font-bold text-white">
                        Talent Pipeline:
                      </span>{' '}
                      Connect with the next generation of quantum scientists and
                      engineers.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-black to-pink-950/20 p-8 rounded-lg border border-pink-500/30">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Partnership Opportunities
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">
                        Financial Sponsorship
                      </h4>
                      <p className="text-white/70">
                        Support our events and programs with financial
                        contributions at various levels.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle
                          cx="9"
                          cy="7"
                          r="4"
                        />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Venue Hosting</h4>
                      <p className="text-white/70">
                        Provide space for workshops, lectures, or exhibitions at
                        your facility.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Expert Speakers</h4>
                      <p className="text-white/70">
                        Share your expertise by providing speakers for our
                        events and workshops.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <ClickableButton
                    href="https://forms.gle/uJRpnpN7FGaUHSvy6"
                    className="block w-full py-3 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-black hover:opacity-90 transition-opacity font-medium text-center rounded-md text-base"
                  >
                    Become a Partner
                  </ClickableButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-black border-t border-orange-900/30">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
                  Summer of Quantum in LA
                </h3>
                <p className="text-white/70 mb-6">
                  A 10-week summer event series to make quantum mechanics
                  engaging, accessible, and impactful for a diverse audience
                  across LA, in collaboration with UCLA, Caltech, USC, and other
                  partners.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="text-white/70 hover:text-pink-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line
                        x1="17.5"
                        x2="17.51"
                        y1="6.5"
                        y2="6.5"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="text-white/70 hover:text-purple-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect
                        width="4"
                        height="12"
                        x="2"
                        y="9"
                      />
                      <circle
                        cx="4"
                        cy="4"
                        r="2"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-white">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#event-overview"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Event Overview
                    </a>
                  </li>
                  <li>
                    <a
                      href="#upcoming-events"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Upcoming Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="#volunteer"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Volunteer with Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#partner"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Partner with Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-white">Contact</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-white/70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="m22 6-10 7L2 6" />
                    </svg>
                    <span>shanto@usc.edu</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-orange-900/30 text-center text-white/50 text-sm">
              <p>
                © {new Date().getFullYear()} Sadman Ahmed Shanto. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
