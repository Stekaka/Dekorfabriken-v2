'use client'

import { motion } from 'framer-motion'
import { Car, FileText, Signpost, Scissors } from 'lucide-react'

const services = [
  {
    icon: Car,
    title: 'Fordonsdekor',
    description: 'Professionell foliering av bilar, lastbilar och motorcyklar. Från subtila accenter till helomslående designtransformationer.',
    features: ['Helfoliering', 'Delfoliering', 'Reklamdekor', 'Skyddsfolie']
  },
  {
    icon: FileText,
    title: 'Foliering',
    description: 'Högkvalitativ foliering för alla ytor. Vi använder endast premiummaterial för maximal hållbarhet och perfekt finish.',
    features: ['Arkitekturfolie', 'Möbelfolie', 'Glasfolie', 'Fasadfolie']
  },
  {
    icon: Signpost,
    title: 'Skyltar',
    description: 'Skräddarsydda skyltar för företag och privatpersoner. Från diskreta skyltar till iögonfallande reklam.',
    features: ['Fasadskyltar', 'Trafikskyltar', 'Ljusskyltar', 'Digitaltryck']
  },
  {
    icon: Scissors,
    title: 'Dekaler & Vinyl',
    description: 'Precision-skurna dekaler och vinylgrafik. Perfekta detaljer för varje projekt, stor som liten.',
    features: ['Logotyper', 'Numrering', 'Etiketter', 'Specialformer']
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-6 md:py-12 bg-background-secondary">
      <div className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-black text-white mb-3 md:mb-4">
              Våra <span className="text-primary">Specialiteter</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-secondary max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
              Fyra kärnområden där vi levererar enastående kvalitet och precision.
              Varje projekt behandlas med samma omsorg och expertis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-background border border-primary/20 p-4 md:p-6 h-full hover:border-primary/40 transition-all duration-500 relative overflow-hidden">
                    {/* Background gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                          <Icon size={24} className="text-primary md:w-8 md:h-8" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-lg md:text-xl font-display font-bold text-white mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-secondary leading-relaxed mb-3 md:mb-4 text-sm">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.1) }}
                            className="flex items-center text-sm text-secondary group-hover:text-white transition-colors duration-300"
                          >
                            <div className="w-1 h-1 bg-primary rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-6 md:mt-10"
          >
            <p className="text-lg text-secondary mb-8">
              Behöver du hjälp att välja rätt lösning för ditt projekt?
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-primary hover:bg-primary-dark transition-all duration-300 px-10 py-4 text-white font-semibold rounded-none uppercase tracking-wide group"
            >
              <span className="group-hover:tracking-wider transition-all duration-300">
                Diskutera ditt projekt
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
