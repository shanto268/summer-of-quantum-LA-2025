'use client'

import { Analytics } from '@vercel/analytics/react'
import { Calendar, Clock, MapPin } from 'lucide-react'
import Navbar from '../../../components/navbar'
import SectionHeading from '../../../components/section-heading'

import es from '@/messages/es.json';
import en from '@/messages/en.json';
import {useState, useEffect } from 'react';

export default function QuantumForSeniors() {
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
          <div className="container mx-auto max-w-2xl">
            <SectionHeading
              title={
                locale === 'en'
                  ? 'Quantum for Seniors'
                  : 'Cuántica para Personas Mayores'
              }
              subtitle={
                locale === 'en'
                  ? 'A special event for lifelong learners at Griffith Park Adult Community Center'
                  : 'Un evento especial para aprendices de por vida en el Centro Comunitario de Adultos de Griffith Park'
              }
            />
            <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-5 h-5 text-la-coral" />
                <span className="font-medium text-gray-900">
                  Griffith Park Adult Community Center
                </span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="w-5 h-5 text-la-coral" />
                <span className="font-medium text-gray-900">TBD</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-5 h-5 text-la-coral" />
                <span className="font-medium text-gray-900">TBD</span>
              </div>
              <p className="text-gray-700 mb-4">
                {locale === 'en'
                  ? 'Join us for an engaging and accessible introduction to quantum science, tailored for seniors and lifelong learners. No technical background required—just curiosity!'
                  : 'Acompáñanos a una introducción atractiva y accesible a la ciencia cuántica, diseñada para personas mayores y aprendices de por vida. ¡No se requiere experiencia técnica—solo curiosidad!'}
              </p>
              <div className="flex flex-col gap-2 mb-6">
                <a
                  href="https://www.laparks.org/scc/griffith-adult-community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-la-coral hover:text-la-sunset underline font-medium"
                >
                  {locale === 'en'
                    ? 'Griffith Park Adult Community Center'
                    : 'Centro Comunitario de Adultos de Griffith Park'}
                </a>
                <a
                  href="https://aging.lacity.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-la-coral hover:text-la-sunset underline font-medium"
                >
                  {locale === 'en'
                    ? 'City of Los Angeles Department of Aging'
                    : 'Departamento de Envejecimiento de la Ciudad de Los Ángeles'}
                </a>
              </div>
              <div className="rounded-xl overflow-hidden border border-la-sunset/20 shadow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.017282019994!2d-118.2939836847826!3d34.1258571805911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0b2e2e2e2e3%3A0x7e2e2e2e2e2e2e2e!2sGriffith%20Park%20Adult%20Community%20Center!5e0!3m2!1sen!2sus!4v1718040000000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Griffith Park Adult Community Center Map"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Analytics />
    </>
  )
}
