"use client"

import NeonIsometricMaze from "../neon-isometric-maze"
import Navbar from "../components/navbar"
import EventCard from "../components/event-card"
import SectionHeading from "../components/section-heading"
import ClickableButton from "../components/clickable-button"
import {
  Lightbulb,
  Users,
  Building2,
  Sparkles,
  GraduationCap,
  Beer,
  Gamepad2,
  Telescope,
  Theater,
  Atom,
  Sun,
  TreePalmIcon as PalmTree,
} from "lucide-react"

export default function Home() {
  const upcomingEvents = [
    {
      title: "Professor Talks",
      date: "June 15, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "UCLA Physics Department",
      description:
        "Lectures by experts at local universities exploring the frontiers of quantum mechanics and its applications.",
      image: "/placeholder.svg?height=300&width=600",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      title: "Quantum at the Bar",
      date: "June 22, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Arts District Brewing Co.",
      description:
        "Informal science discussions in LA bars where experts and novices mingle to discuss quantum concepts over drinks.",
      image: "/placeholder.svg?height=300&width=600",
      icon: <Beer className="w-6 h-6" />,
    },
    {
      title: "Quantum Realm Games",
      date: "July 5, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Two Bit Circus, Downtown LA",
      description:
        "Play night to explore quantum concepts through interactive games, VR experiences, and puzzle challenges.",
      image: "/placeholder.svg?height=300&width=600",
      icon: <Gamepad2 className="w-6 h-6" />,
    },
    {
      title: "Griffith Observatory Event",
      date: "July 12, 2025",
      time: "8:00 PM - 11:00 PM",
      location: "Griffith Observatory",
      description:
        "Quantum meets stargazing in this special evening event connecting quantum physics with astronomy and cosmology.",
      image: "/placeholder.svg?height=300&width=600",
      icon: <Telescope className="w-6 h-6" />,
    },
    {
      title: "Shakespeare in the Park + AMA",
      date: "July 19, 2025",
      time: "6:30 PM - 9:30 PM",
      location: "Grand Park, Downtown LA",
      description:
        "Live outdoor Q&A with quantum experts before a special Shakespeare performance with quantum themes.",
      image: "/placeholder.svg?height=300&width=600",
      icon: <Theater className="w-6 h-6" />,
    },
    {
      title: "Quantum for Kids",
      date: "July 26, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "California Science Center",
      description:
        "Interactive science demos for young learners making quantum concepts accessible and fun for children.",
      image: "/placeholder.svg?height=300&width=600",
      icon: <Atom className="w-6 h-6" />,
    },
  ]

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Event Overview", href: "#event-overview" },
    { name: "Upcoming Events", href: "#upcoming-events" },
    { name: "Volunteer with Us", href: "#volunteer" },
    { name: "Partner with Us", href: "#partner" },
  ]

  return (
    <>
      <Navbar navLinks={navLinks} />
      <main className="min-h-screen bg-gradient-to-br from-la-sky via-la-blush to-la-sand text-gray-900">
        {/* Hero Section */}
        <NeonIsometricMaze />

        {/* Event Overview Section */}
        <section id="event-overview" className="py-20 px-4 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm -z-10"></div>
          <div className="container mx-auto">
            <SectionHeading
              title="Event Overview"
              subtitle="A 10-week summer event series to make quantum mechanics engaging, accessible, and impactful for a diverse audience across LA."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-gradient-to-br from-white to-la-sky p-6 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40 group hover:border-la-sunset/40 transition-all duration-300 transform transition-transform hover:scale-[1.02]">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 font-heading">
                  Increase awareness of quantum mechanics
                </h3>
                <p className="text-gray-600">
                  Bringing quantum concepts to the public through engaging events and accessible explanations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-la-blush p-6 rounded-2xl border border-la-dusk/20 shadow-md shadow-la-sand/40 group hover:border-la-dusk/40 transition-all duration-300 transform transition-transform hover:scale-[1.02]">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-la-dusk to-la-coral flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 font-heading">
                  Engage families, students, and professionals
                </h3>
                <p className="text-gray-600">
                  Creating inclusive events for all ages and expertise levels throughout Los Angeles.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-la-aqua p-6 rounded-2xl border border-la-aqua/20 shadow-md shadow-la-sand/40 group hover:border-la-aqua/40 transition-all duration-300 transform transition-transform hover:scale-[1.02]">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-la-aqua to-la-dusk flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 font-heading">
                  Collaborate with academia and industry
                </h3>
                <p className="text-gray-600">
                  Partnering with UCLA, Caltech, USC and industry leaders to bring expert knowledge to the public.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-la-sunset p-6 rounded-2xl border border-la-coral/20 shadow-md shadow-la-sand/40 group hover:border-la-coral/40 transition-all duration-300 transform transition-transform hover:scale-[1.02]">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-la-sunset to-la-coral flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 font-heading">
                  Make quantum mechanics fun and accessible
                </h3>
                <p className="text-gray-600">
                  Transforming complex concepts into enjoyable, interactive experiences for everyone.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-la-sky to-la-blush p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-heading">
                Join us for a summer of quantum discovery!
              </h3>
              <p className="text-gray-700 mb-6">
                From interactive workshops and public lectures to art exhibitions and family-friendly activities, our
                10-week program offers something for everyone. Stay updated with our latest events and announcements by
                joining our mailing list. Don't miss out on the opportunity to experience quantum mechanics in the
                vibrant setting of Los Angeles!
              </p>
              <div className="flex flex-wrap gap-4">
                <ClickableButton className="bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white hover:opacity-90 transition-all font-medium shadow-sm rounded-full px-6 py-2 text-sm hover:scale-105">
                  Join Mailing List
                </ClickableButton>
                <ClickableButton
                  href="https://quantum2025.org/"
                  className="border-2 border-la-sunset text-la-coral hover:bg-la-sand transition-all shadow-sm rounded-full px-6 py-2 text-sm hover:scale-105"
                >
                  Learn More
                </ClickableButton>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section id="upcoming-events" className="py-20 px-4 bg-la-sky relative">
          <div className="absolute inset-0 opacity-5 bg-venice-texture mix-blend-overlay"></div>
          <div className="container mx-auto">
            <SectionHeading
              title="Upcoming Events"
              subtitle="Join us for these exciting quantum events happening across Los Angeles"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 snap-x overflow-x-auto pb-4 sm:overflow-visible sm:pb-0">
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <ClickableButton className="bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white hover:opacity-90 transition-all font-medium px-6 py-2 text-sm shadow-sm rounded-full hover:scale-105 w-full sm:w-auto">
                View All Events <Sun className="inline-block ml-2 h-4 w-4" />
              </ClickableButton>
            </div>
          </div>
        </section>

        {/* Volunteer with Us Section */}
        <section id="volunteer" className="py-20 px-4 bg-la-blush relative">
          <div className="absolute inset-0 opacity-5 bg-venice-texture mix-blend-overlay"></div>
          <div className="container mx-auto">
            <SectionHeading
              title="Volunteer with Us"
              subtitle="Help us make quantum science accessible to everyone in LA"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md shadow-la-sand/40">
                <h3 className="text-xl font-bold mb-6 text-gray-900 font-heading">Volunteer Opportunities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0">
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
                        className="text-white"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">Social Media</h4>
                      <p className="text-gray-600">
                        Help manage our social media presence and create engaging content.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-dusk to-la-coral flex items-center justify-center flex-shrink-0">
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
                        className="text-white"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">Eventbrite</h4>
                      <p className="text-gray-600">
                        Assist with event setup and management on our Eventbrite platform.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-aqua to-la-dusk flex items-center justify-center flex-shrink-0">
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
                        className="text-white"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <path d="m22 6-10 7L2 6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">Mailing Lists</h4>
                      <p className="text-gray-600">
                        Help manage and grow our mailing lists to keep our community informed.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-aqua to-la-sky flex items-center justify-center flex-shrink-0">
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
                        className="text-white"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">Promotions</h4>
                      <p className="text-gray-600">Distribute flyers and promote our events throughout LA.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-aqua to-la-sky flex items-center justify-center flex-shrink-0">
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
                        className="text-white"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">Contacting Partners</h4>
                      <p className="text-gray-600">Reach out to potential partners and sponsors in the LA area.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-aqua to-la-sky flex items-center justify-center flex-shrink-0">
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
                        className="text-white"
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
                      <h4 className="font-bold text-gray-900 font-heading">Website Maintenance</h4>
                      <p className="text-gray-600">
                        Help keep our website updated with the latest events and information.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-sunset to-la-coral flex items-center justify-center flex-shrink-0">
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
                        className="text-white"
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
                      <h4 className="font-bold text-gray-900 font-heading">Emcees</h4>
                      <p className="text-gray-600">Welcome attendees and help facilitate our events as an emcee.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-sunset to-la-coral flex items-center justify-center flex-shrink-0">
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
                        className="text-white"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">Event Assistants</h4>
                      <p className="text-gray-600">Assist with setup, teardown, and various tasks during our events.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-dusk to-la-aqua flex items-center justify-center flex-shrink-0">
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
                        className="text-white"
                      >
                        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                        <circle cx="12" cy="13" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">Photography</h4>
                      <p className="text-gray-600">
                        Capture memorable moments from our events to share with the community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 font-heading">Why Volunteer With Us?</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0 mt-1">
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
                        className="text-white"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m7 10 3 3 7-7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 font-heading">Make an Impact</h4>
                      <p className="text-gray-700">
                        Help make quantum science accessible to diverse communities across Los Angeles and inspire the
                        next generation of scientists.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-la-dusk to-la-coral flex items-center justify-center flex-shrink-0 mt-1">
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
                        className="text-white"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 font-heading">Build Your Network</h4>
                      <p className="text-gray-700">
                        Connect with leading scientists, educators, and professionals from UCLA, Caltech, USC, and
                        industry partners.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-la-aqua to-la-dusk flex items-center justify-center flex-shrink-0 mt-1">
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
                        className="text-white"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 font-heading">Gain Experience</h4>
                      <p className="text-gray-700">
                        Develop valuable skills in event management, science communication, and community outreach that
                        will enhance your resume.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfodXNeKVG5fIC1mkqorKicN3xoBvnRBZWW5fDti69qX1H_4A/viewform?usp=send_form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <ClickableButton className="w-full bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white hover:opacity-90 transition-all font-medium py-2 text-sm shadow-sm rounded-full hover:scale-105">
                      Apply to Volunteer <PalmTree className="inline-block ml-2 h-4 w-4" />
                    </ClickableButton>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner with Us Section */}
        <section id="partner" className="py-20 px-4 relative bg-la-sand">
          <div className="absolute inset-0 bg-la-skyline bg-no-repeat bg-bottom opacity-10"></div>
          <div className="container mx-auto">
            <SectionHeading
              title="Partner with Us"
              subtitle="Join our mission to make quantum science accessible and engaging for everyone in LA"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 font-heading">
                  Why Partner with Summer of Quantum?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0 mt-1">
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
                        className="text-white"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-bold text-gray-900 font-heading">Community Impact:</span> Reach diverse
                      audiences across Los Angeles and contribute to scientific literacy.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0 mt-1">
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
                        className="text-white"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-bold text-gray-900 font-heading">Networking:</span> Connect with leading
                      institutions like UCLA, Caltech, USC, and industry innovators.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0 mt-1">
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
                        className="text-white"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-bold text-gray-900 font-heading">Visibility:</span> Showcase your
                      organization's commitment to science education and innovation.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0 mt-1">
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
                        className="text-white"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-bold text-gray-900 font-heading">Talent Pipeline:</span> Connect with the
                      next generation of quantum scientists and engineers.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md shadow-la-sand/40">
                <h3 className="text-xl font-bold mb-4 text-gray-900 font-heading">Partnership Opportunities</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0">
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
                        className="text-white"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">Financial Sponsorship</h4>
                      <p className="text-gray-600">
                        Support our events and programs with financial contributions at various levels.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-sunset to-la-coral flex items-center justify-center flex-shrink-0">
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
                        className="text-white"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">Venue Hosting</h4>
                      <p className="text-gray-600">
                        Provide space for workshops, lectures, or exhibitions at your facility.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-dusk to-la-coral flex items-center justify-center flex-shrink-0">
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
                        className="text-white"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">Expert Speakers</h4>
                      <p className="text-gray-600">
                        Share your expertise by providing speakers for our events and workshops.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <ClickableButton className="w-full bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white hover:opacity-90 transition-all font-medium shadow-sm rounded-full py-2 text-sm hover:scale-105">
                    Become a Partner <Sun className="inline-block ml-2 h-4 w-4" />
                  </ClickableButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-white border-t border-la-sunset/20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk font-heading">
                  Summer of Quantum in LA
                </h3>
                <p className="text-gray-600 mb-6">
                  A 10-week summer event series to make quantum mechanics engaging, accessible, and impactful for a
                  diverse audience across LA, in collaboration with UCLA, Caltech, USC, and other partners.
                </p>
                <div className="flex space-x-4">
                  <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-la-coral transition-colors">
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
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-la-dusk transition-colors">
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
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-la-aqua transition-colors">
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
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-gray-900 font-heading">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-la-coral transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#event-overview" className="text-gray-600 hover:text-la-coral transition-colors">
                      Event Overview
                    </a>
                  </li>
                  <li>
                    <a href="#upcoming-events" className="text-gray-600 hover:text-la-coral transition-colors">
                      Upcoming Events
                    </a>
                  </li>
                  <li>
                    <a href="#volunteer" className="text-gray-600 hover:text-la-coral transition-colors">
                      Volunteer with Us
                    </a>
                  </li>
                  <li>
                    <a href="#partner" className="text-gray-600 hover:text-la-coral transition-colors">
                      Partner with Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-gray-900 font-heading">Contact</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600">
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

            <div className="mt-12 pt-8 border-t border-la-sunset/20 text-center text-gray-500 text-sm">
              <p>© {new Date().getFullYear()} Sadman Ahmed Shanto. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
