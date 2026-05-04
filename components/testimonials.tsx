'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Jessica Brown',
      role: 'Patient',
      content: 'SmilePremium transformed my smile completely. The dentists are incredibly professional and made me feel comfortable throughout the entire process.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Robert Johnson',
      role: 'Patient',
      content: 'Best dental experience of my life. The clinic is so clean and modern, and the pain-free treatment is absolutely true!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Amanda Martinez',
      role: 'Patient',
      content: 'I was nervous about getting implants, but Dr. Wilson made the whole process smooth and painless. Highly recommended!',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Lee',
      role: 'Patient',
      content: 'The staff at SmilePremium is amazing. They genuinely care about your dental health and overall experience.',
      rating: 5,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            Real stories from patients who have experienced our exceptional dental care.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={item}>
              <Card className="h-full backdrop-blur-sm border-border/50 bg-gradient-to-br from-white/80 to-muted/20">
                <CardContent className="p-6 flex flex-col h-full justify-between">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed mb-6 flex-grow">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-border/50 pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-sm border-border/50 bg-gradient-to-br from-white/80 to-muted/20">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 text-lg">
                  "{testimonials[activeIndex].content}"
                </p>
                <div className="border-t border-border/50 pt-4">
                  <p className="font-semibold text-foreground">{testimonials[activeIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex ? 'bg-accent w-8' : 'bg-border'
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
