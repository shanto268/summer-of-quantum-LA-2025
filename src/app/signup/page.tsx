'use client'

import { Analytics } from '@vercel/analytics/react'
import Navbar from '../../../components/navbar'
import SectionHeading from '../../../components/section-heading'
import es from '@/messages/es.json';
import en from '@/messages/en.json';
import { useEffect, useState } from 'react'

export default function Signup() {

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
    { name: t.ourVolunteers, href: '/volunteers' },
    { name: t.partnerWithUs, href: '/sponsorship' },
  ]

  
  return (
    <>
      <Navbar navLinks={navLinks} />
      <main className="min-h-screen bg-gradient-to-br from-la-sky via-la-blush to-la-sand text-gray-900 pt-20">
        <section className="py-12 sm:py-20 px-4 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm -z-10"></div>
          <div className="container mx-auto">
            <SectionHeading
              title={locale==='es' ? 'Únete a nuestra lista de correo' : 'Join Our Mailing List'}
              subtitle= {locale === "es" ? 'Manténgase informado sobre los próximos eventos cuánticos, conferencias públicas, oportunidades de voluntariado y actividades exclusivas que ocurren en Los Ángeles' : 'Stay updated about upcoming quantum events, public lectures, volunteer opportunities, and exclusive activities happening across Los Angeles'}
            />

            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeMryxw8oZejUUHuGPyxrRjyyVxPPFZR-Xd8jk-qUbPuqUv0Q/viewform?embedded=true"
                  className="w-full h-[800px]"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Analytics />
    </>
  )
}
