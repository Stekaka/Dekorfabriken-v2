'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Marcus Andersson',
    title: 'Företagare',
    company: 'Andersson Transport AB',
    text: 'Otrolig kvalitet på folieringen av våra lastbilar. Hållbarheten har överträffat alla förväntningar och professionalism genom hela processen.',
    rating: 5,
    project: 'Helfoliering av fordonsflotta'
  },
  {
    id: 2,
    name: 'Sara Lindström',
    title: 'Restaurangägare',
    company: 'Bistro Elegance',
    text: 'Vår nya fasadskylt har verkligen lyft hela restaurangen. Elegant design och perfekt utförande. Kan varmt rekommendera Dekorfabriken.',
    rating: 5,
    project: 'LED-skylt och fönsterdekor'
  },
  {
    id: 3,
    name: 'Johan Eriksson',
    title: 'Bilentusiast',
    company: 'Privatperson',
    text: 'Min BMW fick en komplett transformation med mattsvart folie. Resultatet är helt fantastiskt och kvaliteten känns premium genom och genom.',
    rating: 5,
    project: 'Mattsvart fordonsfoliering'
  },
  {
    id: 4,
    name: 'Anna Petersson',
    title: 'Butikschef',
    company: 'Design Studio Petra',
    text: 'Perfekt glasfoliering av våra kontorslokaler. Snygg privacy-lösning som bibehåller ljuset. Professionellt team som levererar på tiden.',
    rating: 5,
    project: 'Glasfoliering kontorslokal'
  },
  {
    id: 5,
    name: 'Michael Johansson',
    title: 'Verkstadsägare',
    company: 'MJ Motors',
    text: 'Dekorfabriken hjälpte oss med dekor till våra servicebiler. Hög kvalitet, snabb leverans och fantastisk service. Kommer definitivt använda dem igen.',
    rating: 5,
    project: 'Företagsdekor servicebil'
  },
  {
    id: 6,
    name: 'Lisa Karlsson',
    title: 'Marknadsansvarig',
    company: 'Karlsson & Co',
    text: 'Imponerande arbete med våra kampanjfordon. Detaljnivån och färgmatchningen var perfekt. Ett riktigt professionellt team.',
    rating: 5,
    project: 'Kampanjdekor fordonsflotta'
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-6 md:py-12 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full opacity-30" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full opacity-40" />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary-light rounded-full opacity-20" />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-secondary rounded-full opacity-30" />
      </div>

      <div className="section-padding relative z-10">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6">
              Vad Säger Våra <span className="text-primary">Kunder</span>
            </h2>
            <p className="text-xl md:text-2xl text-secondary max-w-4xl mx-auto leading-relaxed">
              Läs vad våra nöjda kunder säger om kvaliteten, servicen och resultaten vi levererar.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-background-secondary border border-primary/20 p-8 h-full hover:border-primary/40 transition-all duration-500 relative overflow-hidden">
                  {/* Background Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Quote Icon */}
                    <div className="mb-6 flex justify-between items-start">
                      <Quote size={32} className="text-primary opacity-60" />
                      
                      {/* Stars */}
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="text-primary fill-current"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-secondary leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Project Info */}
                    <div className="mb-6 pt-4 border-t border-primary/20">
                      <p className="text-sm text-primary font-semibold uppercase tracking-wide">
                        Projekt: {testimonial.project}
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center space-x-4">
                      {/* Avatar Placeholder */}
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold group-hover:text-primary transition-colors duration-300">
                          {testimonial.name}
                        </h4>
                        <p className="text-secondary text-sm">
                          {testimonial.title}
                        </p>
                        <p className="text-primary text-sm font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect Line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 pt-16 border-t border-primary/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-4xl md:text-5xl font-display font-black text-primary mb-2"
                >
                  500+
                </motion.div>
                <p className="text-secondary font-semibold">Nöjda Kunder</p>
              </div>
              
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-4xl md:text-5xl font-display font-black text-primary mb-2"
                >
                  15+
                </motion.div>
                <p className="text-secondary font-semibold">År av Erfarenhet</p>
              </div>
              
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-4xl md:text-5xl font-display font-black text-primary mb-2"
                >
                  98%
                </motion.div>
                <p className="text-secondary font-semibold">Rekommendationsgrad</p>
              </div>
              
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="text-4xl md:text-5xl font-display font-black text-primary mb-2"
                >
                  24/7
                </motion.div>
                <p className="text-secondary font-semibold">Support</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-secondary mb-8">
              Redo att bli vår nästa nöjda kund?
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-primary hover:bg-primary-dark transition-all duration-300 px-12 py-4 text-white font-semibold rounded-none uppercase tracking-wide group"
            >
              <span className="group-hover:tracking-wider transition-all duration-300">
                Starta ditt projekt
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
