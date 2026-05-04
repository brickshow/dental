'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Dental Boulevard, Medical Center, MC 12345',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@smilepremium.com',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Fri: 9AM-6PM | Sat: 10AM-4PM',
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
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
            Contact Information
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            Reach out to us for appointments, inquiries, or any dental concerns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6">
          {/* Contact Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6 md:col-span-2 lg:col-span-1"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div key={index} variants={item}>
                  <Card className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border hover:border-accent/50">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground mt-1">
                          {info.content}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1 h-96 rounded-2xl overflow-hidden border border-border"
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl mb-4">🗺️</p>
                <p className="text-lg font-semibold text-primary">123 Dental Boulevard</p>
                <p className="text-sm text-muted-foreground mt-2">Medical Center, MC 12345</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Connect with us</p>
          <div className="flex justify-center gap-4">
            {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-12 h-12 rounded-lg bg-muted hover:bg-accent/10 transition-colors flex items-center justify-center text-foreground hover:text-accent font-semibold"
              >
                {social[0]}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
