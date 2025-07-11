'use client'

import { Analytics } from '@vercel/analytics/react'
import { Building2, Globe, Linkedin, Users } from 'lucide-react'
import { useState } from 'react'
import Navbar from '../../components/navbar'
import SectionHeading from '../../components/section-heading'

const PLACEHOLDER_IMG = '/images/volunteers/placeholder.jpg'
const PAGE_SIZE = 20

export default function Volunteers() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Event Overview', href: '/#event-overview' },
    { name: 'Upcoming Events', href: '/#upcoming-events' },
    { name: 'Calendar', href: '/calendar' },
    { name: 'Join Our Mailing List', href: '/signup' },
    { name: 'Our Volunteers', href: '/volunteers' },
    { name: 'Partner with Us', href: '/sponsorship' },
  ]

  const volunteers = [
    // Leadership Team (ordered)
    {
      name: 'Sadman Ahmed Shanto',
      institution: 'USC',
      image: '/images/volunteers/sadman-ahmed-shanto.jpg',
      website: 'https://sadmanahmedshanto.com',
      isLeadership: true,
    },
    {
      name: 'Madison Howard',
      institution: 'Caltech',
      image: '/images/volunteers/madison-howard.jpg',
      website: 'https://madisonihoward.com',
      isLeadership: true,
    },
    {
      name: 'Emanuel Dallas',
      institution: 'USC',
      image: '/images/volunteers/manny-dallas.jpg',
      isLeadership: true,
    },
    {
      name: 'Joseph Barreto',
      institution: 'USC',
      image: '/images/volunteers/joey-barreto.jpg',
      linkedin: 'https://www.linkedin.com/in/joey-barreto/',
      isLeadership: true,
    },
    {
      name: 'Nicolas Dirnegger',
      institution: 'UCLA',
      image: '/images/volunteers/nicolas-dirnegger.jpg',
      linkedin: 'http://linkedin.com/in/nicolas-dirnegger-aa8442100',
      isLeadership: true,
    },
    {
      name: 'Taylor Knapp',
      institution: 'Caltech',
      image: '/images/volunteers/taylor-knapp.jpg',
      linkedin: 'https://www.linkedin.com/in/tayloraknapp/',
      isLeadership: true,
    },
    {
      name: 'Huma Jafree',
      institution: 'Caltech',
      image: '/images/volunteers/huma-jafree-01.jpg',
      linkedin: 'https://www.linkedin.com/in/huma-jafree-05983b1a1/',
      isLeadership: true,
    },
    {
      name: 'Thomas Zacharias',
      institution: 'Caltech',
      image: '/images/volunteers/thomas-zacharias.jpg',
      linkedin: 'https://www.linkedin.com/in/thomas-zacharias-899a7210b/',
      isLeadership: true,
    },
    {
      name: 'Sandra Al Hames',
      institution: 'USC',
      image: '/images/volunteers/sandra-al-hames.jpg',
      linkedin: 'https://www.linkedin.com/in/sandra-al-hames',
      isLeadership: true,
    },

    // All Volunteers
    {
      name: 'Adithi Ajith',
      institution: 'Chapman',
      image: '/images/volunteers/adithi-ajith.jpg',
      linkedin: 'https://www.linkedin.com/in/adithi-a-860b2122b/',
      isLeadership: true,
    },

    {
      name: 'Bibek Bhandari',
      institution: 'Chapman',
      image: '/images/volunteers/bibek-bhandari.jpg',
      isLeadership: true,
    },

    {
      name: 'Cody Fan',
      institution: 'UCLA',
      image: '/images/volunteers/cody-fan.jpeg',
      isLeadership: true,
    },
    {
      name: 'Vivek Maurya',
      institution: 'USC',
      image: '/images/volunteers/placeholder-10.jpg',
    },
    {
      name: 'Alyssa Chan',
      institution: 'USC',
      image: '/images/volunteers/alyssa-chan.jpg',
      linkedin: 'https://www.linkedin.com/in/alyssa-chan-fishschool',
    },
    {
      name: 'Yueqian Wang',
      institution: 'USC',
      image: '/images/volunteers/placeholder-17.jpg',
      linkedin: 'https://www.linkedin.com/in/yueqianwang',
    },
    {
      name: 'Kumar Saurav',
      institution: 'USC',
      image: '/images/volunteers/placeholder-12.jpg',
    },
    {
      name: 'Elizabeth Kunz',
      institution: 'USC',
      image: '/images/volunteers/placeholder-13.jpg',
    },
    {
      name: 'Saikat Das',
      institution: 'USC',
      image: '/images/volunteers/placeholder-14.jpg',
    },
    {
      name: 'Kartikeya Arora',
      institution: 'USC',
      image: '/images/volunteers/placeholder-15.jpg',
    },
    {
      name: 'Rei Shuen Ng',
      institution: 'USC',
      image: '/images/volunteers/placeholder-16.jpg',
    },
    {
      name: 'Akansha Jaiswal',
      institution: 'USC',
      image: '/images/volunteers/placeholder-18.jpg',
    },
    {
      name: 'Vaishnavi Patil',
      institution: 'USC',
      image: '/images/volunteers/vaishnavi-patil.jpg',
      linkedin: 'https://www.linkedin.com/in/vaishnavi-patil-4591422b4',
    },
    {
      name: 'Anudeep Deekonda',
      institution: 'USC',
      image: '/images/volunteers/anudeep-deekonda.jpg',
      linkedin: 'https://www.linkedin.com/in/anudeep-deekonda/',
    },
    {
      name: 'Pranavi Jain',
      institution: 'USC',
      image: '/images/volunteers/placeholder-9.jpg',
    },
    {
      name: 'Ian Hsiao',
      institution: 'USC',
      image: '/images/volunteers/placeholder-22.jpg',
    },
    {
      name: 'Azrin Khan',
      institution: 'USC',
      image: '/images/volunteers/placeholder-24.jpg',
    },
    {
      name: 'Muhammad Ubaid Ur Rehman',
      institution: 'USC',
      image: '/images/volunteers/placeholder-25.jpg',
    },
    {
      name: 'Michael Zhang',
      institution: 'USC',
      image: '/images/volunteers/placeholder-26.jpg',
    },
    {
      name: 'Cedar Rose Leach',
      institution: 'USC',
      image: '/images/volunteers/placeholder-27.jpg',
    },
    {
      name: 'Haochen Shan',
      institution: 'USC',
      image: '/images/volunteers/placeholder-28.jpg',
    },
    {
      name: 'Mowen Zhao',
      institution: 'USC',
      image: '/images/volunteers/placeholder-29.jpg',
    },
    {
      name: 'Malida Hecht',
      institution: 'USC',
      image: '/images/volunteers/placeholder-23.jpg',
    },
    {
      name: 'Sacha Greenfield',
      institution: 'USC',
      image: '/images/volunteers/placeholder-56.jpg',
    },
    {
      name: 'Preksha Naik',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-57.jpg',
    },
    {
      name: 'Peter Connolly',
      institution: 'USC',
      image: '/images/volunteers/placeholder-58.jpg',
    },
    {
      name: 'Venktesh Bohra',
      institution: 'USC',
      image: '/images/volunteers/placeholder-59.jpg',
    },
    {
      name: 'Piero Chiappina',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-60.jpg',
    },
    {
      name: 'Yunhan Wang',
      institution: 'USC',
      image: '/images/volunteers/placeholder-61.jpg',
    },
    {
      name: 'Jiajin Zhang',
      institution: 'USC',
      image: '/images/volunteers/placeholder-62.jpg',
    },
    {
      name: 'Charis Hall',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-63.jpg',
    },
    {
      name: 'Michael Bregar',
      institution: 'Caltech',
      image: '/images/volunteers/michael-bregar.jpg',
      website: 'https://www.pma.caltech.edu/people/michael-bregar',
    },

    {
      name: 'Robbie King',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-44.jpg',
    },
    {
      name: 'Nicholas Hutzler',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-30.jpg',
    },
    {
      name: 'Chandler Conn',
      institution: 'Caltech',
      image: '/images/volunteers/chandler-conn.jpg',
      linkedin: 'https://www.linkedin.com/in/chandler-conn-96527a2b8',
    },
    {
      name: 'Alice Xiong',
      institution: 'Caltech',
      image: '/images/volunteers/alice-xiong.jpg',
      website: 'https://www.alicexiong.space',
    },
    {
      name: 'Adelynn Tang',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-33.jpg',
    },
    {
      name: 'Phelan Yu',
      institution: 'Caltech',
      image: '/images/volunteers/phelan-yu.jpg',
      website: 'https://www.pma.caltech.edu/people/phelan-yu',
    },
    {
      name: 'Yincheng Liu',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-34.jpg',
    },
    {
      name: 'Eric Anschuetz',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-35.jpg',
    },
    {
      name: 'Ria Rosenauer',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-36.jpg',
    },
    {
      name: 'Gabriel Perko-Engel',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-37.jpg',
    },
    {
      name: 'Samson Wang',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-38.jpg',
    },
    {
      name: 'Nicholas Ezzell',
      institution: 'USC',
      image: '/images/volunteers/placeholder-39.jpg',
    },
    {
      name: 'Yuiki Takahashi',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-40.jpg',
    },
    {
      name: "Liam O'Brien",
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-41.jpg',
    },
    {
      name: 'Olivia Pitcl',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-42.jpg',
    },
    {
      name: 'Kristina Malinowski',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-45.jpg',
    },
    {
      name: 'Jean-Marc Martin',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-46.jpg',
    },
    {
      name: 'Jared Watson',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-47.jpg',
    },
    {
      name: 'Yuxi Yang',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-55.jpg',
    },
    {
      name: 'Leo Zhou',
      institution: 'UCLA',
      image: '/images/volunteers/placeholder-48.jpg',
    },
    {
      name: 'Abhishek Chakraborty',
      institution: 'Chapman',
      image: '/images/volunteers/placeholder-49.jpg',
    },
    {
      name: 'Farai Mazhandu',
      institution: 'Colorado School of Mines',
      image: '/images/volunteers/farai-mazhandu.jpg',
      linkedin: 'https://www.linkedin.com/in/faraimazhandu/',
    },
    {
      name: 'Hannah Manetsch',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-67.jpg',
    },
    {
      name: 'Lisa Drummond',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-68.jpg',
    },
    {
      name: 'Peter Carney',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-69.jpg',
    },
    {
      name: 'Daniel Grass',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-70.jpg',
    },
    {
      name: 'Jeffrey Wack',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-71.jpg',
    },
    {
      name: 'Sara Vanovac',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-72.jpg',
    },
    {
      name: 'Daniel Ranard',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-73.jpg',
    },
    {
      name: 'Omid Golami',
      institution: 'Caltech',
      image: '/images/volunteers/omid-golami.jpg',
      linkedin: 'https://www.linkedin.com/in/omid-golami-ab2b05a7/',
    },

    {
      name: 'Elina Sendonaris',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-76.jpg',
    },
    {
      name: 'William Munizzi',
      institution: 'UCLA',
      image: '/images/volunteers/william-munizzi.jpg',
      linkedin: 'https://www.linkedin.com/in/william-munizzi-a62447a4/',
    },
    {
      name: 'Eli Ullman-Kissel',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-78.jpg',
    },
    {
      name: 'Jonathan Greenfield',
      institution: 'JPL/Arizona State University',
      image: '/images/volunteers/placeholder-79.jpg',
      linkedin: 'https://www.linkedin.com/in/jonathan-greenfield-2080531a4',
    },
    {
      name: 'Durga Pritam Suggisetti',
      institution: 'New York University',
      image: '/images/volunteers/placeholder-80.jpg',
    },
    {
      name: 'Anil Maurya',
      institution: 'University of Camerino',
      image: '/images/volunteers/placeholder-81.jpg',
      linkedin:
        'https://www.linkedin.com/in/anil-maurya-2860b2206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'David McNeary',
      institution: 'CSUN',
      image: '/images/volunteers/placeholder-82.jpg',
    },
    {
      name: 'Sephali Giri',
      institution: 'C.V Raman Global University',
      image: '/images/volunteers/sephalii-giri.jpg',
      linkedin: 'https://www.linkedin.com/in/sephali-giri-288a1b147',
    },
    {
      name: 'Alan Alexander',
      institution: 'Pasadena City College',
      image: '/images/volunteers/alan-alexander.jpg',
      linkedin: 'https://linkedin.com/alanalexanderbus',
    },
    {
      name: 'Gunhee Park',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder.jpg',
    },
    {
      name: 'Rachel Tham',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder.jpg',
    },
    {
      name: 'Venktesh',
      institution: 'USC',
      image: '/images/volunteers/placeholder.jpg',
    },

    {
      name: 'Anshu',
      institution: 'USC',
      image: '/images/volunteers/placeholder-7.jpg',
    },
    {
      name: 'Micah Shaw',
      institution: 'USC',
      image: '/images/volunteers/placeholder.jpg',
    },
    {
      name: 'Dohyeon Kim',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder.jpg',
    },
    {
      name: 'Abhishek Anand',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder.jpg',
    },
    {
      name: 'Eli Weissler',
      institution: 'CU Boulder',
      image: '/images/volunteers/placeholder.jpg',
    },
    {
      name: 'GOSPEL AIGBODEKHEME EGERUAN',
      institution: 'University of Benin',
      image: '/images/volunteers/placeholder.jpg',
    },
    {
      name: 'Nir Sukenik',
      institution: 'USC',
      image: '/images/volunteers/placeholder.jpg',
    },
    {
      name: 'Adithi Ajith',
      institution: 'Chapman University',
      image: '/images/volunteers/placeholder.jpg',
    },
    {
      name: 'Maya Lee',
      institution: 'JPL Intern',
      image: '/images/volunteers/placeholder.jpg',
    },
    {
      name: 'Hanah Rahman',
      institution: 'UIUC',
      image: '/images/volunteers/hanah-rahman.jpg',
      linkedin: 'https://www.linkedin.com/in/hanah-rahman-35bb73212',
    },
  ]

  const [page, setPage] = useState(0)
  const [institutionFilter, setInstitutionFilter] = useState<string | null>(
    null,
  )

  // Leadership team (no pagination)
  const leadershipVolunteers = volunteers.filter(
    (v) => v.isLeadership && v.name && v.name.trim() !== '',
  )

  // All volunteers (paginated)
  const allVolunteers = volunteers.filter(
    (v) => !v.isLeadership && v.name && v.name.trim() !== '',
  )
  const preferredOrder = ['USC', 'Caltech', 'UCLA', 'Chapman']
  const allInstitutionsSet = new Set(
    allVolunteers.map((v) => v.institution).filter(Boolean),
  )
  const otherInstitutions = Array.from(allInstitutionsSet)
    .filter((inst) => !preferredOrder.includes(inst))
    .sort()
  const orderedInstitutions = [
    ...preferredOrder.filter((inst) => allInstitutionsSet.has(inst)),
    ...otherInstitutions,
  ]
  const filteredVolunteers = institutionFilter
    ? allVolunteers.filter((v) => v.institution === institutionFilter)
    : allVolunteers
  const pageCount = Math.ceil(filteredVolunteers.length / PAGE_SIZE)
  const paginatedVolunteers = filteredVolunteers.slice(
    page * PAGE_SIZE,
    (page + 1) * PAGE_SIZE,
  )

  return (
    <>
      <Navbar navLinks={navLinks} />
      <main className="min-h-screen bg-gradient-to-br from-la-sky via-la-blush to-la-sand text-gray-900 pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-20 px-4 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm -z-10"></div>
          <div className="container mx-auto">
            <SectionHeading
              title="Our Amazing Volunteers"
              subtitle="Meet the dedicated team making quantum science accessible across Los Angeles"
            />

            {/* Leadership Team Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 font-heading">
                Leadership Team
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 relative">
                {leadershipVolunteers.map((volunteer, index) => {
                  const link = volunteer.website || volunteer.linkedin
                  const isFounder = volunteer.name === 'Sadman Ahmed Shanto'

                  const cardContent = (
                    <div
                      className={`relative rounded-2xl border overflow-hidden group transition-all duration-500 transform cursor-pointer ${
                        isFounder
                          ? 'bg-gradient-to-br from-white via-la-sand/5 to-la-sunset/5 border-2 border-la-sunset/50 shadow-xl shadow-la-sunset/15 hover:border-la-sunset/70 hover:shadow-2xl hover:shadow-la-sunset/20 hover:scale-[1.08] hover:-translate-y-1'
                          : 'bg-white border border-la-sunset/20 shadow-md shadow-la-sand/40 hover:border-la-sunset/40 hover:scale-[1.02]'
                      }`}
                      tabIndex={link ? 0 : -1}
                      aria-label={
                        link ? `Open ${volunteer.name}'s profile` : undefined
                      }
                    >
                      {isFounder && (
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                      )}
                      <div
                        className={`aspect-square relative overflow-hidden flex items-center justify-center ${
                          isFounder ? 'ring-2 ring-inset ring-gradient-to-br from-la-sunset/30 to-la-coral/30' : ''
                        }`}
                      >
                        {isFounder && (
                          <div className="absolute inset-0 bg-gradient-to-br from-la-coral/10 via-transparent to-la-dusk/10 animate-pulse"></div>
                        )}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${
                            isFounder
                              ? 'from-la-coral via-la-sunset to-la-dusk opacity-15'
                              : 'from-la-sky to-la-blush opacity-20'
                          } pointer-events-none`}
                        />
                        {!volunteer.image ||
                        volunteer.image.includes('placeholder') ? (
                          <Users
                            className={`${isFounder ? 'w-24 h-24' : 'w-20 h-20'} text-la-coral opacity-80 z-10`}
                            aria-label="No profile picture"
                          />
                        ) : (
                          <img
                            src={volunteer.image}
                            alt={`${volunteer.name}'s profile picture`}
                            onError={(e) => {
                              e.currentTarget.onerror = null
                              e.currentTarget.src = PLACEHOLDER_IMG
                            }}
                            className={`absolute inset-0 w-full h-full object-cover object-center z-10 ${
                              isFounder ? 'scale-105' : ''
                            }`}
                            loading={isFounder ? 'eager' : 'lazy'}
                          />
                        )}
                        {isFounder && (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-20"></div>
                            <div className="absolute top-2 right-2 w-2 h-2 bg-la-sunset rounded-full animate-pulse z-30"></div>
                          </>
                        )}
                      </div>
                      <div
                        className={`p-6 ${
                          isFounder
                            ? 'bg-gradient-to-br from-white via-white to-la-sand/10'
                            : ''
                        }`}
                      >
                        <h3
                          className={`font-bold text-gray-900 font-heading ${
                            isFounder ? 'text-xl mb-1' : 'text-lg mb-1'
                          }`}
                        >
                          {volunteer.name}
                        </h3>
                        <div
                          className={`flex items-center gap-2 mb-2 ${
                            isFounder ? 'text-la-sunset font-medium' : 'text-la-coral'
                          }`}
                        >
                          <Building2 className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {volunteer.institution}
                          </span>
                        </div>
                        {volunteer.website ? (
                          <span className="inline-flex items-center gap-1 text-sm">
                            <Globe className={`w-4 h-4 ${
                              isFounder ? 'text-la-sunset' : 'text-la-coral'
                            }`} />
                            <span className={`${
                              isFounder
                                ? 'text-transparent bg-clip-text bg-gradient-to-r from-la-coral to-la-sunset font-medium'
                                : 'text-la-coral'
                            }`}>Personal Website</span>
                          </span>
                        ) : (
                          volunteer.linkedin && (
                            <span
                              className={`inline-flex items-center gap-1 text-sm ${
                                isFounder ? 'text-la-sunset' : 'text-la-coral'
                              }`}
                            >
                              <Linkedin className="w-4 h-4" />
                              <span>LinkedIn Profile</span>
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )
                  return link ? (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={0}
                      aria-label={`Open ${volunteer.name}'s profile`}
                      className={`focus:outline-none ${
                        isFounder ? 'order-first animate-fade-in-up' : ''
                      }`}
                      style={{ 
                        textDecoration: 'none', 
                        color: 'inherit',
                        ...(isFounder ? { animationDelay: '0.2s' } : {})
                      }}
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <div
                      key={index}
                      className={isFounder ? 'order-first animate-fade-in-up' : ''}
                      style={isFounder ? { animationDelay: '0.2s' } : {}}
                    >
                      {cardContent}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* All Volunteers Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 font-heading">
                Our Volunteers
              </h3>
              {/* Institution Filter UI below heading */}
              <div className="mb-8 overflow-x-auto pb-2">
                <div className="flex gap-2 w-max min-w-full">
                  <button
                    onClick={() => {
                      setInstitutionFilter(null)
                      setPage(0)
                    }}
                    className={`px-5 py-2 rounded-full border font-medium transition-colors whitespace-nowrap shadow-sm ${
                      institutionFilter === null
                        ? 'bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white border-la-sunset'
                        : 'bg-white text-la-coral border-la-sunset/30 hover:bg-la-sand'
                    }`}
                  >
                    All Institutions
                  </button>
                  {orderedInstitutions.map((inst) => (
                    <button
                      key={inst}
                      onClick={() => {
                        setInstitutionFilter(inst)
                        setPage(0)
                      }}
                      className={`px-5 py-2 rounded-full border font-medium transition-colors whitespace-nowrap shadow-sm ${
                        institutionFilter === inst
                          ? 'bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white border-la-sunset'
                          : 'bg-white text-la-coral border-la-sunset/30 hover:bg-la-sand'
                      }`}
                    >
                      {inst}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {paginatedVolunteers.map((volunteer, index) => {
                  const link = volunteer.website || volunteer.linkedin
                  const cardContent = (
                    <div
                      className="bg-white rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40 overflow-hidden group hover:border-la-sunset/40 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
                      tabIndex={link ? 0 : -1}
                      aria-label={
                        link ? `Open ${volunteer.name}'s profile` : undefined
                      }
                    >
                      <div className="aspect-square relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-la-sky to-la-blush opacity-20 pointer-events-none" />
                        {!volunteer.image ||
                        volunteer.image.includes('placeholder') ? (
                          <Users
                            className="w-20 h-20 text-la-coral opacity-80 z-10"
                            aria-label="No profile picture"
                          />
                        ) : (
                          <img
                            src={volunteer.image}
                            alt={`${volunteer.name}'s profile picture`}
                            onError={(e) => {
                              e.currentTarget.onerror = null
                              e.currentTarget.src = PLACEHOLDER_IMG
                            }}
                            className="absolute inset-0 w-full h-full object-cover object-center z-10"
                            loading="lazy"
                          />
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 font-heading mb-1">
                          {volunteer.name}
                        </h3>
                        <div className="flex items-center gap-2 text-la-coral mb-2">
                          <Building2 className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {volunteer.institution}
                          </span>
                        </div>
                        {volunteer.website ? (
                          <span className="inline-flex items-center gap-1 text-sm">
                            <Globe className="w-4 h-4 text-la-coral" />
                            <span className="text-la-coral">Personal Website</span>
                          </span>
                        ) : (
                          volunteer.linkedin && (
                            <span className="inline-flex items-center gap-1 text-sm text-la-coral">
                              <Linkedin className="w-4 h-4" />
                              <span>LinkedIn Profile</span>
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )
                  return link ? (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={0}
                      aria-label={`Open ${volunteer.name}'s profile`}
                      className="focus:outline-none"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <div key={index}>{cardContent}</div>
                  )
                })}
              </div>
              {/* Pagination Controls */}
              {pageCount > 1 && (
                <div className="flex justify-center items-center gap-4 mt-8">
                  <button
                    onClick={() => setPage((p) => Math.max(0, p - 1))}
                    disabled={page === 0}
                    className={
                      `bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white font-medium shadow-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm transition-all hover:opacity-90 hover:scale-105 focus:outline-none` +
                      (page === 0 ? ' opacity-50 cursor-not-allowed' : '')
                    }
                  >
                    Previous
                  </button>
                  <span className="text-gray-700">
                    Page {page + 1} of {pageCount}
                  </span>
                  <button
                    onClick={() =>
                      setPage((p) => Math.min(pageCount - 1, p + 1))
                    }
                    disabled={page === pageCount - 1}
                    className={
                      `bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white font-medium shadow-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm transition-all hover:opacity-90 hover:scale-105 focus:outline-none` +
                      (page === pageCount - 1
                        ? ' opacity-50 cursor-not-allowed'
                        : '')
                    }
                  >
                    Next
                  </button>
                </div>
              )}
            </div>

            {/* Join Our Volunteer Team CTA */}
            <div className="mt-12 bg-gradient-to-r from-la-sky to-la-blush p-5 sm:p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 font-heading">
                Join Our Volunteer Team!
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                We're always looking for enthusiastic volunteers to help make
                quantum science accessible to everyone in LA. Whether you're a
                scientist, educator, student, or simply passionate about science
                communication, we'd love to have you join our team!
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="https://forms.gle/ZSaeCCjfn7HQjELy5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white hover:opacity-90 transition-all font-medium shadow-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm hover:scale-105"
                >
                  Apply to Volunteer
                </a>
                <a
                  href="/#event-overview"
                  className="border-2 border-la-sunset text-la-coral hover:bg-la-sand transition-all shadow-sm rounded-full px-4 sm:px-6 py-2 text-sm hover:scale-105"
                >
                  Learn More About Our Events
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
