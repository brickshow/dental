'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', date: '', service: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  const services = [
    'Teeth Whitening',
    'Dental Implants',
    'Cosmetic Dentistry',
    'Braces & Orthodontics',
    'Root Canal Treatment',
    'Pediatric Dentistry',
    'Veneers',
    'Emergency Care',
  ]

  return (
    <section id="booking" className="py-20 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Schedule
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
            Book Your Appointment
          </h2>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            Choose a convenient time for your dental visit. We&apos;ll confirm your appointment shortly.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-muted/30 p-8 rounded-2xl border border-border"
        >
          {/* Success Message */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-accent/10 border border-accent/20 rounded-lg text-accent font-semibold"
            >
              ✓ Appointment request sent! We&apos;ll contact you shortly.
            </motion.div>
          )}

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <label htmlFor="name" className="text-sm font-semibold text-foreground">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-border bg-background hover:border-accent/50 focus:border-accent"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <label htmlFor="email" className="text-sm font-semibold text-foreground">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-border bg-background hover:border-accent/50 focus:border-accent"
              />
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border-border bg-background hover:border-accent/50 focus:border-accent"
              />
            </motion.div>

            {/* Date */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <label htmlFor="date" className="text-sm font-semibold text-foreground">
                Preferred Date
              </label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="border-border bg-background hover:border-accent/50 focus:border-accent"
              />
            </motion.div>

            {/* Service */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-2 md:col-span-2"
            >
              <label className="text-sm font-semibold text-foreground">
                Service Type
              </label>
              <Select value={formData.service} onValueChange={(value) => handleSelectChange('service', value)}>
                <SelectTrigger className="border-border bg-background hover:border-accent/50">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              viewport={{ once: true }}
              className="space-y-2 md:col-span-2"
            >
              <label htmlFor="message" className="text-sm font-semibold text-foreground">
                Additional Notes (Optional)
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about any concerns or preferences..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="border-border bg-background hover:border-accent/50 focus:border-accent resize-none"
              />
            </motion.div>
          </div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              type="submit"
              className="w-full py-6 text-base bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Book Appointment
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  )
}
