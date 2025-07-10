'use client'

import ClickableButton from '@/components/clickable-button'
import Navbar from '@/components/navbar'
import SectionHeading from '@/components/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import es from '@/messages/es.json';
import en from '@/messages/en.json';

import { motion } from 'framer-motion'
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
} from 'lucide-react'
import { useState, useEffect } from 'react'

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  category: string
  link: string
  description: string
  image: string
  eventbriteLink?: string
}

export default function CalendarPage() {

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
  

const allEvents: Event[] = [
  // Lab Tours (only scheduled ones have eventbriteLink)
  {
    id: 'lab-usc',
    title: locale === 'es' ? 'Recorrido por el Laboratorio Cuántico en USC' : 'Quantum Lab Tour at USC',
    date: 'June 20, 2025',
    time: '12:45 PM - 3:15 PM PDT',
    location: 'University of Southern California',
    category: locale === 'es' ? 'Educación' : 'Education',
    link: '/quantum-lab-tours',
    description: locale === 'es' ? 'Recorridos guiados por los laboratorios de ciencia e ingeniería cuántica de USC.': "Join us for an afternoon of guided lab tours across USC's quantum science and engineering labs.",
    image: '/images/labs.png?height=300&width=600',
    eventbriteLink: 'https://www.eventbrite.com/e/1400842671139?aff=oddtdtcreator',
  },

  {
    id: 'lab-caltech',
    title: locale === 'es' ? 'Recorrido por el Laboratorio Cuántico en Caltech' : 'Quantum Lab Tour at Caltech',
    date: 'June 17, 2025',
    time: '12:45 PM - 3:15 PM PDT',
    location: 'California Institute of Technology',
     category: locale === 'es' ? 'Educación' : 'Education',
    link: '/quantum-lab-tours',
    description: locale === 'es'
      ? 'Recorridos guiados por los laboratorios de ciencia e ingeniería cuántica de Caltech.'
      : "Join us for an afternoon of guided lab tours across Caltech's quantum science and engineering labs.",
    image: '/images/labs.png?height=300&width=600',
    eventbriteLink:
      'https://www.eventbrite.com/e/1400821056489?aff=oddtdtcreator',
  },
  {
    id: 'lab-ucla',
    title: locale === 'es' ? 'Recorrido por el Laboratorio Cuántico en UCLA' : 'Quantum Lab Tour at UCLA',
    date: 'June 24, 2025',
    time: '12:45 PM - 3:15 PM PDT',
    location: 'University of California, Los Angeles',
      category: locale === 'es' ? 'Educación' : 'Education',
    link: '/quantum-lab-tours',
    description: locale === 'es'
      ? 'Recorridos guiados por los laboratorios de ciencia e ingeniería cuántica de UCLA.'
      : "Join us for an afternoon of guided lab tours across UCLA's quantum science and engineering labs.",
    image: '/images/labs.png?height=300&width=600',
    eventbriteLink:
      'https://www.eventbrite.com/e/1400826542899?aff=oddtdtcreator',
  },
  // Unscheduled Lab Tours (use main page date range)
  {
    id: 'lab-unscheduled',
    title: locale === 'es' ? 'Recorridos por Laboratorios Cuánticos' : 'Quantum Lab Tours',
    date: 'June 17-26, 2025',
    time: 'TBD',
    location: 'USC, Caltech, and UCLA',
    category: locale === 'es' ? 'Educación' : 'Education',
    link: '/quantum-lab-tours',
    description:
      locale === 'es'
        ? 'Recorridos exclusivos tras bambalinas por laboratorios universitarios de vanguardia, que ofrecen una visión de primera mano de la investigación cuántica en acción y conversaciones con científicos en activo.'
        : 'Exclusive behind-the-scenes tours of cutting-edge university labs, offering a firsthand look at quantum research in action and conversations with working scientists.',
    image: '/images/labs.png?height=300&width=600',
  },
  // Public Talks (only scheduled ones have eventbriteLink)
  {
    id: 'talk-usc',
    title: locale === 'es' ? 'Quantum para Todos: Una Charla Pública en USC' : 'Quantum for Everyone: A Public Talk at USC',
    date: 'June 11, 2025',
    time: '6:30 PM - 8:15 PM',
    location: 'Science Lecture Hall (SLH), University of Southern California',
      category: locale === 'es' ? 'Educación' : 'Education',
    link: '/public-talks',
    description:
      locale === 'es'
        ? '¡Únase a nosotros para una charla pública divertida y atractiva sobre física cuántica en USC!'
        : 'Join us for a fun and engaging public talk on quantum physics at USC!',
    image: '/images/public-talk.png?height=300&width=600',
    eventbriteLink:
      'https://www.eventbrite.com/e/quantum-for-everyone-a-public-talk-at-usc-tickets-1391569575059?aff=oddtdtcreator',
  },
  {
    id: 'talk-caltech',
    title: locale === 'es' ? 'Quantum para Todos: Una Charla Pública en Caltech' : 'Quantum for Everyone: A Public Talk at Caltech',
    date: 'June 12, 2025',
    time: '7:30 PM - 9:15 PM',
    location: 'Feynman Lecture Hall, Caltech',
      category: locale === 'es' ? 'Educación' : 'Education',
    link: '/public-talks',
    description:
      locale === 'es'
        ? 'Únase a nosotros en Caltech para una charla pública divertida y atractiva sobre mecánica cuántica.'
        : 'Join us at Caltech for a fun and engaging public talk about quantum mechanics!',
    image: '/images/public-talk.png?height=300&width=600',
    eventbriteLink:
      'https://www.eventbrite.com/e/quantum-for-everyone-a-public-talk-at-caltech-tickets-1393344684459?aff=oddtdtcreator',
  },
  {
    id: 'talk-ucla',
    title: locale === 'es' ? 'Quantum para Todos: Una Charla Pública en UCLA' : 'Quantum for Everyone: A Public Talk at UCLA',
    date: 'June 16, 2025',
    time: '6:30 PM - 8:15 PM',
    location: 'Engineering IV, Westwood Plaza Tesla Room, UCLA',
      category: locale === 'es' ? 'Educación' : 'Education',
    link: '/public-talks',
    description:
      locale === 'es'
        ? '¿Tienes curiosidad por la física cuántica? ¡Únase a nosotros para Quantum para Todos en UCLA!'
        : 'Curious about quantum physics? Join us for Quantum for Everyone at UCLA!',
    image: '/images/public-talk.png?height=300&width=600',
    eventbriteLink:
      'https://www.eventbrite.com/e/quantum-for-everyone-a-public-talk-at-ucla-tickets-1395413101149',
  },
  {
    id: 'talk-chapman',
    title: locale === 'es' ? 'Quantum para Todos: Una Charla Pública en Chapman University' : 'Quantum for Everyone: A Public Talk at Chapman University',
    date: 'June 18, 2025',
    time: '4:30 PM - 6:30 PM',
    location: '541 North Lemon Street Conference Room A, Chapman University',
      category: locale === 'es' ? 'Educación' : 'Education',
    link: '/public-talks',
    description:
      locale === 'es'
        ? "Explore la interferencia cuántica en una charla pública atractiva y accesible del profesor Matthew Leifer de Chapman University."
        : "Explore quantum interference in an engaging and accessible public talk by Chapman University's Professor Matthew Leifer.",
    image: '/images/public-talk.png?height=300&width=600',
    eventbriteLink:
      'https://www.eventbrite.com/e/quantum-for-everyone-a-public-talk-at-chapman-university-tickets-1395446009579?aff=oddtdtcreator',
  },
  // Unscheduled Public Talks (use main page date range)
  {
    id: 'talks-unscheduled',
    title: locale === 'es' ? 'Charlas Públicas' : 'Public Talks',
    date: 'June 11-18, 2025',
    time: 'Details on each university page',
    location: 'USC, Caltech, UCLA, and Chapman',
      category: locale === 'es' ? 'Educación' : 'Education',
    link: '/public-talks',
    description:
      locale === 'en'
        ? 'Public-friendly talks by quantum scientists at local universities, covering the motivations, history, myths, and real-world applications of quantum mechanics - no technical background required.'
        : 'Charlas públicas dirigidas por científicos cuánticos en universidades locales, que cubren las motivaciones, la historia, los mitos y las aplicaciones del mundo real de la mecánica cuántica: no se requiere formación técnica.',
    image: '/images/public-talk.png?height=300&width=600',
  },
  // Quantum at the Bar (always included)
  {
    id: 'bar-chapman-crafted',
    title: locale === 'es' ? 'Noche de Cerveza Cuántica en Chapman Crafted' : 'Quantum Beer Night at Chapman Crafted',
    date: 'June 18, 2025',
    time: '6:00 PM - 8:00 PM',
    location: '541 N Lemon St, Orange, CA 92867',
    category: 'Social',
    link: '/quantum-at-the-bar',
    description:
      locale === 'en'
        ? 'Join quantum physicists from Chapman University for an evening of quantum discussions over craft beer!'
        : '¡Únase a los físicos cuánticos de Chapman University para una noche de discusiones cuánticas con cerveza artesanal!',
    image: '/images/h-bar.png?height=300&width=600',
  },
  // Quantum Games (scheduled)
  {
    id: 'games-board-night',
    title: locale === 'es' ? 'Noche de Juegos de Mesa Cuánticos' : 'Quantum Board Games Night',
    date: 'June 26, 2025',
    time: '7:30 PM - 9:30 PM',
    location: 'Odyssey Games (1795 E Colorado Blvd, Pasadena, CA 91106)',
    category: 'Entertainment',
    link: '/quantum-games',
    description:
       locale === 'en' ? 'Join us for an evening of quantum-themed board games at Odyssey Games in Pasadena. Learn about quantum concepts while having fun with friends and fellow enthusiasts.':
       'Únase a nosotros para una noche de juegos de mesa con temática cuántica en Odyssey Games en Pasadena. Aprenda sobre conceptos cuánticos mientras se divierte con amigos y otros entusiastas.',
    image: '/images/games.png?height=300&width=600',
    eventbriteLink:
      'https://www.eventbrite.com/e/quantum-board-games-night-tickets-1409558329909?aff=oddtdtcreator',
  },
  // Quantum for Kids (unscheduled)
  {
    id: 'kids-unscheduled',
    title: locale === 'es' ? 'Quantum para Niños' : 'Quantum for Kids',
    date: 'July 12, 2025',
    time: '10:00 AM – 2:00 PM',
    location: 'Caltech Campus',
      category: locale === 'es' ? 'Educación' : 'Education',
    link: '/quantum-for-kids',
    eventbriteLink:
      'https://www.eventbrite.com/e/quantum-for-kids-caltech-tickets-1419950673689?aff=oddtdtcreator',
    description:
      locale === 'en'
        ? 'Hands-on demos and interactive activities designed to make the strange world of quantum mechanics fun and accessible for young learners.'
        : 'Demostraciones prácticas y actividades interactivas diseñadas para hacer que el extraño mundo de la mecánica cuántica sea divertido y accesible para los jóvenes aprendices.',
    image: '/images/kids.png?height=300&width=600',
  },
  // Quantum Tech Company Events (unscheduled)
  {
    id: 'tech-unscheduled',
    title: locale === 'es' ? 'Eventos de Empresas de Tecnología Cuántica' : 'Quantum Tech Company Events',
    date: 'July 15, 2025',
    time: '11 AM - 2 PM',
    location: 'USC (with Caltech/UCLA/Chapman partners)',
      category: locale === 'es' ? 'Educación' : 'Education',
    link: '/quantum-tech-company-events',
    description:
      locale === 'en'
        ? 'Panels and showcases featuring local quantum technology companies, offering behind-the-scenes insights into the future of quantum innovation.'
        : 'Paneles y exhibiciones con empresas locales de tecnología cuántica, ofreciendo una visión entre bastidores del futuro de la innovación cuántica.',
    image: '/images/companies.png?height=300&width=600',
  },
  {
    id: 'd-wave-workshop',
    title: locale === 'es' ? 'Taller de D-Wave' : 'D-Wave Workshop',
    date: 'June 16, 2025',
    time: 'TBD',
    location: 'USC Campus',
      category: locale === 'es' ? 'Educación' : 'Education',
    link: '/quantum-tech-company-events',
    description:
      locale === 'en'
        ? 'Join us for an in-depth workshop exploring practical business applications of quantum computing, with a special focus on optimization problems.'
        : 'Únase a nosotros para un taller en profundidad que explora aplicaciones comerciales prácticas de la computación cuántica, con un enfoque especial en problemas de optimización.',
    image: '/images/companies.png?height=300&width=600',
  },
  {
    id: 'd-wave-workshop-july',
    title: locale === 'es' ? 'Taller de D-Wave' : 'D-Wave Workshop',
    date: 'July 16, 2025',
    time: 'TBD',
    location: 'USC Campus',
      category: locale === 'es' ? 'Educación' : 'Education',
    link: '/quantum-tech-company-events',
    description:
      locale === 'en'
        ? 'Join us for an in-depth workshop exploring practical business applications of quantum computing, with a special focus on optimization problems.'
        : 'Únase a nosotros para un taller en profundidad que explora aplicaciones comerciales prácticas de la computación cuántica, con un enfoque especial en problemas de optimización.',
    image: '/images/companies.png?height=300&width=600',
  },
  {
    id: 'd-wave-tour',
    title: locale === 'es' ? 'Tour de Instalaciones de D-Wave' : 'D-Wave Facilities Tour',
    date: 'July 17, 2025',
    time: 'TBD',
    location: 'USC Information Sciences Institute',
      category: locale === 'es' ? 'Educación' : 'Education',
    link: '/quantum-tech-company-events',
    description:
       locale === 'en' ?'Tour of the D-Wave facilities at USC Information Sciences Institute. Details to be announced.'
       : 'Tour de las instalaciones de D-Wave en el Instituto de Ciencias de la Información de USC. Detalles por anunciar.',
    image: '/images/companies.png?height=300&width=600',
  },
  // Quantum for Seniors (unscheduled)
  {
    id: 'seniors-unscheduled',
    title: locale === 'es' ? 'Quantum para Personas Mayores' : 'Quantum for Seniors',
    date: 'TBD',
    time: 'To be announced',
    location: 'TBD',
      category: locale === 'es' ? 'Educación' : 'Education',
    link: '/quantum-for-seniors',
    description:
      locale === 'en' ? 'Bringing quantum science to retirement communities with engaging, accessible presentations and discussions tailored for lifelong learners.'
      : 'Llevando la ciencia cuántica a las comunidades de jubilados con presentaciones y discusiones atractivas y accesibles adaptadas para aprendices de toda la vida.',
    image: '/images/seniors.png?height=300&width=600',
  },
]





// Helper to parse date ranges like 'June 24-29, 2025' or 'July 8-13, 2025'
function parseDateRange(dateStr: string): { start: Date; end: Date } | null {
  // e.g. 'June 24-29, 2025' or 'July 8-13, 2025'
  const rangeMatch = dateStr.match(/([A-Za-z]+) (\d{1,2})-(\d{1,2}), (\d{4})/)
  if (rangeMatch) {
    const [_, month, startDay, endDay, year] = rangeMatch
    const monthIdx = new Date(`${month} 1, 2000`).getMonth()
    return {
      start: new Date(Number(year), monthIdx, Number(startDay)),
      end: new Date(Number(year), monthIdx, Number(endDay)),
    }
  }
  // e.g. 'TBD' or 'June 17, 2025'
  const singleMatch = dateStr.match(/([A-Za-z]+) (\d{1,2}), (\d{4})/)
  if (singleMatch) {
    const [_, month, day, year] = singleMatch
    const monthIdx = new Date(`${month} 1, 2000`).getMonth()
    return {
      start: new Date(Number(year), monthIdx, Number(day)),
      end: new Date(Number(year), monthIdx, Number(day)),
    }
  }
  return null
}

// Helper to check if an event is in the past
function isEventInPast(event: Event): boolean {
  const today = new Date()
  const eventDate = new Date(event.date)
  return eventDate < today
}

const categories = [locale === 'es' ? 'Todos' : 'All', locale === 'es' ? 'Educación' : 'Education', locale === 'es' ? 'Social' : 'Social', locale === 'es' ? 'Entretenimiento' : 'Entertainment']


  const navLinks = [
  { name: locale === 'es' ? 'Inicio' : 'Home', href: '/' },
  { name: locale === 'es' ? 'Calendario' : 'Calendar', href: '/calendar' },
  { name: locale === 'es' ? 'Únete a nuestra lista de correo' : 'Join Our Mailing List', href: '/signup' },
  { name: locale === 'es' ? 'Nuestros Voluntarios' : 'Our Volunteers', href: '/volunteers' },
  { name: locale === 'es' ? 'Asóciate con Nosotros' : 'Partner with Us', href: '/sponsorship' },
  { name: locale === 'es' ? 'Arte y Literatura Cuántica' : 'Quantum Art & Literature', href: '/quantum-art-literature' },
]

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [view, setView] = useState<'list' | 'calendar'>('list')


  // Helper to get month and year from event date string
  function getEventMonthYear(event: Event): { month: number; year: number } {
    const match = event.date.match(/([A-Za-z]+) (\d{1,2})/)
    const yearMatch = event.date.match(/(\d{4})/)
    if (!match || !yearMatch) return { month: -1, year: -1 }
    const monthName = match[1]
    const year = parseInt(yearMatch[1], 10)
    const month = new Date(`${monthName} 1, 2000`).getMonth() // 0-based
    return { month, year }
  }

  // Helper to get the start day of the event (for sorting and calendar grid)
  function getEventStartDay(event: Event): number {
    // Handles 'June 17-26, 2025' or 'June 11, 2025'
    const match = event.date.match(/\w+ (\d{1,2})/)
    if (!match) return 1
    return parseInt(match[1], 10)
  }

  // Only include scheduled events and 'bar-' events in both views
  const scheduledAndBarEvents = allEvents.filter(
    (event) =>
      event.eventbriteLink ||
      event.id.startsWith('bar-') ||
      event.id === 'games-board-night' ||
      (event.date.includes('July') && event.date.includes('2025')),
  )

  // Filter and sort events for the current month
  const filteredEvents = scheduledAndBarEvents
    .filter((event) => {
      const { month, year } = getEventMonthYear(event)
      return (
        (selectedCategory === 'All' || selectedCategory === 'Todos' || event.category === selectedCategory) &&
        month === currentMonth.getMonth() &&
        year === currentMonth.getFullYear()
      )
    })
    .sort((a, b) => getEventStartDay(a) - getEventStartDay(b))

  // Generate days for the current month
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0,
  ).getDate()
  const firstDayOfWeek = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1,
  ).getDay()
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  // For the calendar grid, show only scheduled and bar events, spanning multi-day events
  const eventsByDay: {
    [day: number]: { event: Event; scheduled: boolean }[]
  } = {}
  scheduledAndBarEvents.forEach((event) => {
    if ((selectedCategory !== 'All' && selectedCategory !== 'Todos') && event.category !== selectedCategory) {
      return
    }
    const range = parseDateRange(event.date)
    if (!range) return
    const { start, end } = range
    if (
      start.getMonth() === currentMonth.getMonth() &&
      start.getFullYear() === currentMonth.getFullYear()
    ) {
      const scheduled = Boolean(
        event.eventbriteLink || event.id.startsWith('bar-'),
      )
      const startDay = start.getDate()
      const endDay =
        end.getMonth() === currentMonth.getMonth() ? end.getDate() : daysInMonth
      for (let day = startDay; day <= endDay; day++) {
        if (!eventsByDay[day]) eventsByDay[day] = []
        eventsByDay[day].push({ event, scheduled })
      }
    }
  })

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1),
    )
  }

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1),
    )
  }

  return (
    <>
      <Navbar navLinks={navLinks} />
      <main className="min-h-screen bg-gradient-to-br from-la-sky via-la-blush to-la-sand text-gray-900">
        <section className="py-12 sm:py-20 px-4 relative overflow-hidden">
          <div className="container mx-auto">
            <SectionHeading
              title={locale === 'es' ? "Calendario de Eventos" : "Event Calendar"}
              subtitle={locale === 'es' ? "Explora todos nuestros eventos de programación cuántica en Los Ángeles" : "Explore all our quantum programming events across Los Angeles"}
            />
            {/* Info message about upcoming events and mailing list */}
            <div className="mb-6 p-4 bg-gradient-to-r from-la-sky/30 to-la-sunset/10 border border-la-sunset/30 rounded-xl text-center text-base text-gray-800 shadow">
              {locale === 'es'
                ? 'Se están planificando muchos más eventos y se actualizarán en este calendario tan pronto como se finalicen.'
                : 'Many more events are currently being planned and will be updated on this calendar as soon as they are finalized.'}
              <a
                href="/upcoming-events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-la-coral underline font-medium hover:text-la-sunset mx-1"
              >
                {locale === 'es' ? 'Ver eventos próximos' : 'See upcoming events'}
              </a>
              {locale === 'es' ? 'y' : 'and'}
              <a
                href="/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-la-coral underline font-medium hover:text-la-sunset mx-1"
              >
                {locale === 'es' ? 'Inscríbete en nuestra lista de correo' : 'Sign up for our mailing list'}
              </a>
              {locale === 'es' ? 'para recibir notificaciones sobre nuevos eventos.' : 'to get notified as soon as new events are announced!'}
            </div>
            <div className="flex justify-end mb-6">
              <button
                className={`px-4 py-2 rounded-l-full border border-la-sunset/40 font-medium transition-colors ${
                  view === 'list'
                    ? 'bg-gradient-to-r from-la-coral to-la-sunset text-white'
                    : 'bg-white text-gray-900 hover:bg-la-sky/20'
                }`}
                onClick={() => setView('list')}
              >
                {locale === 'es' ? 'Vista de Lista' : 'List View'}
              </button>
              <button
                className={`px-4 py-2 rounded-r-full border-t border-b border-r border-la-sunset/40 font-medium transition-colors -ml-px ${
                  view === 'calendar'
                    ? 'bg-gradient-to-r from-la-coral to-la-sunset text-white'
                    : 'bg-white text-gray-900 hover:bg-la-sky/20'
                }`}
                onClick={() => setView('calendar')}
              >
                {locale === 'es' ? 'Vista de Calendario' : 'Calendar View'}
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
              {/* Calendar Navigation */}
              <Card className="lg:col-span-1 bg-white/80 backdrop-blur-sm border border-la-sunset/20 shadow-md shadow-la-sand/40">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <button
                      onClick={prevMonth}
                      className="p-2 hover:bg-la-sky/20 rounded-full transition-colors"
                      title="Previous month"
                    >
                      <ChevronLeft className="w-6 h-6 text-la-sunset" />
                    </button>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {currentMonth.toLocaleString('default', {
                        month: 'long',
                        year: 'numeric',
                      })}
                    </h2>
                    <button
                      onClick={nextMonth}
                      className="p-2 hover:bg-la-sky/20 rounded-full transition-colors"
                      title="Next month"
                    >
                      <ChevronRight className="w-6 h-6 text-la-sunset" />
                    </button>
                  </div>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full p-3 rounded-full transition-all duration-300 ${
                          selectedCategory === category
                            ? 'bg-gradient-to-r from-la-coral to-la-sunset text-white shadow-md'
                            : 'bg-white hover:bg-la-sky/20 text-gray-900 border border-la-sunset/20'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
              {/* Events List or Calendar Grid */}
              <div className="lg:col-span-3">
                {view === 'list' ? (
                  <div className="grid gap-6">
                    {filteredEvents.map((event) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card
                          className={`bg-white/80 backdrop-blur-sm border border-la-sunset/20 shadow-md shadow-la-sand/40 hover:border-la-coral/70 transition-all duration-300
                            ${
                              isEventInPast(event)
                                ? 'opacity-60 grayscale'
                                : !event.eventbriteLink &&
                                  !event.id.startsWith('bar-')
                                ? 'bg-gradient-to-r from-la-dusk/60 to-la-dusk/40 text-white font-bold'
                                : ''
                            }`}
                        >
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                              <div className="md:w-1/3 aspect-video overflow-hidden rounded-xl">
                                <img
                                  src={event.image}
                                  alt={event.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="md:w-2/3">
                                <div className="flex flex-wrap items-center gap-2 text-la-sunset mb-2">
                                  <Calendar className="h-4 w-4" />
                                  <span className="text-sm">{event.date}</span>
                                  <Clock className="h-4 w-4 ml-2" />
                                  <span className="text-sm">{event.time}</span>
                                </div>
                                <div className="flex items-center gap-2 text-la-dusk mb-4">
                                  <MapPin className="h-4 w-4" />
                                  <span className="text-sm">
                                    {event.location}
                                  </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900 font-heading">
                                  {event.title}
                                </h3>
                                <p className="text-gray-600 mb-4 font-body">
                                  {event.description}
                                </p>
                                <ClickableButton
                                  href={event.link}
                                  className={`bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white hover:opacity-90 transition-opacity font-medium shadow-sm rounded-full py-2 px-8 ${
                                    !event.eventbriteLink &&
                                    !event.id.startsWith('bar-')
                                      ? 'opacity-70 grayscale'
                                      : ''
                                  }`}
                                >
                                  {locale === 'es' ? 'Aprender más' : 'Learn More'}
                                </ClickableButton>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <>
                    <div className="bg-white/80 rounded-2xl p-4 shadow-md border border-la-sunset/20 mb-6">
                      {/* Removed floating unscheduled events at the top */}
                      <div className="grid grid-cols-7 gap-2 text-center text-gray-500 mb-2">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                          (d) => (
                            <div
                              key={d}
                              className="font-semibold text-xs py-1"
                            >
                              {d}
                            </div>
                          ),
                        )}
                      </div>
                      <div className="grid grid-cols-7 gap-2">
                        {/* Empty cells for first day of month */}
                        {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                          <div key={`empty-${i}`} />
                        ))}
                        {/* Days of month with events (scheduled and unscheduled) */}
                        {calendarDays.map((day) => (
                          <div
                            key={day}
                            className="relative group"
                          >
                            <div
                              className={`w-full aspect-square rounded-lg flex flex-col items-center justify-center border border-la-sunset/10 ${
                                eventsByDay[day]
                                  ? 'bg-gradient-to-br from-la-coral/10 to-la-sunset/10 border-la-coral/40'
                                  : 'bg-white'
                              }`}
                            >
                              <span className="font-semibold text-gray-900 text-sm mb-1">
                                {day}
                              </span>
                              {eventsByDay[day] &&
                                eventsByDay[day].map(({ event, scheduled }) => (
                                  <button
                                    key={event.id}
                                    className={`w-3/4 text-xs rounded-full py-1 px-2 mt-1 hover:opacity-90 truncate transition-colors ${
                                      isEventInPast(event)
                                        ? 'text-gray-400 bg-gray-200'
                                        : scheduled
                                        ? 'text-white bg-gradient-to-r from-la-coral to-la-sunset'
                                        : 'text-white font-bold bg-gradient-to-r from-la-dusk/60 to-la-dusk/40'
                                    }`}
                                    title={event.title}
                                    onClick={() => {
                                      window.location.href = event.link
                                    }}
                                  >
                                    {event.title}
                                  </button>
                                ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
