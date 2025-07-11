'use client'

import { Analytics } from '@vercel/analytics/react'
import {
  Atom,
  Beer,
  Building2,
  Gamepad2,
  GraduationCap,
  Lightbulb,
  TreePalmIcon as PalmTree,
  Sparkles,
  Sun,
  Telescope,
  Users,
} from 'lucide-react'
import EventCard from '../../components/event-card'
import Navbar from '../../components/navbar'
import SectionHeading from '../../components/section-heading'
import NeonIsometricMaze from '../../neon-isometric-maze'
import SponsorsSection from '../../components/sponsors-section'
import es from '@/messages/es.json';
import en from '@/messages/en.json';
import { useEffect, useState } from 'react';



export default function Home() {
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


  const upcomingEvents = [
    {
      title: t.events.publicTalks.title,
      date: 'June 11-18, 2025',
      startDate: '2025-06-11',
      time: 'Details on each university page',
      location: 'USC, Caltech, UCLA, and Chapman',
      description:
        t.events.publicTalks.description,
      image: '/images/public-talk.png?height=300&width=600',
      icon: <GraduationCap className="w-6 h-6" />,
      link: '/public-talks',
      buttonText: 'Learn More',
    },
    {
      title: t.events.labTours.title,
      date: 'June 17-26, 2025',
      startDate: '2025-06-17',
      time: 'Details on each university page',
      location: 'USC, Caltech, and UCLA',
      description:
        t.events.labTours.description,
      image: '/images/labs.png?height=300&width=600',
      icon: <Building2 className="w-6 h-6" />,
      link: '/quantum-lab-tours',
      buttonText: 'Learn More',
    },
    {
      title: t.events.quantumGames.title,
      date: 'June 24-29, 2025',
      startDate: '2025-06-26',
      time: 'TBD',
      location: 'Various Locations',
      description:
        t.events.quantumGames.description,
      image: '/images/games.png?height=300&width=600',
      icon: <Gamepad2 className="w-6 h-6" />,
      link: '/quantum-games',
      buttonText: 'Learn More',
    },
    {
      title: t.events.kids.title,
      date: 'July 12th, 2025',
      startDate: '2025-07-12',
      time: '10:00 AM – 2:00 PM',
      location: 'Caltech Campus',
      description:
        t.events.kids.description,
      image: '/images/kids.png?height=300&width=600',
      icon: <Atom className="w-6 h-6" />,
      link: '/quantum-for-kids',
      buttonText: 'Learn More',
    },
    {
      title: t.events.companies.title,
      date: 'July 15-20, 2025',
      startDate: '2025-07-15',
      time: 'multiple',
      location: 'USC',
      description:
        t.events.companies.description,
      image: '/images/companies.png?height=300&width=600',
      icon: <Sparkles className="w-6 h-6" />,
      link: '/quantum-tech-company-events',
      buttonText: 'Learn More',
    },
    {
      title: t.events.bar.title,
      date: 'July 22-27, 2025',
      startDate: '2025-07-22',
      time: 'multiple',
      location: 'Various Locations',
      description:
        t.events.bar.description,
      image: '/images/h-bar.png?height=300&width=600',
      icon: <Beer className="w-6 h-6" />,
      link: '/quantum-at-the-bar',
      buttonText: 'Learn More',
    },
    {
      title: t.events.teachers.title,
      date: 'July 29-August 3, 2025',
      startDate: '2025-07-29',
      time: 'TBD',
      location: 'TBD',
      description:
        t.events.teachers.description,
      image: '/images/teachers.png?height=300&width=600',
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      title: t.events.stars.title,
      date: 'August 5-10, 2025',
      startDate: '2025-08-05',
      time: 'TBD',
      location: 'Griffith Observatory',
      description:
        t.events.stars.description,
      image: '/images/stars.png?height=300&width=600',
      icon: <Telescope className="w-6 h-6" />,
    },
    {
      title: t.events.seniors.title,
      date: 'TBD',
      startDate: '9999-12-31',
      time: 'To be announced',
      location: 'TBD',
      description:
        t.events.seniors.description,
      image: '/images/seniors.png?height=300&width=600',
      icon: <Users className="w-6 h-6" />,
      link: '/quantum-for-seniors',
      buttonText: 'Learn More',
    },
  ]

  const sortEvents = (events: any[]) => {
    const now = new Date()
    now.setHours(0, 0, 0, 0)

    const upcoming = events.filter((event) => {
      const eventDate = new Date(event.startDate)
      return eventDate >= now
    })

    const past = events.filter((event) => {
      const eventDate = new Date(event.startDate)
      return eventDate < now
    })

    const tbd = upcoming.filter((event) => event.date === 'TBD')
    const datedUpcoming = upcoming.filter((event) => event.date !== 'TBD')

    datedUpcoming.sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    )

    return [...datedUpcoming, ...tbd, ...past]
  }

  const sortedEvents = sortEvents(upcomingEvents)

  const navLinks = [
    { name: t.home, href: '#' },
    { name: t.upcomingEvents, href: '#upcoming-events' },
    { name: t.calendar, href: '/calendar' },
    { name: t.joinMailingList, href: '/signup' },
    { name: t.volunteer, href: '/volunteers' },
    { name: t.partner, href: '/sponsorship' },
  ]

  return (
    <>
   

      <Navbar navLinks={navLinks} />
       
      <main className="min-h-screen bg-gradient-to-br from-la-sky via-la-blush to-la-sand text-gray-900">
        {/* Hero Section */}
        <NeonIsometricMaze />
        {/* Event Overview Section */}
        <section
          id="event-overview"
          className="py-12 sm:py-20 px-4 relative overflow-hidden bg-white"
        >
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm -z-10"></div>
          <div className="container mx-auto">
            <SectionHeading
              title={t.eventOverview}
              subtitle={
                <span className="sm:whitespace-nowrap md:whitespace-normal">
                  {t.eventOverviewSubtitle1}{' '}
                  <a
                    href="https://quantum2025.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-la-coral to-la-sunset hover:from-la-sunset hover:to-la-coral underline underline-offset-4 decoration-la-coral/70 hover:decoration-la-sunset/70 transition-all duration-300"
                  >
                   {t.eventOverviewSubtitle2}
                  </a>{' '}
                  {t.eventOverviewSubtitle3}
                </span>
              }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="bg-gradient-to-br from-white to-la-sky p-5 sm:p-6 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40 group hover:border-la-sunset/40 transition-all duration-300 transform transition-transform hover:scale-[1.02]">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 font-heading">
                 {t.eventOverviewDesc[0].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {t.eventOverviewDesc[0].description}
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-la-blush p-5 sm:p-6 rounded-2xl border border-la-dusk/20 shadow-md shadow-la-sand/40 group hover:border-la-dusk/40 transition-all duration-300 transform transition-transform hover:scale-[1.02]">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-la-dusk to-la-coral flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 font-heading">
                  {t.eventOverviewDesc[1].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {t.eventOverviewDesc[1].description}
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-la-aqua p-5 sm:p-6 rounded-2xl border border-la-aqua/20 shadow-md shadow-la-sand/40 group hover:border-la-aqua/40 transition-all duration-300 transform transition-transform hover:scale-[1.02]">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-la-aqua to-la-dusk flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 font-heading">
                  {t.eventOverviewDesc[2].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {t.eventOverviewDesc[2].description}
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-la-sunset p-5 sm:p-6 rounded-2xl border border-la-coral/20 shadow-md shadow-la-sand/40 group hover:border-la-coral/40 transition-all duration-300 transform transition-transform hover:scale-[1.02]">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-la-sunset to-la-coral flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 font-heading">
                  {t.eventOverviewDesc[3].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {t.eventOverviewDesc[3].description}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-la-sky to-la-blush p-5 sm:p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 font-heading">
                {t.joinSummerTitle}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                {t.joinSummerDesc}
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="/signup"
                  className="bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white hover:opacity-90 transition-all font-medium shadow-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm hover:scale-105"
                >
                 {t.joinMailingList}
                </a>
                <a
                  href="https://quantum2025.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-la-sunset text-la-coral hover:bg-la-sand transition-all shadow-sm rounded-full px-4 sm:px-6 py-2 text-sm hover:scale-105"
                >
                 {t.learnMoreAboutIYQ}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section
          id="upcoming-events"
          className="py-12 sm:py-20 px-4 bg-la-sand"
        >
          <div className="container mx-auto">
            <SectionHeading
              title= {t.upcomingEvents}
              subtitle={t.upcomingEventsSubtitle}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {sortedEvents.map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  description={event.description}
                  image={event.image}
                  icon={event.icon}
                  link={event.link}
                  buttonText={event.buttonText}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer with Us Section */}
        {/* <section
          id="volunteer"
          className="py-12 sm:py-20 px-4 bg-la-blush relative"
        >
          <div className="absolute inset-0 opacity-5 bg-venice-texture mix-blend-overlay"></div>
          <div className="container mx-auto">
            <div className="mb-8 md:mb-12 max-w-3xl text-center mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk font-heading">
               {t.volunteer}
              </h2>
              <div className="flex justify-center">
                <div className="text-base sm:text-lg text-gray-600 font-body max-w-full break-words">
                  {t.volunteer_intro.text}{' '}
                  <a
                    href="/volunteers"
                    className="text-la-coral hover:text-la-sunset underline underline-offset-4 decoration-la-coral/70 hover:decoration-la-sunset/70 transition-all duration-300 relative z-50"
                    style={{ position: 'relative' }}
                  >
                  {t.volunteer_intro.text2}
                  </a>
                  !
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md shadow-la-sand/40">
                <h3 className="text-xl font-bold mb-6 text-gray-900 font-heading">
                  {t.opportunitiesTitle}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">
                        {t.roles[0].title}
                      </h4>
                      <p className="text-gray-600">
                        {t.roles[0].desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-dusk to-la-coral flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="3"
                          rx="2"
                        />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">
                        {t.roles[1].title}
                      </h4>
                      <p className="text-gray-600">
                        {t.roles[1].desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-aqua to-la-dusk flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <path d="m22 6-10 7L2 6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">
                        {t.roles[2].title}
                      </h4>
                      <p className="text-gray-600">
                        {t.roles[2].desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-aqua to-la-sky flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">
                        {t.roles[3].title}
                      </h4>
                      <p className="text-gray-600">
                        {t.roles[3].desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-aqua to-la-sky flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle
                          cx="9"
                          cy="7"
                          r="4"
                        />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">
                        {t.roles[4].title}
                      </h4>
                      <p className="text-gray-600">
                        {t.roles[4].desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-aqua to-la-sky flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
                        <path d="m12 19-2 3" />
                        <path d="m12 19 2 3" />
                        <path d="M12 2v2" />
                        <path d="m2 12 3-2" />
                        <path d="m19 12 3-2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">
                        {t.roles[5].title}
                      </h4>
                      <p className="text-gray-600">
                        {t.roles[5].desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-sunset to-la-coral flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M3 7V5c0-1.1.9-2 2-2h2" />
                        <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
                        <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
                        <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
                        <path d="M8 7v10" />
                        <path d="M12 7v10" />
                        <path d="M16 7v10" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">
                        {t.roles[6].title}
                      </h4>
                      <p className="text-gray-600">
                        {t.roles[6].desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-sunset to-la-coral flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">
                        {t.roles[7].title}
                      </h4>
                      <p className="text-gray-600">
                        {t.roles[7].desc}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-dusk to-la-aqua flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                        <circle
                          cx="12"
                          cy="13"
                          r="3"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">
                      {t.roles[8].title}
                      </h4>
                      <p className="text-gray-600">
                        {t.roles[8].desc}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-coral to-la-aqua flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M12 19c1-1 4-3 4-6.5a3.5 3.5 0 0 0-7 0c0 3.5 3 5.5 4 6.5Z" />
                        <path d="M8 19c-1-1.5-2-3-2-5.5 0-2 .5-4 2-6" />
                        <path d="M16 19c1-1.5 2-3 2-5.5 0-2-.5-4-2-6" />
                        <path d="M12 19v3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">
                        {t.roles[9].title}
                      </h4>
                      <p className="text-gray-600">
                        {t.roles[9].desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 font-heading">
                  {t.whyTitle}
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-la-sunset to-la-dusk flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle
                          cx="8.5"
                          cy="7"
                          r="4"
                        ></circle>
                        <polyline points="17 11 19 13 23 9"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 font-heading">
                       {t.why[0].title}
                      </h4>
                      <p className="text-gray-700">
                        {t.why[0].desc}
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m7 10 3 3 7-7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 font-heading">
                        {t.why[1].title}
                      </h4>
                      <p className="text-gray-700">
                        {t.why[1].desc}
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-la-dusk to-la-coral flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle
                          cx="9"
                          cy="7"
                          r="4"
                        />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 font-heading">
                       {t.why[2].title}
                      </h4>
                      <p className="text-gray-700">
                        {t.why[2].desc}{' '}
                        <a
                          href="/volunteers"
                          className="text-la-coral hover:text-la-sunset underline underline-offset-4 decoration-la-coral/70 hover:decoration-la-sunset/70 transition-all duration-300 relative z-50"
                          style={{ position: 'relative' }}
                        >
                          {t.why[2].desc2}
                        </a>
                        .
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-la-aqua to-la-dusk flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 font-heading">
                        {t.why[3].title}
                      </h4>
                      <p className="text-gray-700">
                        {t.why[3].desc}
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 relative z-50">
                  <a
                    href="https://forms.gle/ZSaeCCjfn7HQjELy5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white hover:opacity-90 transition-all font-medium shadow-sm rounded-full py-3 text-sm hover:scale-105 text-center relative z-50"
                  >
                    {t.cta}{' '}
                    <PalmTree className="inline-block ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner with Us Section */}
        <section
          id="partner"
          className="py-12 sm:py-20 px-4 relative bg-la-sand"
        >
          <div className="absolute inset-0 bg-la-skyline bg-no-repeat bg-bottom opacity-10"></div>
          <div className="container mx-auto">
            <SectionHeading
              title={t.partnerWithUs}
              subtitle={t.partnerWithUsSubtitle}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 font-heading">
                  {t.partnerWithUsWhyTitle}
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-bold text-gray-900 font-heading">
                        {t.partnerWithUsWhyPoints[0].title0}
                      </span>{' '}
                      {t.partnerWithUsWhyPoints[0].community_impact}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-bold text-gray-900 font-heading">
                        {t.partnerWithUsWhyPoints[1].title1}
                      </span>{' '}
                      {t.partnerWithUsWhyPoints[1].networking}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-bold text-gray-900 font-heading">
                        {t.partnerWithUsWhyPoints[2].title2}
                      </span>{' '}
                      {t.partnerWithUsWhyPoints[2].visibility}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-bold text-gray-900 font-heading">
                        {t.partnerWithUsWhyPoints[3].title3}
                      </span>{' '}
                      {t.partnerWithUsWhyPoints[3].talent_pipeline}
                    </p>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md shadow-la-sand/40">
                <h3 className="text-xl font-bold mb-4 text-gray-900 font-heading">
                  {t.partnerWithUsOppTitle}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-coral to-la-sunset flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">
                        {t.partnerWithUsOpportunities[0].title}

                      </h4>
                      <p className="text-gray-600">
                        {t.partnerWithUsOpportunities[0].desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-sunset to-la-coral flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle
                          cx="9"
                          cy="7"
                          r="4"
                        />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">
                        {t.partnerWithUsOpportunities[1].title}
                      </h4>
                      <p className="text-gray-600">
                        {t.partnerWithUsOpportunities[1].desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-la-dusk to-la-coral flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading">
                        {t.partnerWithUsOpportunities[2].title}
                      </h4>
                      <p className="text-gray-600">
                        {t.partnerWithUsOpportunities[2].desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 relative z-50">
                  <a
                    href="/sponsorship"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white hover:opacity-90 transition-all font-medium shadow-sm rounded-full py-3 text-sm hover:scale-105 text-center relative z-50"
                  >
                    {t.partnerWithUsCTA}{' '}
                    <Sun className="inline-block ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        </section> */}

        {/* Sponsors Section */}
        <SponsorsSection />

        {/* Footer */}
        <footer className="py-12 px-4 bg-white border-t border-la-sunset/20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk font-heading">
                 {t.summer_of_quantum_in_LA}
                </h3>
                <p className="text-gray-600 mb-6">
                 {t.series_desc}
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/summerofquantum"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-gray-500 hover:text-la-dusk transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line
                        x1="17.5"
                        x2="17.51"
                        y1="6.5"
                        y2="6.5"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/107090952"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-gray-500 hover:text-la-dusk transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect
                        width="4"
                        height="12"
                        x="2"
                        y="9"
                      />
                      <circle
                        cx="4"
                        cy="4"
                        r="2"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-gray-900 font-heading">

{t.quick_links}
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#event-overview"
                      className="text-gray-600 hover:text-la-coral transition-colors inline-block"
                    >
                      {t.eventOverview}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://forms.gle/ZSaeCCjfn7HQjELy5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-la-coral transition-colors"
                    >
                      {t.volunteer}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sponsorship"
                      className="text-gray-600 hover:text-la-coral transition-colors"
                    >
                    {t.partner}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/signup"
                      className="text-gray-600 hover:text-la-coral transition-colors"
                    >
                     {t.joinMailingList}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-gray-900 font-heading">
                 { t.contact}
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="m22 6-10 7L2 6" />
                    </svg>
                    <span>shanto@usc.edu</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="m22 6-10 7L2 6" />
                    </svg>
                    <span>summerofquantumla@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-la-sunset/20 text-center text-sm text-gray-500">
              <p>
                © {new Date().getFullYear()} Summer of Quantum LA. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
      <Analytics />
    </>
  )
}
