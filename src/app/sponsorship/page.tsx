'use client'

import { Analytics } from '@vercel/analytics/react'
import { HeartHandshake } from 'lucide-react'
import Navbar from '../../../components/navbar'
import SectionHeading from '../../../components/section-heading'
import { useEffect, useState } from 'react'
import es from '@/messages/es.json'
import en from '@/messages/en.json'

export default function Sponsorship() {
  
  
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
      { name: t.joinMailingList, href: '/signup' },
      { name: t.ourVolunteers, href: '/volunteers' },
      { name: t.partnerWithUs, href: '/sponsorship' },
      {
        name: t.quantumTechCompanyEvents,
        href: '/quantum-tech-company-events',
      },
    ]
 

  return (
    <>
      <Navbar navLinks={navLinks} />
      <main className="min-h-screen bg-gradient-to-br from-la-sky via-la-blush to-la-sand text-gray-900 pt-20">
        <section className="py-12 sm:py-20 px-4 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm -z-10"></div>
          <div className="container mx-auto max-w-2xl">
            <SectionHeading
              title={locale === 'en' ? "Support Summer of Quantum in LA" : "Apoya el Verano de la Cuántica en LA"}
              subtitle={locale === 'en' ? "Thank you for considering a sponsorship!" : "¡Gracias por considerar un patrocinio!"}
            />
            <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40 mb-8">
              <div className="flex items-center gap-2 mb-4 text-la-coral">
                <HeartHandshake className="w-6 h-6" />
                <span className="font-bold text-lg">{locale === 'en' ? 'Why Sponsor?' : '¿Por qué patrocinar?'}</span>
              </div>
              <p className="text-gray-700 mb-4">
                <b>{t.summer_of_quantum_in_LA}</b> {locale=== 'en' ? 'is a 10-week, volunteer-led celebration of quantum science-bringing free public talks, lab tours, demos, and community programming to people across Los Angeles.' : 'es una celebración de 10 semanas dirigida por voluntarios de la ciencia cuántica que ofrece charlas públicas gratuitas, recorridos por laboratorios, demostraciones y programación comunitaria a personas de todo Los Ángeles.'} 
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>{locale === 'en' ? 'Science events that are open to everyone' : 'Eventos de ciencia que son abiertos a todos'}</li>
                <li>{locale === 'en' ? 'Programs for students, families, and the broader public' : 'Programas para estudiantes, familias y el público en general'}</li>
                <li>
                  {locale === 'en' ? 'A citywide effort to make quantum science fun, visible, and accessible' : 'Un esfuerzo en toda la ciudad para hacer que la ciencia cuántica sea divertida, visible y accesible'}
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                <b>{locale === 'en' ? 'Why we need your support:' : 'Por qué necesitamos tu apoyo:'}</b>
                <br />
                {locale === 'en' ? 'We keep all our programming free. But running a citywide science event takes resources. Your sponsorship will help cover:' : 'Mantenemos toda nuestra programación gratuita. Pero llevar a cabo un evento científico en toda la ciudad requiere recursos. Tu patrocinio ayudará a cubrir:'}
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>{locale === 'en' ? 'Venue rentals and permits' : 'Alquileres de locales y permisos'}</li>
                <li>{locale === 'en' ? 'Flyers, signage, and outreach materials' : 'Volantes, señalización y materiales de divulgación'}</li>
                <li>{locale === 'en' ? 'Refreshments and event-day supplies' : 'Refrigerios y suministros para el día del evento'}</li>
                <li>{locale === 'en' ? 'Speaker thank-you gifts' : 'Regalos de agradecimiento para los ponentes'}</li>
                <li>{locale === 'en' ? 'Kid-friendly workshop kits and arts & crafts supplies' : 'Kits de talleres para niños y suministros de arte y manualidades'}</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <b>{locale === 'en' ? 'What you get:' : 'Lo que obtienes:'}</b>
                <br />
                {locale === 'en' ? 'Partnering with us connects your brand to:' : 'Asociarte con nosotros conecta tu marca con:'}
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  {locale === 'en' ? '80+ student organizers from USC, UCLA, Caltech, and Chapman' : 'Más de 80 organizadores estudiantiles de USC, UCLA, Caltech y Chapman'}
                </li>
                <li>{locale === 'en' ? 'Thousands of public-facing event attendees' : 'Miles de asistentes al evento de cara al público'}</li>
                <li>{locale === 'en' ? 'A fast-growing, highly engaged SoCal quantum community' : 'Una comunidad cuántica de SoCal en rápido crecimiento y altamente comprometida'}</li>
              </ul>
              <p className="text-gray-700 mb-4">
                {locale === 'en'
                  ? 'Sponsors are featured on our website, T-shirts, event signage, and social media. Higher-tier sponsors may also be invited to speak, host tables, or co-create programming.'
                  : 'Los patrocinadores aparecen en nuestro sitio web, camisetas, señalización del evento y redes sociales. Los patrocinadores de nivel superior también pueden ser invitados a hablar, organizar mesas o co-crear programación.'}
              </p>
              <p className="text-gray-700 mb-6">
                {locale === 'en' ? 'Want to get involved?' : '¿Quieres involucrarte?'}
                <br />
                <b>
                  👉 {locale === 'en' ? 'Fill out the form and we\'ll be in touch within 2 business days.' : 'Completa el formulario y nos pondremos en contacto contigo en un plazo de 2 días hábiles.'}
                </b>
              </p>
              <div className="rounded-xl overflow-hidden border border-la-sunset/20 shadow">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSceSh_zPIvwNnydih-0ldDVr8XC7jJl5m-5zaaKZzJhBbr8PQ/viewform?usp=sharing&ouid=109764518158939977685"
                  width="100%"
                  height="900"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sponsorship Form"
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
