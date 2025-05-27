'use client'

import { Analytics } from '@vercel/analytics/react'
import { Building2, Users } from 'lucide-react'
import Navbar from '../../components/navbar'
import SectionHeading from '../../components/section-heading'

export default function Volunteers() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Event Overview', href: '/#event-overview' },
    { name: 'Upcoming Events', href: '/#upcoming-events' },
    {
      name: 'Join Our Mailing List',
      href: 'https://forms.gle/2PLx9D6uXgCmodDbA',
      external: true,
    },
    {
      name: 'Volunteer with Us',
      href: 'https://forms.gle/ZSaeCCjfn7HQjELy5',
      external: true,
    },
    {
      name: 'Partner with Us',
      href: 'https://forms.gle/DyUdErt8nMdxNmai8',
      external: true,
    },
  ]

  const volunteers = [
    // Leadership Team
    {
      name: 'Sadman Ahmed Shanto',
      institution: 'USC',
      image: '/images/volunteers/placeholder-1.jpg',
      isLeadership: true,
    },
    {
      name: 'Emanuel Dallas',
      institution: 'USC',
      image: '/images/volunteers/placeholder-2.jpg',
      isLeadership: true,
    },
    {
      name: 'Madison Howard',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-3.jpg',
      isLeadership: true,
    },
    {
      name: 'Joseph Barreto',
      institution: 'USC',
      image: '/images/volunteers/placeholder-4.jpg',
      isLeadership: true,
    },
    {
      name: 'Cody Fan',
      institution: 'UCLA',
      image: '/images/volunteers/placeholder-5.jpg',
      isLeadership: true,
    },
    {
      name: 'Nicolas Dirnegger',
      institution: 'UCLA',
      image: '/images/volunteers/placeholder-6.jpg',
      isLeadership: true,
    },
    {
      name: 'Bibek Bhandari',
      institution: 'Chapman',
      image: '/images/volunteers/placeholder-7.jpg',
      isLeadership: true,
    },

    // All Volunteers
    {
      name: 'Anshu',
      institution: 'USC',
      image: '/images/volunteers/placeholder-7.jpg',
    },
    {
      name: 'Sandra Al Hames',
      institution: 'USC',
      image: '/images/volunteers/placeholder-8.jpg',
    },
    {
      name: 'Pranavi Jain',
      institution: 'USC',
      image: '/images/volunteers/placeholder-9.jpg',
    },
    {
      name: 'Vivek Maurya',
      institution: 'USC',
      image: '/images/volunteers/placeholder-10.jpg',
    },
    {
      name: 'Alyssa Chan',
      institution: 'USC',
      image: '/images/volunteers/placeholder-11.jpg',
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
      name: 'Yueqian Wang',
      institution: 'USC',
      image: '/images/volunteers/placeholder-17.jpg',
    },
    {
      name: 'Akansha Jaiswal',
      institution: 'USC',
      image: '/images/volunteers/placeholder-18.jpg',
    },
    {
      name: 'Vaishnavi Patil',
      institution: 'USC',
      image: '/images/volunteers/placeholder-19.jpg',
    },
    {
      name: 'Anudeep Deekonda',
      institution: 'USC',
      image: '/images/volunteers/placeholder-20.jpg',
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
      image: '/images/volunteers/placeholder-64.jpg',
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
      image: '/images/volunteers/placeholder-31.jpg',
    },
    {
      name: 'Alice Xiong',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-32.jpg',
    },
    {
      name: 'Adelynn Tang',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-33.jpg',
    },
    {
      name: 'Thomas Zacharias',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-65.jpg',
    },
    {
      name: 'Phelan Yu',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-21.jpg',
    },
    {
      name: 'Taylor Knapp',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-53.jpg',
      isLeadership: true,
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
      institution: 'Caltech',
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
      name: 'Huma Jafree',
      institution: 'Caltech',
      image: '/images/volunteers/placeholder-43.jpg',
      isLeadership: true,
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
      image: '/images/volunteers/placeholder-52.jpg',
    },
  ]

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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {volunteers
                  .filter((v) => v.isLeadership)
                  .map((volunteer, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40 overflow-hidden group hover:border-la-sunset/40 transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <div className="aspect-square relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-la-sky to-la-blush opacity-20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Users className="w-16 h-16 text-la-coral opacity-50" />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 font-heading mb-1">
                          {volunteer.name}
                        </h3>
                        <div className="flex items-center gap-2 text-la-coral">
                          <Building2 className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {volunteer.institution}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* All Volunteers Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 font-heading">
                Our Volunteers
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {volunteers
                  .filter((v) => !v.isLeadership)
                  .map((volunteer, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40 overflow-hidden group hover:border-la-sunset/40 transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <div className="aspect-square relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-la-sky to-la-blush opacity-20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Users className="w-16 h-16 text-la-coral opacity-50" />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 font-heading mb-1">
                          {volunteer.name}
                        </h3>
                        <div className="flex items-center gap-2 text-la-coral">
                          <Building2 className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {volunteer.institution}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

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
