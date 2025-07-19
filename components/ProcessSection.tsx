'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Clock, Users, Award } from 'lucide-react'

const processSteps = [
  {
    number: '01',
    title: 'Konsultation & Design',
    description: 'Vi börjar med en djupgående diskussion om dina önskemål och behov. Vårt designteam skapar konceptförslag som matchar din vision.',
    icon: Users,
    duration: '1-2 dagar'
  },
  {
    number: '02',
    title: 'Material & Planering',
    description: 'Vi väljer de bästa materialen för ditt projekt och planerar varje steg för att säkerställa perfekt utförande.',
    icon: CheckCircle,
    duration: '2-3 dagar'
  },
  {
    number: '03',
    title: 'Professionell Applicering',
    description: 'Våra erfarna tekniker utför arbetet med precision och omsorg. Vi arbetar i kontrollerad miljö för bästa resultat.',
    icon: Award,
    duration: '1-5 dagar'
  },
  {
    number: '04',
    title: 'Kvalitetskontroll & Leverans',
    description: 'Noggrann inspektion och slutkontroll innan vi levererar ditt färdiga projekt. Garanti och efterservice ingår.',
    icon: Clock,
    duration: '1 dag'
  }
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 bg-background-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #556b2f 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
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
              Så Jobbar <span className="text-primary">Vi</span>
            </h2>
            <p className="text-xl md:text-2xl text-secondary max-w-4xl mx-auto leading-relaxed">
              En beprövad process som garanterar enastående resultat, från första idé till slutleverans.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="space-y-16">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="mb-6">
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                        className="inline-block text-8xl md:text-9xl font-display font-black text-primary/20"
                      >
                        {step.number}
                      </motion.span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-lg text-secondary leading-relaxed mb-6 max-w-lg">
                      {step.description}
                    </p>
                    
                    <div className="flex items-center justify-center lg:justify-start space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-primary font-semibold">
                        Tidsåtgång: {step.duration}
                      </span>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                    className="flex-shrink-0"
                  >
                    <div className="relative">
                      {/* Main Circle */}
                      <div className="w-48 h-48 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center relative overflow-hidden group">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="w-full h-full" style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                            backgroundSize: '20px 20px'
                          }} />
                        </div>
                        
                        {/* Icon */}
                        <Icon size={64} className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                        
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                      </div>

                      {/* Floating Elements */}
                      <motion.div
                        animate={{ 
                          y: [0, -10, 0],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          delay: index * 0.5 
                        }}
                        className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full opacity-60"
                      />
                      
                      <motion.div
                        animate={{ 
                          y: [0, 10, 0],
                          rotate: [0, -5, 0]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity,
                          delay: index * 0.3 
                        }}
                        className="absolute -bottom-2 -left-6 w-6 h-6 bg-primary-light rounded-full opacity-40"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Process Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 pt-16 border-t border-primary/20"
          >
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
                Genomsnittlig Projekttid
              </h3>
              
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  <span className="text-secondary">Mindre projekt: 3-5 dagar</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-primary-light rounded-full" />
                  <span className="text-secondary">Medelstora projekt: 1-2 veckor</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-secondary rounded-full" />
                  <span className="text-secondary">Stora projekt: 2-4 veckor</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-secondary mb-8">
              Redo att starta ditt projekt? Vi börjar med en kostnadsfri konsultation.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-primary hover:bg-primary-dark transition-all duration-300 px-12 py-4 text-white font-semibold rounded-none uppercase tracking-wide group"
            >
              <span className="group-hover:tracking-wider transition-all duration-300">
                Boka Konsultation
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
