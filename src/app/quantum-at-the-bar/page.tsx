'use client'

import { Analytics } from '@vercel/analytics/react'
import { Beer, Calendar, Clock, MapPin } from 'lucide-react'
import Navbar from '../../../components/navbar'
import SectionHeading from '../../../components/section-heading'

import es from '@/messages/es.json';
import en from '@/messages/en.json';
import {useState, useEffect } from 'react';


export default function QuantumAtTheBar() {
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
    { name: locale === 'en' ? 'Home' : 'Inicio', href: '/' },
    { name: locale === 'en' ? 'Event Overview' : 'Resumen del Evento', href: '/#event-overview' },
    { name: locale === 'en' ? 'Upcoming Events' : 'Próximos Eventos', href: '/#upcoming-events' },
    { name: locale === 'en' ? 'Calendar' : 'Calendario', href: '/calendar' },
    { name: locale === 'en' ? 'Join Our Mailing List' : 'Únete a Nuestra Lista de Correo', href: '/signup' },
    { name: locale === 'en' ? 'Our Volunteers' : 'Nuestros Voluntarios', href: '/volunteers' },
    { name: locale === 'en' ? 'Partner with Us' : 'Colabora con Nosotros', href: '/sponsorship' },
    { name: locale === 'en' ? 'Quantum Art & Literature' : 'Arte y Literatura Cuántica', href: '/quantum-art-literature' },
  ]

  const barEvents = [
    {
      venue: 'Chapman Crafted',
      title: locale === 'en' ? 'Quantum Beer Night' : 'Noche Cuántica de Cerveza',
      date: 'June 18, 2025',
      time: '6:00 PM - 8:00 PM',
      location: '541 N Lemon St, Orange, CA 92867',
      description:
        locale === 'en'
          ? 'Join quantum physicists from Chapman University for an evening of quantum discussions over craft beer! Want to learn some quantum physics first? Attend our public talk at Chapman University earlier that day.'
          : 'Únete a físicos cuánticos de Chapman University para una noche de discusiones sobre cuántica con cerveza artesanal. ¿Quieres aprender física cuántica primero? Asiste a nuestra charla pública ese mismo día en Chapman University.',
      eventbriteLink:
        'https://www.eventbrite.com/e/quantum-for-everyone-a-public-talk-at-chapman-university-tickets-1395446009579?aff=oddtdtcreator',
      venueLink: 'https://www.chapmancrafted.beer/',
      isAvailable: true,
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
              title={locale === 'en' ? 'Quantum at the Bar' : 'Cuántica en el Bar'}
              subtitle={
                locale === 'en'
                  ? 'Join us for casual quantum discussions over drinks at local bars across Los Angeles'
                  : 'Únete a nosotros para charlas cuánticas informales con bebidas en bares locales por todo Los Ángeles'
              }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {barEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40 hover:border-la-sunset/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0">
                      <Beer className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 font-heading">
                      {event.venue}
                    </h3>
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 font-heading mb-4">
                    {event.title}
                  </h4>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5 text-la-coral" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-5 h-5 text-la-coral" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5 text-la-coral" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{event.description}</p>

                  <div className="rounded-xl overflow-hidden border border-la-sunset/20 shadow mb-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.9999999999995!2d-117.852036684789!3d33.7932471806001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0e2e2e2e2e3%3A0x7e2e2e2e2e2e2e2e!2sChapman%20Crafted!5e0!3m2!1sen!2sus!4v1718040000004!5m2!1sen!2sus"
                      width="100%"
                      height="220"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Chapman Crafted Map"
                    ></iframe>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href={event.eventbriteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white hover:opacity-90 transition-all font-medium shadow-sm rounded-full py-3 text-sm hover:scale-105 text-center"
                    >
                      {locale === 'en' ? 'Register for Talk' : 'Regístrate para la Charla'}
                    </a>
                    <a
                      href={event.venueLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-white border border-la-sunset text-la-sunset hover:bg-la-sunset/5 transition-all font-medium shadow-sm rounded-full py-3 text-sm hover:scale-105 text-center"
                    >
                      {locale === 'en' ? 'Visit Venue Website' : 'Visita el Sitio del Lugar'}
                    </a>
                  </div>
                </div>
              ))}

              {/* Future Events Card */}
              <div className="bg-gradient-to-br from-white to-la-sky p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40 hover:border-la-sunset/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0">
                    <Beer className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-heading">
                    {locale === 'en' ? 'More Events Coming Soon!' : '¡Más Eventos Muy Pronto!'}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  {locale === 'en'
                    ? "We're planning more Quantum at the Bar events across Los Angeles! Join our mailing list to be the first to know about new events, or check back here for updates. Each event will feature quantum physicists ready to chat about the fascinating world of quantum science over drinks."
                    : '¡Estamos planeando más eventos de Cuántica en el Bar en Los Ángeles! Únete a nuestra lista de correo para ser el primero en enterarte de nuevos eventos o vuelve a visitar esta página para actualizaciones. Cada evento contará con físicos cuánticos listos para conversar sobre el fascinante mundo de la ciencia cuántica mientras disfrutas de una bebida.'}
                </p>

                <div className="space-y-4">
                  <a
                    href="/signup"
                    className="block w-full bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white hover:opacity-90 transition-all font-medium shadow-sm rounded-full py-3 text-sm hover:scale-105 text-center"
                  >
                    {locale === 'en' ? 'Join Our Mailing List' : 'Únete a Nuestra Lista de Correo'}
                  </a>
                  <a
                    href="/"
                    className="block w-full border-2 border-la-sunset text-la-coral hover:bg-la-sand transition-all font-medium shadow-sm rounded-full py-3 text-sm hover:scale-105 text-center"
                  >
                    {locale === 'en' ? 'Return to Homepage' : 'Volver a la Página Principal'}
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
