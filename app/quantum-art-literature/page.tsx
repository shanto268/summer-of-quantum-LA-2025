'use client'

import { Analytics } from '@vercel/analytics/react'
import { Book, Brush, Calendar, MapPin, Send } from 'lucide-react'
import Navbar from '../../components/navbar'
import SectionHeading from '../../components/section-heading'

export default function QuantumArtLiterature() {
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
      href: '/sponsorship',
    },
    {
      name: 'Volunteer with Us',
      href: 'https://forms.gle/ZSaeCCjfn7HQjELy5',
      external: true,
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
              title="Quantum Art & Literature"
              subtitle="Celebrating the intersection of quantum science and creative expression"
            />

            {/* Featured Poem */}
            <div className="mb-12 bg-gradient-to-br from-white to-la-sky p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0">
                  <Book className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-heading">
                  Featured Poem
                </h3>
              </div>
              <div className="prose prose-lg max-w-none">
                <h4 className="text-lg font-bold text-gray-900 font-heading mb-4">
                  Summer of Quantum in LA
                </h4>
                <p className="text-gray-600 italic mb-2">
                  "Gather here, where beach meets bits,
                  <br />
                  beneath the sun that sparks our wonder,
                  <br />
                  where qubits steer the sails of tech,
                  <br />
                  and laughter rides the ocean breeze—
                  <br />
                  for a summer of quantum in LA.
                  <br />
                  <br />
                  From Hollywood to Hilbert space,
                  <br />
                  we surf atop the wavefunctions,
                  <br />
                  with radars scanning the quantaverse,
                  <br />
                  charting out the probabilities—
                  <br />
                  to decode secrets hidden in nature.
                  <br />
                  <br />
                  For kids and adults from every shore
                  <br />
                  to dive in, game, watch, and learn,
                  <br />
                  the universe unfolding through our labs,
                  <br />
                  where information battles noise,
                  <br />
                  and uncertainty rules the tides."
                </p>
                <p className="text-right text-gray-500">— Ajith Aditi</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Submit Your Work */}
              <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40 hover:border-la-sunset/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-heading">
                    Submit Your Work
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  We're looking for quantum-inspired art and literature! Whether
                  it's a poem, short story, painting, or digital art, we'd love
                  to showcase your creative interpretation of quantum science.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://forms.gle/xkixRSrQXnD6Qbzp9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white hover:opacity-90 transition-all font-medium shadow-sm rounded-full py-3 text-sm hover:scale-105 text-center"
                  >
                    Submit Art
                  </a>
                  <a
                    href="https://forms.gle/ttTqJytFdscrG7GR8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white hover:opacity-90 transition-all font-medium shadow-sm rounded-full py-3 text-sm hover:scale-105 text-center"
                  >
                    Submit Literature
                  </a>
                </div>
              </div>

              {/* Book Donations */}
              <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40 hover:border-la-sunset/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0">
                    <Book className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-heading">
                    Donate Quantum Books
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  Help us spread quantum knowledge through Little Free
                  Libraries! We're collecting quantum and physics-related books
                  to distribute across Los Angeles.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-la-coral" />
                    <span>Send books to:</span>
                  </div>
                  <div className="pl-7 text-gray-600">
                    <p>Sadman Ahmed Shanto</p>
                    <p>Seaver Science Center 102</p>
                    <p>920 Bloom Walk</p>
                    <p>Los Angeles, CA 90089</p>
                  </div>
                </div>

                <a
                  href="https://littlefreelibrary.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border-2 border-la-sunset text-la-coral hover:bg-la-sand transition-all font-medium shadow-sm rounded-full py-3 text-sm hover:scale-105 text-center"
                >
                  Learn About Little Free Libraries
                </a>
              </div>

              {/* Utility Box Art */}
              <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40 hover:border-la-sunset/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0">
                    <Brush className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-heading">
                    Utility Box Quantum Art
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  We're working on beautifying utility boxes around LA with
                  quantum-inspired art! Submit your concept art and join us in
                  making quantum science visible in our community.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://forms.gle/mdT9Cd7ATzKDws4e8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white hover:opacity-90 transition-all font-medium shadow-sm rounded-full py-3 text-sm hover:scale-105 text-center"
                  >
                    Submit Concept Art
                  </a>
                  <a
                    href="https://dpw.lacounty.gov/ldd/lddservices/roadPermits/utilityBoxBeautification.shtml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border-2 border-la-sunset text-la-coral hover:bg-la-sand transition-all font-medium shadow-sm rounded-full py-3 text-sm hover:scale-105 text-center"
                  >
                    Learn About the Program
                  </a>
                </div>
              </div>

              {/* Coming Soon */}
              <div className="bg-gradient-to-br from-white to-la-sky p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40 hover:border-la-sunset/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-heading">
                    More Coming Soon!
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  We're planning more art and literature initiatives! Join our
                  mailing list to stay updated on new opportunities to
                  contribute and participate.
                </p>

                <div className="space-y-4">
                  <a
                    href="/signup"
                    className="block w-full bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white hover:opacity-90 transition-all font-medium shadow-sm rounded-full py-3 text-sm hover:scale-105 text-center"
                  >
                    Join Our Mailing List
                  </a>
                  <a
                    href="/"
                    className="block w-full border-2 border-la-sunset text-la-coral hover:bg-la-sand transition-all font-medium shadow-sm rounded-full py-3 text-sm hover:scale-105 text-center"
                  >
                    Return to Homepage
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Analytics />
    </>
  )
}
