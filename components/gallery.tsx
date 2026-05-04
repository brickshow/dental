'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export default function Gallery() {
  const gallery = [
    {
      id: 1,
      title: 'Treatment Room',
      category: 'Facilities',
      type: 'facility',
      image: '/gallery-1.jpg',
    },
    {
      id: 2,
      title: 'Modern Equipment',
      category: 'Technology',
      type: 'facility',
      image: '/gallery-2.jpg',
    },
    {
      id: 3,
      title: 'Patient Comfort Zone',
      category: 'Facilities',
      type: 'facility',
      image: '/gallery-3.jpg',
    },
    {
      id: 4,
      title: 'Professional Team',
      category: 'Our Staff',
      type: 'team',
      image: '/gallery-4.jpg',
    },
    {
      id: 5,
      title: 'Clinic Interiors',
      category: 'Facilities',
      type: 'facility',
      image: '/gallery-1.jpg',
    },
    {
      id: 6,
      title: 'Advanced Technology',
      category: 'Technology',
      type: 'facility',
      image: '/gallery-2.jpg',
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
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  }

  return (
    <section id="gallery" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
            Our Work & Facilities
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            Explore our state-of-the-art facilities and amazing smile transformations.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {gallery.map((galleryItem) => (
            <motion.div
              key={galleryItem.id}
              variants={item}
              className="group relative overflow-hidden rounded-2xl"
            >
              <Card className="h-64 md:h-80 border-border overflow-hidden cursor-pointer">
                <div className="relative w-full h-full overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={galleryItem.image}
                    alt={galleryItem.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center text-white">
                      <p className="font-semibold text-lg mb-2">{galleryItem.title}</p>
                      <p className="text-sm text-white/80">{galleryItem.category}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
