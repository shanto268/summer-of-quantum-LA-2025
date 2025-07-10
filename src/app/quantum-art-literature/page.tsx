'use client'

import { Analytics } from '@vercel/analytics/react'
import { Book, Brush, Calendar, MapPin, Send } from 'lucide-react'
import Navbar from '../../../components/navbar'
import SectionHeading from '../../../components/section-heading'
import es from '@/messages/es.json';
import en from '@/messages/en.json';
import {useState, useEffect } from 'react';


export default function QuantumArtLiterature() {
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
  ]

  return (
    <>
      <Navbar navLinks={navLinks} />
      <main className="min-h-screen bg-gradient-to-br from-la-sky via-la-blush to-la-sand text-gray-900 pt-20">
        <section className="py-12 sm:py-20 px-4 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm -z-10"></div>
          <div className="container mx-auto">
            <SectionHeading
              title={locale === 'en' ? 'Quantum Art & Literature' : 'Arte y Literatura Cuántica'}
              subtitle={
                locale === 'en'
                  ? 'Celebrating the intersection of quantum science and creative expression'
                  : 'Celebrando la intersección entre la ciencia cuántica y la expresión creativa'
              }
            />

            {/* Featured Poem */}
            <div className="mb-12 bg-gradient-to-br from-white to-la-sky p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0">
                  <Book className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-heading">
                  {locale === 'en' ? 'Featured Poem' : 'Poema Destacado'}
                </h3>
              </div>
              <div className="prose prose-lg max-w-none">
                <h4 className="text-lg font-bold text-gray-900 font-heading mb-4">
                  {locale === 'en'
                    ? 'Summer of Quantum in LA'
                    : 'Verano Cuántico en Los Ángeles'}
                </h4>
                {/* Poem left untouched as requested */}
                <p className="text-gray-600 italic mb-2">
                  ...
                </p>
                <p className="text-right text-gray-500">- Ajith Aditi</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Submit Your Work */}
              <div className="...">
                <div className="...">
                  <Send className="..." />
                  <h3 className="...">
                    {locale === 'en' ? 'Submit Your Work' : 'Envía Tu Obra'}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  {locale === 'en'
                    ? "We're looking for quantum-inspired art and literature! Whether it's a poem, short story, painting, or digital art, we'd love to showcase your creative interpretation of quantum science."
                    : '¡Buscamos arte y literatura inspirados en la cuántica! Ya sea un poema, cuento corto, pintura o arte digital, queremos mostrar tu interpretación creativa de la ciencia cuántica.'}
                </p>

                <a className="..." >
                  {locale === 'en' ? 'Submit Art' : 'Enviar Arte'}
                </a>
                <a className="..." >
                  {locale === 'en' ? 'Submit Literature' : 'Enviar Literatura'}
                </a>
              </div>

              {/* Book Donations */}
              <div className="...">
                <div className="...">
                  <Book className="..." />
                  <h3 className="...">
                    {locale === 'en' ? 'Donate Quantum Books' : 'Dona Libros de Cuántica'}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  {locale === 'en'
                    ? "Help us spread quantum knowledge through Little Free Libraries! We're collecting quantum and physics-related books to distribute across Los Angeles."
                    : '¡Ayúdanos a difundir el conocimiento cuántico a través de las Little Free Libraries! Estamos recolectando libros relacionados con la cuántica y la física para distribuir en Los Ángeles.'}
                </p>

                <div className="...">
                  <span>{locale === 'en' ? 'Send books to:' : 'Envía libros a:'}</span>
                </div>
                {/* Address block unchanged */}
                <div className="pl-7 text-gray-600">
                  ...
                </div>

                <a className="...">
                  {locale === 'en'
                    ? 'Learn About Little Free Libraries'
                    : 'Conoce las Little Free Libraries'}
                </a>
              </div>

              {/* Utility Box Art */}
              <div className="...">
                <div className="...">
                  <Brush className="..." />
                  <h3 className="...">
                    {locale === 'en'
                      ? 'Utility Box Quantum Art'
                      : 'Arte Cuántico en Cajas de Servicios'}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  {locale === 'en'
                    ? "We're working on beautifying utility boxes around LA with quantum-inspired art! Submit your concept art and join us in making quantum science visible in our community."
                    : '¡Estamos embelleciendo cajas de servicios alrededor de LA con arte cuántico! Envía tu arte conceptual y únete a nosotros para hacer visible la ciencia cuántica en nuestra comunidad.'}
                </p>

                <a className="...">
                  {locale === 'en' ? 'Submit Concept Art' : 'Enviar Arte Conceptual'}
                </a>
                <a className="...">
                  {locale === 'en'
                    ? 'Learn About the Program'
                    : 'Conoce el Programa'}
                </a>
              </div>

              {/* Coming Soon */}
              <div className="...">
                <div className="...">
                  <Calendar className="..." />
                  <h3 className="...">
                    {locale === 'en' ? 'More Coming Soon!' : '¡Más Muy Pronto!'}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  {locale === 'en'
                    ? "We're planning more art and literature initiatives! Join our mailing list to stay updated on new opportunities to contribute and participate."
                    : '¡Estamos planeando más iniciativas de arte y literatura! Únete a nuestra lista de correo para mantenerte informado sobre nuevas oportunidades para contribuir y participar.'}
                </p>

                <a className="...">
                  {locale === 'en' ? 'Join Our Mailing List' : 'Únete a Nuestra Lista de Correo'}
                </a>
                <a className="...">
                  {locale === 'en' ? 'Return to Homepage' : 'Volver a la Página Principal'}
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
