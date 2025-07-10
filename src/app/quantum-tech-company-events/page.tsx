'use client'

import { Analytics } from '@vercel/analytics/react'
import { Briefcase, Calendar, Clock, MapPin, Mic, Users } from 'lucide-react'
import { useState } from 'react'
import ClickableButton from '../../../components/clickable-button'
import Navbar from '../../../components/navbar'
import SectionHeading from '../../../components/section-heading'
import { useEffect } from 'react'
import es from '@/messages/es.json'
import en from '@/messages/en.json'

interface Event {
  title: string
  date: string
  time: string
  location: string
  description?: string
  isAvailable: boolean
  showSponsorship?: boolean
  registrationUrl?: string
  registrationStatus?: string
  details?: {
    industryPanel?: string
    expoBooths?: string[]
    resumeDrop?: string[]
  }
}

export default function QuantumTechCompanyEvents() {


  
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
 

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)



  const events: Event[] = [
    {
      title: locale === 'en' ? 'Quantum Tech Company Panel' : 'Panel de Empresas de Tecnología Cuántica',      
      date: 'July 15th',
      time: '11 AM - 2 PM',
      location: 'USC Michelson Center for Convergent Bioscience (MCB)',
      isAvailable: true,
      showSponsorship: false,
      registrationUrl:
        'https://docs.google.com/forms/d/e/1FAIpQLSdasRFkjSw2fIpvWughEq4ZyzA9mcI2T65EKcDw0ELLjyA_3A/viewform?usp=sharing&ouid=109764518158939977685',
      
        details: {
  industryPanel:
    locale === 'en'
      ? 'Hear from 5-6 leaders in quantum hardware, software, and startups about career paths, industry trends, and the future of quantum technology.'
      : 'Escucha a 5-6 líderes en hardware cuántico, software y startups sobre trayectorias profesionales, tendencias de la industria y el futuro de la tecnología cuántica.',

  expoBooths: [
    locale === 'en'
      ? 'Meet company reps at their tables, see demo reels, hardware mockups, and learn about internships and jobs.'
      : 'Conoce a representantes de empresas en sus mesas, mira demostraciones, prototipos de hardware y obtén información sobre pasantías y empleos.',
    locale === 'en'
      ? 'Ask questions, pick up info, and make connections with students, researchers, engineers and scientists in the field.'
      : 'Haz preguntas, recoge información y conecta con estudiantes, investigadores, ingenieros y científicos del campo.',
  ],

  resumeDrop: [
    locale === 'en'
      ? 'Connect with industry professionals and explore career opportunities in quantum technology.'
      : 'Conéctate con profesionales de la industria y explora oportunidades laborales en tecnología cuántica.',
  ],

      },
      registrationStatus: locale === 'en' ? 'Register Now' : 'Regístrate ahora'
 ,
    },
    {
      title: locale === 'en' ? 'D-Wave Workshop' : 'Taller de D-Wave',
      date: 'July 16th',
      time: '11 AM - 1 PM',
      location: 'USC Michelson Center for Convergent Bioscience (MCB)',
      description:
        locale === 'en'
          ? 'Join us for an in-depth workshop exploring practical business applications of quantum computing, with a special focus on optimization problems.'
          : 'Únete a nosotros para un taller en profundidad que explora aplicaciones prácticas de la computación cuántica en los negocios, con un enfoque especial en problemas de optimización.',
      isAvailable: true,
      showSponsorship: false,
      registrationUrl:
        'https://docs.google.com/forms/d/e/1FAIpQLSdsMVR-CZOWFsraVz4MddZERr18X-LN4lU1C9QxDZh5R8ZECA/viewform?usp=sharing&ouid=109764518158939977685',
      registrationStatus: 'RSVP',
    },
   {
  title: locale === 'en' 
    ? 'qBraid Workshop' 
    : 'Taller de qBraid',

  date: 'July 16th',
  time: '4 PM PT',
  location: 'Online / Zoom',

  description: locale === 'en'
    ? 'Curious about quantum computing? Want to submit a calculation to a real quantum device? Come join us to learn about quantum computing, the state of the quantum industry, and see how you can use qBraid to get started in this field. All experience levels are welcome!'
    : '¿Tienes curiosidad por la computación cuántica? ¿Quieres enviar un cálculo a un dispositivo cuántico real? Únete a nosotros para aprender sobre computación cuántica, el estado actual de la industria cuántica y cómo puedes usar qBraid para comenzar en este campo. ¡Todos los niveles de experiencia son bienvenidos!',

  isAvailable: true,
  showSponsorship: false,
  registrationUrl: 'https://lu.ma/icz8poym',
  registrationStatus: 'Register',
},
{
  title: locale === 'en'
    ? 'D-Wave Facilities Tour'
    : 'Recorrido por las instalaciones de D-Wave',

  date: 'July 17th',
  time: '1 - 3pm PDT',
  location: '4676 Admiralty Way #1001, Marina del Rey, CA 90292',

  description: locale === 'en'
    ? "Curious about cutting-edge quantum technology? Join us for an exclusive tour of D-Wave's facilities and get a behind-the-scenes look at one of the world's leading quantum computing companies. No technical background is required. Just bring your curiosity."
    : '¿Te interesa la tecnología cuántica de vanguardia? Únete a nosotros para un recorrido exclusivo por las instalaciones de D-Wave y obtén una mirada detrás de escena a una de las principales empresas de computación cuántica del mundo. No se requiere experiencia técnica. Solo trae tu curiosidad.',

  isAvailable: true,
  showSponsorship: false,
  registrationUrl: 'https://www.eventbrite.com/e/d-wave-facilities-tour-tickets-1431929522749?aff=oddtdtcreator',
  registrationStatus: 'Get Tickets',
}

  ]

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-la-sky via-la-blush to-la-sand text-gray-900 pt-20">
        <div className="container mx-auto max-w-3xl p-8">
          <div className="bg-white p-8 rounded-2xl border border-red-200 shadow-md">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Error Loading Events
            </h2>
            <p className="text-gray-700">{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navbar navLinks={navLinks} />
      <main className="min-h-screen bg-gradient-to-br from-la-sky via-la-blush to-la-sand text-gray-900 pt-20">
        <section className="py-12 sm:py-20 px-4 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm -z-10"></div>
          <div className="container mx-auto max-w-3xl">
            <SectionHeading
              title={locale === 'en' ? "Quantum Tech Company Events" : "Eventos de Empresas de Tecnología Cuántica"}
              subtitle={
              locale === 'en'
                ? "Panels, showcases, and networking with the leading quantum companies in LA."
                : "Paneles, exhibiciones y networking con las principales empresas cuánticas en Los Ángeles."
              }
                          />
            {isLoading ? (
              <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40">
                <div className="animate-pulse space-y-4">
                  <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">
                      {event.title}
                    </h2>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-la-coral">
                        <Calendar className="w-5 h-5" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-la-coral">
                        <Clock className="w-5 h-5" />
                        <span className="font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-la-coral">
                        <MapPin className="w-5 h-5" />
                        <span className="font-medium">{event.location}</span>
                      </div>
                    </div>

                    {event.registrationUrl && event.registrationStatus ? (
                      <div className="mb-6">
                        <ClickableButton
                          href={event.registrationUrl}
                          external={event.registrationUrl.startsWith('http')}
                          className="block w-full bg-gradient-to-r from-la-dusk via-la-sunset to-la-coral text-white font-medium shadow-sm rounded-full py-3 text-sm text-center hover:opacity-90 hover:scale-105 transition-all"
                        >
                          {event.registrationStatus}
                        </ClickableButton>
                      </div>
                    ) : event.registrationStatus ? (
                      <div className="mb-6">
                        <div className="block w-full bg-gray-200 text-gray-500 font-medium shadow-sm rounded-full py-3 text-sm text-center cursor-not-allowed">
                          {event.registrationStatus}
                        </div>
                      </div>
                    ) : null}
                    {event.showSponsorship && (
                      <div className="mb-6">
                        <a
                          href="/sponsorship"
                          className="block w-full bg-gradient-to-r from-la-dusk via-la-sunset to-la-coral text-white font-medium shadow-sm rounded-full py-3 text-sm text-center hover:opacity-90 hover:scale-105 transition-all"
                        >
                          {locale === 'en'
                          ? 'Sponsorship & Partnership Form'
                          : 'Formulario de patrocinio y colaboración'}
                        </a>
                      </div>
                    )}

                    {event.description && (
                      <p className="text-gray-700 mb-6">{event.description}</p>
                    )}

                    {event.details?.industryPanel && (
                      <>
                        <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 mt-8 flex items-center gap-2">
                          <Mic className="w-5 h-5 text-la-coral" /> 
                          {locale === 'en' ? 'Industry Panel Discussion' : 'Panel de la Industria'}
                        </h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                          <li>{event.details.industryPanel}</li>
                            <li>
                            {locale === 'en'
                              ? 'Audience Q&A at the end of the panel.'
                              : 'Preguntas y respuestas del público al final del panel.'}
                            </li>
                        </ul>
                      </>
                    )}

                    {event.details?.expoBooths && (
                      <>
                        <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 mt-8 flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-la-coral" />{' '}
                          {locale === 'en'
                          ? 'Mini-Expo Booths & Showcases'
                          : 'Mini-Expo y Demostraciones'}
                        </h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                          {event.details.expoBooths.map((booth, i) => (
                            <li key={i}>{booth}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    {event.details?.resumeDrop && (
                      <>
                        <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 mt-8 flex items-center gap-2">
                          <Users className="w-5 h-5 text-la-coral" /> 
                          {locale === 'en' ? 'Career Connections & Networking' : 'Conexiones profesionales y networking'}
                        </h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                          {event.details.resumeDrop.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Analytics />
    </>
  )
}
