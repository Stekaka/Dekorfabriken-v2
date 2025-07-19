'use client'

import { motion } from 'framer-motion'
import { ArrowUp, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Fordonsdekor', href: '#services' },
      { name: 'Foliering', href: '#services' },
      { name: 'Skyltar', href: '#services' },
      { name: 'Dekaler & Vinyl', href: '#services' }
    ],
    company: [
      { name: 'Om oss', href: '#about' },
      { name: 'Våra projekt', href: '#gallery' },
      { name: 'Process', href: '#process' },
      { name: 'Kontakt', href: '#contact' }
    ],
    legal: [
      { name: 'Integritetspolicy', href: '/privacy' },
      { name: 'Användarvillkor', href: '/terms' },
      { name: 'Cookies', href: '/cookies' },
      { name: 'Garanti', href: '/warranty' }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/dekorfabriken', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/dekorfabriken', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/dekorfabriken', label: 'LinkedIn' }
  ]

  return (
    <footer className="bg-background border-t border-primary/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #556b2f 2%, transparent 0%), radial-gradient(circle at 75px 75px, #556b2f 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="section-padding relative z-10">
        <div className="container-custom">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2"
              >
                <h3 className="text-3xl font-display font-bold text-white mb-6">
                  DEKORFABRIKEN
                </h3>
                <p className="text-secondary leading-relaxed mb-8 max-w-md">
                  Sedan 2008 har vi levererat förstklassig foliering och dekor. 
                  Vår passion för perfektion och kvalitet gör oss till det självklara valet 
                  för ditt nästa projekt.
                </p>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-secondary">
                    <MapPin size={18} className="text-primary flex-shrink-0" />
                    <span>Industrivägen 12, 123 45 Stockholm</span>
                  </div>
                  <div className="flex items-center space-x-3 text-secondary">
                    <Phone size={18} className="text-primary flex-shrink-0" />
                    <a href="tel:+46123456789" className="hover:text-primary transition-colors duration-300">
                      +46 123 456 789
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-secondary">
                    <Mail size={18} className="text-primary flex-shrink-0" />
                    <a href="mailto:info@dekorfabriken.se" className="hover:text-primary transition-colors duration-300">
                      info@dekorfabriken.se
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h4 className="text-xl font-display font-bold text-white mb-6">
                  Tjänster
                </h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-secondary hover:text-primary transition-colors duration-300 flex items-center group"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h4 className="text-xl font-display font-bold text-white mb-6">
                  Företag
                </h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-secondary hover:text-primary transition-colors duration-300 flex items-center group"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="py-12 border-y border-primary/20"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h4 className="text-2xl font-display font-bold text-white mb-4">
                Håll dig uppdaterad
              </h4>
              <p className="text-secondary mb-8">
                Få de senaste nyheterna, projekten och erbjudandena direkt i din inkorg.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Din e-postadress"
                  className="flex-1 bg-background-secondary border border-primary/30 px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors duration-300"
                />
                <button 
                  onClick={() => {
                    // Newsletter signup functionality could be added here
                    alert('Tack för ditt intresse! Denna funktion kommer snart.')
                  }}
                  className="bg-primary hover:bg-primary-dark transition-all duration-300 px-8 py-3 text-white font-semibold uppercase tracking-wide"
                >
                  Prenumerera
                </button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Footer */}
          <div className="py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-secondary text-sm"
              >
                © {currentYear} Dekorfabriken. Alla rättigheter förbehållna.
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center space-x-4"
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-background-secondary border border-primary/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
                    >
                      <Icon size={18} className="text-secondary group-hover:text-primary transition-colors duration-300" />
                    </a>
                  )
                })}
              </motion.div>

              {/* Legal Links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap items-center space-x-6 text-sm"
              >
                {footerLinks.legal.map((link, index) => (
                  <span key={link.name} className="flex items-center">
                    <a
                      href={link.href}
                      className="text-secondary hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                    {index < footerLinks.legal.length - 1 && (
                      <span className="ml-6 text-primary/30">|</span>
                    )}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-24 right-6 w-12 h-12 bg-primary hover:bg-primary-dark transition-all duration-300 text-white flex items-center justify-center shadow-lg hover:shadow-xl z-50 group"
        aria-label="Scrolla till toppen"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
      </motion.button>
    </footer>
  )
}
