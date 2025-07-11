'use client'

import { Analytics } from '@vercel/analytics/react'
import { Briefcase } from 'lucide-react'
import Navbar from '../../../components/navbar'
import SectionHeading from '../../../components/section-heading'
import { useEffect, useState } from 'react'
import es from '@/messages/es.json';
import en from '@/messages/en.json';


export default function PartnerWithUs() {


  
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
              title={locale === 'en' ? "Partner With Us: Quantum Tech Company Events" : "Asóciate con Nosotros: Eventos de Empresas de Tecnología Cuántica"}
              subtitle={locale === 'en'
                ? "For companies and organizations interested in participating, sponsoring, or showcasing at our events."
                : "Para empresas y organizaciones interesadas en participar, patrocinar o exhibirse en nuestros eventos."
              }
            />
            <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40 mb-8">
              <div className="flex items-center gap-2 mb-4 text-la-coral">
                <Briefcase className="w-6 h-6" />
                <span className="font-bold text-lg">
                    {locale === 'en'
                    ? 'For Companies and Organizations'
                    : 'Para Empresas y Organizaciones'}
                </span>
              </div>
             

             {locale === 'en' ? (
  <>
    <p className="text-gray-700 mb-4">
      Join the Quantum Tech Company Events as a partner, sponsor, or exhibitor and connect directly with top students, early-career scientists, and the LA quantum community. Benefits for companies include:
    </p>
    <ul className="list-disc pl-6 mt-2 mb-4 text-gray-700">
      <li>High visibility to hundreds of engaged participants</li>
      <li>Direct networking with students, postdocs, and faculty</li>
      <li>Access to submitted resumes for hiring and internships</li>
      <li>Showcase your technology and company culture at your own booth</li>
      <li>Optional guided tours of USC, Caltech, or UCLA quantum labs for your team</li>
    </ul>
    <p className="text-gray-700 mb-6">
      Please use the form below to tell us about your organization and how you'd like to participate.
    </p>
  </>
) : (
  <>
    <p className="text-gray-700 mb-4">
      Únete a los Eventos de Empresas de Tecnología Cuántica como socio, patrocinador o expositor y conecta directamente con los mejores estudiantes, científicos en las primeras etapas de su carrera y la comunidad cuántica de Los Ángeles. Los beneficios para las empresas incluyen:
    </p>
    <ul className="list-disc pl-6 mt-2 mb-4 text-gray-700">
      <li>Alta visibilidad ante cientos de participantes comprometidos</li>
      <li>Red de contactos directa con estudiantes, postdoctorados y profesores</li>
      <li>Acceso a currículums enviados para contrataciones y pasantías</li>
      <li>Presenta tu tecnología y cultura empresarial en tu propio stand</li>
      <li>Visitas guiadas opcionales a los laboratorios cuánticos de USC, Caltech o UCLA para tu equipo</li>
    </ul>
    <p className="text-gray-700 mb-6">
      Por favor, utiliza el siguiente formulario para contarnos sobre tu organización y cómo te gustaría participar.
    </p>
  </>
)}

              <div className="mb-6">
                <a
                  href="/sponsorship"
                  className="block w-full bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white font-medium shadow-sm rounded-full py-3 text-sm text-center hover:opacity-90 hover:scale-105 transition-all"
                >
                  {locale === 'en'
                    ? 'Sponsorship & Partnership Form'
                    : 'Formulario de Patrocinio y Colaboración'}
                </a>
              </div>
              <p className="text-gray-600 text-sm">
                (
                {locale === 'en'
                  ? 'For individual volunteers, please see our '
                  : 'Para voluntarios individuales, por favor visita nuestra '}
                <a
                  href="/volunteers"
                  className="text-la-coral underline"
                >
                  {locale === 'en' ? 'volunteer page' : 'página de voluntarios'}
                </a>
                .)
              </p>
            </div>
          </div>
        </section>
      </main>
      <Analytics />
    </>
  )
}
