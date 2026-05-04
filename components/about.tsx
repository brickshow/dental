'use client'

import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { label: 'Years of Excellence', value: '15+' },
    { label: 'Patients Treated', value: '5000+' },
    { label: 'Team Members', value: '8' },
    { label: 'Successful Cases', value: '12K+' },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            About Our Clinic
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
            Your Trusted Dental Partner
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            With over a decade of experience, we combine advanced dental technology with compassionate care to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-[500px]"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <img
                src="/dentist.jpg"
                alt="Modern Clinic Facilities"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Excellence in Dental Care
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our clinic is equipped with state-of-the-art technology and staffed with highly trained dental professionals. We believe in preventive care while delivering cosmetic and restorative treatments with precision.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every patient receives personalized treatment plans designed to achieve optimal oral health and a beautiful smile that lasts.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl bg-muted/50 border border-border hover:border-accent/50 transition-colors"
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
