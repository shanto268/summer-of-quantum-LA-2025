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
import Navbar from '../../../components/navbar'
import SectionHeading from '../../../components/section-heading'

import es from '@/messages/es.json';
import en from '@/messages/en.json';
import {useState, useEffect } from 'react';

export default function QuantumForKids() {
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
    { name: locale === 'en' ? 'Join Our Mailing List' : 'Únete a Nuestro Boletín', href: '/signup' },
    { name: locale === 'en' ? 'Our Volunteers' : 'Nuestros Voluntarios', href: '/volunteers' },
    { name: locale === 'en' ? 'Partner with Us' : 'Colabora con Nosotros', href: '/sponsorship' },
  ]

  return (
    <>
      <Navbar navLinks={navLinks} />
      <main className="min-h-screen bg-gradient-to-br from-la-sky via-la-blush to-la-sand text-gray-900 pt-20">
        <section className="py-12 sm:py-20 px-4 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm -z-10"></div>
          <div className="container mx-auto max-w-3xl">
          <SectionHeading
              title={
                locale === 'en'
                  ? 'Quantum for Kids @ Caltech'
                  : 'Cuántica para Niños @ Caltech'
              }
              subtitle={
                locale === 'en'
                  ? 'An interactive science day for curious minds - hands-on demos, crafts, coding, and more!'
                  : 'Un día de ciencia interactiva para mentes curiosas: demostraciones prácticas, manualidades, codificación y más.'
              }
            />
            <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40 mb-8">
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-la-coral">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">
                    {locale === 'en'
    ? 'Aimed mainly at middle schoolers, but younger and older kids (and parents) are all welcome!'
    : 'Principalmente para estudiantes de secundaria, pero los niños más pequeños, mayores (¡y padres!) también son bienvenidos.'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-la-coral">
                  <Calendar className="w-5 h-5" />
                    <span className="font-medium">
                    {locale === 'en' ? 'Date: July 12th, 2025' : 'Fecha: July 12th, 2025'}
                    </span>
                </div>
                <div className="flex items-center gap-2 text-la-coral">
                  <Clock className="w-5 h-5" />
                    <span className="font-medium">
                    {locale === 'en' ? 'Time: 10:00 AM – 2:00 PM' : 'Hora: 10:00 AM – 2:00 PM'}
                    </span>
                </div>
                <div className="flex items-center gap-2 text-la-coral">
                  <MapPin className="w-5 h-5" />
                    <span className="font-medium">
                    {locale === 'en' ? 'Location: Caltech Campus' : 'Ubicación: Campus de Caltech'}
                    </span>
                </div>
              </div>
                <p className="text-gray-700 mb-6">
                {locale === 'en'
                  ? `Dive into the world of quantum science with hands-on activities,
        interactive demos, creative crafts, coding workshops, and more!
        Kids will explore at their own pace, collect stamps in their
        "Quantum Explorer Passport," and discover the wonders of the
        quantum world with real scientists and educators.`
                  : `¡Sumérgete en el mundo de la ciencia cuántica con actividades prácticas,
        demostraciones interactivas, manualidades creativas, talleres de codificación y más!
        Los niños explorarán a su propio ritmo, coleccionarán sellos en su
        "Pasaporte de Explorador Cuántico" y descubrirán las maravillas del
        mundo cuántico junto a científicos y educadores reales.`}
                </p>
              <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 mt-8 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-la-coral" />  {locale === 'en' ? 'Event Highlights' : 'Momentos Destacados del Evento'}
              </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>
                  <b>{locale === 'en' ? 'Welcome & Orientation:' : 'Bienvenida y Orientación:'}</b> {locale === 'en'
            ? 'Get your event map, "Quantum Explorer Passport," and meet the team!'
            : 'Obtén tu mapa del evento, tu "Pasaporte Cuántico" y conoce al equipo!'}
                </li>
                <li>
                  <b>{locale === 'en' ? 'Activity Zones:' : 'Zonas de Actividad:'}</b> {locale === 'en'
            ? 'Explore hands-on science demos, quantum crafts, coding workshops, and more at your own pace.'
            : 'Explora demostraciones científicas prácticas, manualidades cuánticas, talleres de codificación y más a tu propio ritmo.'}
                </li>
                <li>
                  <b>{locale === 'en' ? 'Quantum Demos & Hands-On Science:' : 'Demostraciones Cuánticas y Ciencia Práctica:'}</b> {locale === 'en'
            ? 'Try the double-slit experiment, superposition spin wheel, and entanglement games.'
            : 'Prueba el experimento de doble rendija, la rueda de superposición y juegos de entrelazamiento.'}
                </li>
                <li>
                  <b>{locale === 'en' ? 'Quantum Crafts:' : 'Manualidades Cuánticas:'}</b> {locale === 'en'
            ? 'Make qubit bracelets, atom models, and "uncertainty" watercolor art.'
            : 'Haz pulseras de qubits, modelos de átomos y arte en acuarela de "incertidumbre".'}
                </li>
                <li>
                  <b>{locale === 'en' ? 'Experiment & Simulation Workshop:' : 'Taller de Experimentos y Simulaciones:'}</b> {locale === 'en'
            ? 'Build quantum games and simulations using Scratch and simple circuits.'
            : 'Crea juegos y simulaciones cuánticas usando Scratch y circuitos simples.'}
                </li>
                <li>
                  <b>{locale === 'en' ? 'Quantum Q&A Corner:' : 'Rincón de Preguntas Cuánticas:'}</b> {locale === 'en'
            ? 'Ask real scientists your biggest questions about quantum and science careers.'
            : 'Pregunta a científicos reales tus dudas sobre cuántica y carreras científicas.'}
                </li>
                <li>
                  <b>{locale === 'en' ? 'Scavenger Hunt:' : 'Búsqueda del Tesoro:'}</b> {locale === 'en'
            ? 'Complete clue-based tasks around campus and earn prizes!'
            : 'Completa tareas con pistas por el campus y gana premios!'}
                </li>
                <li>
                  <b>{locale === 'en' ? 'Wrap-Up:' : 'Cierre:'}</b> {locale === 'en'
            ? 'Turn in your stamped passport for a sticker and group photo.'
            : 'Entrega tu pasaporte sellado para recibir una calcomanía y una foto grupal.'}
                </li>
                </ul>
                <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 mt-8 flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-la-coral" /> {locale === 'en' ? 'Activity Zones' : 'Zonas de Actividad'}
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>
                  <b>{locale === 'en' ? 'Zone A: Quantum Demos & Science' : 'Zona A: Demostraciones Cuánticas y Ciencia'}</b> {locale === 'en'
            ? '- Probability games and hands-on experiments.'
            : '- Juegos de probabilidad y experimentos prácticos.'}
                </li>
                <li>
                  <b>{locale === 'en' ? 'Zone B: Quantum Crafts' : 'Zona B: Manualidades Cuánticas'}</b> {locale === 'en'
            ? '- Projects to take home.'
            : '- Proyectos para llevar a casa.'}
                </li>
                <li>
                  <b>{locale === 'en' ? 'Zone C: Coding & Simulations' : 'Zona C: Codificación y Simulaciones'}</b> {locale === 'en'
            ? '- Build quantum games and experiments in Scratch.'
            : '- Crea juegos y experimentos cuánticos en Scratch.'}
                </li>
                <li>
                  <b>{locale === 'en' ? 'Zone D: Ask a Scientist' : 'Zona D: Pregunta a un Científico'}</b> {locale === 'en'
            ? '- Q&A with quantum researchers and mentors.'
            : '- Preguntas y respuestas con investigadores y mentores cuánticos.'}
                </li>
                </ul>
                <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 mt-8 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-la-coral" /> {locale === 'en' ? 'Why Attend?' : '¿Por Qué Asistir?'}
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>{locale === 'en'
            ? 'Fun, hands-on learning for all ages and backgrounds'
            : 'Aprendizaje divertido y práctico para todas las edades y niveles.'}</li>
                <li>{locale === 'en'
            ? "Meet real scientists and explore Caltech's campus"
            : 'Conoce a científicos reales y explora el campus de Caltech.'}</li>
                <li>{locale === 'en'
            ? 'Earn prizes and take home your own quantum creations'
            : 'Gana premios y lleva a casa tus propias creaciones cuánticas.'}</li>
                <li>{locale === 'en'
            ? 'Parents welcome and encouraged to participate'
            : 'Padres bienvenidos y animados a participar.'}</li>
                <li>{locale === 'en'
            ? 'All activities are free and open to the public (registration required)'
            : 'Todas las actividades son gratuitas y abiertas al público (se requiere registro).'}</li>
              
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

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      {locale === 'en'
                      ? 'Getting "Your payment was declined" Error from Eventbrite?'
                      : '¿Recibes el error "Your payment was declined" de Eventbrite?'}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {locale === 'en' ? (
                      <>
                        We are not sure why some guests are getting this error.
                        Please{' '}
                        <a
                        href="mailto:summerofquantumla@gmail.com?subject=Quantum for Kids @ Caltech"
                        className="text-la-coral hover:underline"
                        >
                        send an email to summerofquantumla@gmail.com
                        </a>{' '}
                        with your name, contact email address and the number of
                        tickets you would like to reserve.
                      </>
                      ) : (
                      <>
                        No estamos seguros de por qué algunos invitados reciben este error.
                        Por favor,{' '}
                        <a
                        href="mailto:summerofquantumla@gmail.com?subject=Quantum for Kids @ Caltech"
                        className="text-la-coral hover:underline"
                        >
                        envía un correo a summerofquantumla@gmail.com
                        </a>{' '}
                        con tu nombre, dirección de correo electrónico de contacto y la cantidad de boletos que deseas reservar.
                      </>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div
                id="register"
                className="mt-8"
              >
                <a
                  href="https://www.eventbrite.com/e/quantum-for-kids-caltech-tickets-1419950673689?aff=oddtdtcreator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white font-medium shadow-sm rounded-full py-3 text-sm text-center hover:opacity-90 hover:scale-105 transition-all"
                >
                  {locale === 'en' ? 'Register on Eventbrite' : 'Regístrate en Eventbrite'}
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
