'use client'

import { Analytics } from '@vercel/analytics/react'
import { Gamepad2 } from 'lucide-react'
import Navbar from '../../../components/navbar'
import SectionHeading from '../../../components/section-heading'
import SponsorsSection from '../../../components/SponsorsSection'
import es from '@/messages/es.json'
import en from '@/messages/en.json'
import { useEffect, useState } from 'react'

export default function QuantumGames() {
  const [locale, setLocale] = useState<'en' | 'es'>('en');
      const [t, setT] = useState(en);
    
    useEffect(() => {
        const storedLocale = sessionStorage.getItem('NEXT_LOCALE') as 'en' | 'es' || 'en';
        setLocale(storedLocale);
        setT(storedLocale === 'es' ? es : en);
    
        const handleChange = () => {
          const updated = sessionStorage.getItem('NEXT_LOCALE') as 'en' | 'es' || 'en';
          setLocale(updated);
          setT(updated === 'es' ? es : en);
        };
    
        // Listen for locale changes
        window.addEventListener('locale-change', handleChange);
    
        return () => {
          window.removeEventListener('locale-change', handleChange);
        };
      }, []);


    const navLinks = [
    { name: t.home, href: '/' },
    { name: t.eventOverview, href: '/#event-overview' },
    { name: t.upcomingEvents, href: '/#upcoming-events' },
    { name: t.calendar, href: '/calendar' },
    { name: t.joinMailingList, href: '/signup' },
 
    { name: t.partnerWithUs, href: '/sponsorship' },
  ]
  
  

  const sponsors = [
    {
      name: locale === 'en'
        ? 'Papafut Games'
        : 'Papafut Juegos',
      description:
        locale === 'en'
          ? 'A pioneering company in quantum board games, bringing quantum concepts to life through engaging gameplay.'
          : 'Una empresa pionera en juegos de mesa cuánticos, que da vida a los conceptos cuánticos a través de un juego atractivo.',
      productName: locale === 'en'
        ? "Niel's Chess"
        : "Ajedrez de Niel",
      productDescription:
        locale === 'en'
          ? 'A quantum variant of chess that can be played on a traditional board, introducing players to quantum concepts like superposition and entanglement.'
          : 'Una variante cuántica del ajedrez que se puede jugar en un tablero tradicional, introduciendo a los jugadores en conceptos cuánticos como la superposición y el entrelazamiento.',
      buyLink: 'https://www.papafut.com/category/all-products',
      learnMoreLink: 'https://arxiv.org/abs/2405.00677',
      howToPlayLink: 'https://www.youtube.com/watch?v=dMxnHwS23DA',
    },
    {
      name: locale === 'en'
        ? 'Team Quantum Games'
        : 'Equipo Juegos Cuánticos',
      description:
        locale === 'en'
          ? 'A game development studio dedicated to making quantum concepts accessible and engaging through interactive experiences.'
          : 'Un estudio de desarrollo de juegos dedicado a hacer que los conceptos cuánticos sean accesibles y atractivos a través de experiencias interactivas.',
productName: locale === 'en'
  ? "Planck's Room"
  : "La Habitación de Planck",
productDescription:
  locale === 'en'
    ? "A hidden objects game that explores the fascinating connections between history, science, and art. Travel through eight beautifully crafted rooms, each dedicated to a historical figure whose work has shaped quantum physics and computing."
    : "Un juego de objetos ocultos que explora las fascinantes conexiones entre la historia, la ciencia y el arte. Viaja a través de ocho habitaciones bellamente diseñadas, cada una dedicada a una figura histórica cuyo trabajo ha dado forma a la física y la computación cuántica.",
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
    {
      name: '|Hop> Quantum Game',
      description:
        'A competitive card game that makes quantum physics concepts accessible and fun through strategic gameplay.',
      productName: '|Hop> Quantum Game',
      productDescription:
        'Move electrons between electrodes in this engaging card game while learning about quantum mechanics. Perfect for both beginners and experts.',
      buyLink: 'https://www.hopquantumgame.com/shop/',
      learnMoreLink: 'https://www.hopquantumgame.com/rules/',
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
            title={locale === 'es' ? 'Juegos Cuánticos' : 'Quantum Games'}
            subtitle={
              locale === 'es'
                ? 'Explora conceptos cuánticos a través de juegos y entretenimiento interactivo.'
                : 'Experience quantum concepts through interactive games and entertainment.'
            }
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
                    {locale === 'es' ? 'Noche de Juegos Cuánticos' : 'Quantum Games Night'}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  {locale === 'es'
                    ? 'Únete a nosotros para una noche de juegos de mesa y videojuegos con temática cuántica en Odyssey Games en Pasadena. Aprende sobre conceptos cuánticos mientras te diviertes con amigos y entusiastas. Tendremos una variedad de juegos disponibles, desde juegos físicos hasta experiencias digitales.'
                    : "Join us for an evening of quantum-themed board games and video games at Odyssey Games in Pasadena. Learn about quantum concepts while having fun with friends and fellow enthusiasts. We'll have a variety of games available, from physical board games to digital experiences."}
                </p>
                <div className="bg-la-sand/20 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">
                    <strong>{locale === 'es' ? 'Fecha:' : 'Date:'}</strong> June 26th, 2025
                    <br />
                    <strong>{locale === 'es' ? 'Hora:' : 'Time:'}</strong> 7:30 PM - 9:30 PM
                    <br />
                    <strong>{locale === 'es' ? 'Ubicación:' : 'Location:'}</strong> Odyssey Games (1795 E Colorado Blvd, Pasadena, CA 91106)
                    <br />
                    <strong>{locale === 'es' ? 'Registro:' : 'Registration:'}</strong>{' '}
                    {locale === 'es'
                      ? 'Entradas gratuitas disponibles en Eventbrite'
                      : 'Free tickets available on Eventbrite'}
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
                <a
                  href="https://www.eventbrite.com/e/quantum-board-games-night-tickets-1409558329909?aff=oddtdtcreator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-la-coral text-white font-medium shadow-sm rounded-full py-3 text-sm hover:bg-la-coral/90 transition-colors text-center"
                >
                  {locale === 'es' ? 'Regístrate en Eventbrite' : 'Register on Eventbrite'}
                </a>
              </div>

              {/* Online Games Section */}
              <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40">
                <div className="flex items-center gap-2 mb-4 text-la-coral">
                  <Gamepad2 className="w-6 h-6" />
                  <span className="font-bold text-lg">
                    {locale === 'es' ? 'Juegos Cuánticos en Línea' : 'Online Quantum Games'}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  {locale === 'es'
                    ? 'Explora conceptos cuánticos a través de estos juegos en línea de código abierto. Todos los juegos están disponibles de forma gratuita.'
                    : 'Experience quantum concepts through these open-source online games. All games are freely available and can be played anytime, anywhere.'}
                </p>
                <div className="bg-la-sand/20 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">
                    <strong>{locale === 'es' ? 'Plataforma:' : 'Platform:'}</strong>{' '}
                    {locale === 'es' ? 'En línea (basado en la web)' : 'Online (Web-based)'}
                    <br />
                    <strong>{locale === 'es' ? 'Disponibilidad:' : 'Availability:'}</strong>{' '}
                    {locale === 'es' ? 'Gratis y de código abierto' : 'Free and open-source'}
                  </p>
                </div>

                {/* Recommended Games */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {locale === 'es' ? 'Juegos Recomendados' : 'Recommended Games'}
                  </h3>
                  {/* Keep game names/descriptions as-is or translate selectively if you want */}
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
