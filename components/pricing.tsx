'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export default function Pricing() {
  const pricingPlans = [
    {
      id: 1,
      name: 'Basic Dental Care',
      description: 'Perfect for routine checkups and maintenance',
      price: '₱5,500',
      period: 'per visit',
      features: [
        'Professional teeth cleaning',
        'Oral examination',
        'X-ray imaging',
        'Fluoride treatment',
        'Dental health advice',
      ],
      highlight: false,
    },
    {
      id: 2,
      name: 'Premium Smile',
      description: 'Comprehensive care with cosmetic enhancements',
      price: '₱16,700',
      period: 'per treatment',
      features: [
        'All Basic Care services',
        'Teeth whitening (professional)',
        'Composite resin fillings',
        'Cavity detection (laser)',
        'Custom treatment plan',
        'Priority scheduling',
      ],
      highlight: true,
    },
    {
      id: 3,
      name: 'Advanced Treatment',
      description: 'Complex procedures and restorative work',
      price: '₱33,500',
      period: 'per treatment',
      features: [
        'All Premium services',
        'Dental implants consultation',
        'Root canal treatment',
        'Crown/Bridge work',
        'Orthodontic evaluation',
        'Advanced sedation options',
        'Follow-up care included',
      ],
      highlight: false,
    },
  ]

  const servicesPricing = [
    { service: 'Teeth Whitening', price: '₱8,400-₱16,800' },
    { service: 'Dental Implants', price: '₱67,200-₱100,800' },
    { service: 'Veneers (per tooth)', price: '₱44,800-₱84,000' },
    { service: 'Braces/Orthodontics', price: '₱168,000-₱392,000' },
    { service: 'Root Canal Treatment', price: '₱44,800-₱67,200' },
    { service: 'Professional Cleaning', price: '₱4,200-₱8,400' },
    { service: 'Fillings', price: '₱5,600-₱16,800' },
    { service: 'Emergency Care', price: '₱8,400-₱28,000' },
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
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            High-quality dental care at competitive prices. No hidden fees, just honest pricing.
          </p>
        </motion.div>

        {/* Pricing Plans */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {pricingPlans.map((plan) => (
            <motion.div key={plan.id} variants={item}>
              <Card
                className={`relative h-full flex flex-col transition-all duration-300 ${
                  plan.highlight
                    ? 'border-primary shadow-lg md:scale-105 md:shadow-2xl'
                    : 'hover:shadow-lg'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-foreground">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  {/* Price */}
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-primary mb-1">
                      {plan.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {plan.period}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full ${
                      plan.highlight
                        ? 'bg-primary hover:bg-primary/90 text-white'
                        : 'border border-primary text-primary hover:bg-primary/10'
                    }`}
                    variant={plan.highlight ? 'default' : 'outline'}
                  >
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-8 text-foreground">
              Service Pricing Guide
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {servicesPricing.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center p-4 bg-background rounded-lg border border-border"
                >
                  <span className="font-medium text-foreground">{item.service}</span>
                  <span className="text-primary font-semibold">{item.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-primary/5 rounded-lg p-8 border border-primary/20"
        >
          <h3 className="text-2xl font-bold mb-6 text-foreground">
            Insurance & Payment Info
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-foreground">
            <div>
              <h4 className="font-semibold mb-2 text-primary">We Accept</h4>
              <ul className="space-y-2 text-sm">
                <li>✓ Most major insurance plans</li>
                <li>✓ Cash and debit payments</li>
                <li>✓ Credit cards (all types)</li>
                <li>✓ Medical financing options</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">Payment Plans</h4>
              <ul className="space-y-2 text-sm">
                <li>✓ Monthly installment plans available</li>
                <li>✓ Zero-interest financing</li>
                <li>✓ Insurance pre-authorization</li>
                <li>✓ Flexible scheduling options</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
