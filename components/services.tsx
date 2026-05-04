'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles, Zap, Shield, Heart } from 'lucide-react'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Teeth Whitening',
      description: 'Professional whitening treatments for a brighter, more radiant smile in just one session.',
      icon: Sparkles,
    },
    {
      id: 2,
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solutions that look and feel completely natural.',
      icon: Zap,
    },
    {
      id: 3,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with veneers, bonding, and other cosmetic treatments.',
      icon: Heart,
    },
    {
      id: 4,
      title: 'Braces & Orthodontics',
      description: 'Modern orthodontic solutions including traditional and invisible braces.',
      icon: Shield,
    },
    {
      id: 5,
      title: 'Root Canal Treatment',
      description: 'Pain-free endodontic treatments to save your natural teeth.',
      icon: Shield,
    },
    {
      id: 6,
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care for children in a comfortable, friendly environment.',
      icon: Heart,
    },
    {
      id: 7,
      title: 'Veneers',
      description: 'Custom-crafted porcelain veneers for a picture-perfect smile.',
      icon: Sparkles,
    },
    {
      id: 8,
      title: 'Emergency Dental Care',
      description: 'Immediate relief and treatment for dental emergencies 24/7.',
      icon: Zap,
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
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
            Comprehensive Dental Solutions
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            From preventive care to advanced cosmetic procedures, we offer a full range of dental services.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.div key={service.id} variants={item}>
                <Card className="h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border hover:border-accent/50 group">
                  <CardHeader>
                    <div className="mb-4 p-3 rounded-lg bg-accent/10 w-fit group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
