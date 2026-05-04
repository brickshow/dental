'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'

export default function Doctors() {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Anderson',
      specialty: 'General Dentistry',
      experience: '15+ Years',
      qualifications: 'DDS, BDS',
      image: '/doctor-1.jpg',
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Orthodontics',
      experience: '12+ Years',
      qualifications: 'MDS, Invisalign Certified',
      image: '/doctor-2.jpg',
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Cosmetic Dentistry',
      experience: '10+ Years',
      qualifications: 'DDS, Cosmetic Specialist',
      image: '/doctor-3.jpg',
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Implantology',
      experience: '14+ Years',
      qualifications: 'DDS, Implant Specialist',
      image: '/doctor-2.jpg',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="doctors" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
            Meet Our Dentists
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            Highly qualified and experienced professionals dedicated to your oral health.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {doctors.map((doctor) => (
            <motion.div key={doctor.id} variants={item}>
              <Card className="h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border hover:border-accent/50 overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{doctor.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {doctor.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">{doctor.experience}</span> in practice
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {doctor.qualifications}
                    </p>
                  </div>
                  <div className="flex gap-2 pt-2 border-t border-border">
                    <button className="flex-1 p-2 rounded-lg bg-muted hover:bg-accent/10 transition-colors flex items-center justify-center gap-2 text-sm">
                      <Mail className="w-4 h-4" />
                      <span className="hidden sm:inline text-xs">Email</span>
                    </button>
                    <button className="flex-1 p-2 rounded-lg bg-muted hover:bg-accent/10 transition-colors flex items-center justify-center gap-2 text-sm">
                      <Phone className="w-4 h-4" />
                      <span className="hidden sm:inline text-xs">Call</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
