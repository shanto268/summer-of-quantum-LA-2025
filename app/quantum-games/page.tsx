'use client'

import { Analytics } from '@vercel/analytics/react'
import { Gamepad2 } from 'lucide-react'
import Navbar from '../../components/navbar'
import SectionHeading from '../../components/section-heading'
import SponsorsSection from '../../components/SponsorsSection'

export default function QuantumGames() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Event Overview', href: '/#event-overview' },
    { name: 'Upcoming Events', href: '/#upcoming-events' },
    { name: 'Join Our Mailing List', href: '/signup' },
    { name: 'Partner with Us', href: '/sponsorship' },
  ]

  const sponsors = [
    {
      name: 'Papafut Games',
      description:
        'A pioneering company in quantum board games, bringing quantum concepts to life through engaging gameplay.',
      productName: "Niel's Chess",
      productDescription:
        'A quantum variant of chess that can be played on a traditional board, introducing players to quantum concepts like superposition and entanglement.',
      buyLink: 'https://www.papafut.com/category/all-products',
      learnMoreLink: 'https://arxiv.org/abs/2405.00677',
      howToPlayLink: 'https://www.youtube.com/watch?v=dMxnHwS23DA',
    },
    {
      name: 'Team Quantum Games',
      description:
        'A game development studio dedicated to making quantum concepts accessible and engaging through interactive experiences.',
      productName: "Planck's Room",
      productDescription:
        'A hidden objects game that explores the fascinating connections between history, science, and art. Travel through eight beautifully crafted rooms, each dedicated to a historical figure whose work has shaped quantum physics and computing.',
      buyLink: 'https://www.teamquantumgames.com/plancksroom',
      learnMoreLink: 'https://www.teamquantumgames.com/plancksroom',
    },
    {
      name: 'Bezier Games',
      description:
        'A renowned board game publisher known for creating innovative and engaging games that blend strategy with unique mechanics.',
      productName: 'Cat in the Box: Deluxe Edition',
      productDescription:
        "A quantum trick-taking card game where your card's color isn't defined until you play it! Create hypotheses, avoid paradoxes, and score points by connecting tokens on the research board.",
      buyLink: 'https://beziergames.com/products/cat-in-the-box-deluxe-edition',
      howToPlayLink: 'https://www.youtube.com/watch?v=IeKjdAIwjbY',
    },
    {
      name: 'Quantum Realm Games',
      description:
        'A pioneering game studio dedicated to making quantum mechanics intuitive through play, creating authentic quantum-native gaming experiences.',
      productName: 'Quantum Chess',
      productDescription:
        'The game you saw in Caltech IQIM\'s "Anyone Can Quantum" where Paul Rudd beat Stephen Hawking. Experience quantum mechanics through chess, with pieces that can exist in multiple locations simultaneously through superposition.',
      buyLink: 'https://store.steampowered.com/app/453870/Quantum_Chess/',
      learnMoreLink: 'https://quantumrealmgames.com/',
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
              title="Quantum Games"
              subtitle="Experience quantum concepts through interactive games and entertainment."
            />

            {/* Two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Left column - Sponsors */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <SponsorsSection sponsors={sponsors} />
                </div>
              </div>

              {/* Right column - Events */}
              <div className="lg:col-span-2 space-y-8">
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
                    Odyssey Games in Pasadena. Learn about quantum concepts
                    while having fun with friends and fellow enthusiasts.
                  </p>
                  <div className="bg-la-sand/20 p-4 rounded-lg mb-4">
                    <p className="text-gray-700">
                      <strong>Date:</strong> June 25th, 2024
                      <br />
                      <strong>Time:</strong> 7:30 PM - 9:30 PM
                      <br />
                      <strong>Location:</strong> Odyssey Games (1795 E Colorado
                      Blvd, Pasadena, CA 91106)
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

                {/* Video Games Section */}
                <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40">
                  <div className="flex items-center gap-2 mb-4 text-la-coral">
                    <Gamepad2 className="w-6 h-6" />
                    <span className="font-bold text-lg">
                      Quantum Video Games
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Join us for an exciting showcase of quantum-themed video
                    games from QuantumRealmGames. Experience quantum mechanics
                    through immersive gameplay and interactive demonstrations.
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

                {/* Online Games Section */}
                <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40">
                  <div className="flex items-center gap-2 mb-4 text-la-coral">
                    <Gamepad2 className="w-6 h-6" />
                    <span className="font-bold text-lg">
                      Online Quantum Games
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Experience quantum concepts through these open-source online
                    games. All games are freely available and can be played
                    anytime, anywhere.
                  </p>
                  <div className="bg-la-sand/20 p-4 rounded-lg mb-4">
                    <p className="text-gray-700">
                      <strong>Platform:</strong> Online (Web-based)
                      <br />
                      <strong>Availability:</strong> Free and open-source
                    </p>
                  </div>

                  {/* Recommended Games */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Recommended Games
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a
                        href="https://decodoku.medium.com/introducing-the-worlds-first-game-for-a-quantum-computer-50640e3c22e4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-la-sand/10 rounded-lg hover:bg-la-sand/20 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900">Decodoku</h4>
                        <p className="text-sm text-gray-700">
                          The world's first game for a quantum computer
                        </p>
                      </a>

                      <a
                        href="https://github.com/danielbultrini/Quantum-Hold-em-"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-la-sand/10 rounded-lg hover:bg-la-sand/20 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900">
                          Quantum Hold'em
                        </h4>
                        <p className="text-sm text-gray-700">
                          Quantum version of Texas Hold'em poker
                        </p>
                      </a>

                      <a
                        href="https://github.com/desireevl/quantum-catsweeper"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-la-sand/10 rounded-lg hover:bg-la-sand/20 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900">
                          Quantum Catsweeper
                        </h4>
                        <p className="text-sm text-gray-700">
                          Quantum version of Minesweeper
                        </p>
                      </a>

                      <a
                        href="https://github.com/lukasszz/FlappyQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-la-sand/10 rounded-lg hover:bg-la-sand/20 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900">FlappyQ</h4>
                        <p className="text-sm text-gray-700">
                          Quantum version of Flappy Bird
                        </p>
                      </a>

                      <a
                        href="https://github.com/QPong/QPong"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-la-sand/10 rounded-lg hover:bg-la-sand/20 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900">QPong</h4>
                        <p className="text-sm text-gray-700">
                          Quantum version of Pong
                        </p>
                      </a>

                      <a
                        href="https://github.com/qonwaygameoflife/qonwaygameoflife"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-la-sand/10 rounded-lg hover:bg-la-sand/20 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900">
                          Qonway Game of Life
                        </h4>
                        <p className="text-sm text-gray-700">
                          Quantum version of Conway's Game of Life
                        </p>
                      </a>

                      <a
                        href="https://github.com/nbartzokas/quantum-gate-quest"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-la-sand/10 rounded-lg hover:bg-la-sand/20 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900">
                          Quantum Gate Quest
                        </h4>
                        <p className="text-sm text-gray-700">
                          A puzzle game about quantum gates
                        </p>
                      </a>

                      <a
                        href="https://github.com/sorin-bolos/schrodingers-cat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-la-sand/10 rounded-lg hover:bg-la-sand/20 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900">
                          Schrödinger's Cat
                        </h4>
                        <p className="text-sm text-gray-700">
                          A game exploring quantum superposition
                        </p>
                      </a>

                      <a
                        href="https://github.com/kartikeya-git/Quantum-Checkers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-la-sand/10 rounded-lg hover:bg-la-sand/20 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900">
                          Quantum Checkers
                        </h4>
                        <p className="text-sm text-gray-700">
                          Quantum version of Checkers
                        </p>
                      </a>

                      <a
                        href="https://github.com/maddy-tod/tictactoe-roli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-la-sand/10 rounded-lg hover:bg-la-sand/20 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900">
                          Quantum Tic-Tac-Toe
                        </h4>
                        <p className="text-sm text-gray-700">
                          Quantum version of Tic-Tac-Toe
                        </p>
                      </a>

                      <a
                        href="https://xxx887.itch.io/quantum-fruit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-la-sand/10 rounded-lg hover:bg-la-sand/20 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900">
                          Quantum Fruit
                        </h4>
                        <p className="text-sm text-gray-700">
                          A quantum-themed fruit collection game
                        </p>
                      </a>
                    </div>
                  </div>
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
