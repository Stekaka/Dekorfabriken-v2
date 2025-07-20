'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Tjänster', href: '#services' },
    { name: 'Projekt', href: '#gallery' },
    { name: 'Process', href: '#process' },
    { name: 'Om oss', href: '#about' },
    { name: 'Kontakt', href: '#contact' },
  ]

  // Smooth scroll function that accounts for navbar height
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const navHeight = 80 // Approximate navbar height
      const targetPosition = targetElement.offsetTop - navHeight
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
    
    // Close mobile menu if open
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-primary/20'
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding">
          <div className="container-custom">
            <div className="flex items-center justify-between py-6">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-display font-bold text-white"
              >
                DEKORFABRIKEN
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="text-white hover:text-primary transition-colors duration-300 font-medium cursor-pointer"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              {/* CTA Button & Mobile Menu */}
              <div className="flex items-center space-x-4">
                <motion.button
                  onClick={() => handleNavClick({ preventDefault: () => {} } as React.MouseEvent<HTMLAnchorElement>, '#contact')}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="hidden md:block bg-primary hover:bg-primary-dark transition-all duration-300 px-6 py-3 text-white font-semibold rounded-none uppercase tracking-wide"
                >
                  Få Offert
                </motion.button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden text-white p-2"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-md" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 bg-background-secondary border-l border-primary/20 p-8"
            >
              <div className="flex flex-col space-y-8 mt-20">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-xl text-white hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
                
                <div className="pt-8 border-t border-primary/20">
                  <button 
                    onClick={() => handleNavClick({ preventDefault: () => {} } as React.MouseEvent<HTMLAnchorElement>, '#contact')}
                    className="w-full bg-primary hover:bg-primary-dark transition-all duration-300 px-6 py-4 text-white font-semibold rounded-none uppercase tracking-wide mb-4"
                  >
                    Få Offert
                  </button>
                  
                  <div className="space-y-4">
                    <a href="tel:+46123456789" className="flex items-center space-x-3 text-secondary hover:text-white transition-colors">
                      <Phone size={20} />
                      <span>+46 123 456 789</span>
                    </a>
                    <a href="mailto:info@dekorfabriken.se" className="flex items-center space-x-3 text-secondary hover:text-white transition-colors">
                      <Mail size={20} />
                      <span>info@dekorfabriken.se</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky CTA Button */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: isScrolled ? 0 : 100,
          opacity: isScrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <button 
          onClick={() => {
            const contactSection = document.getElementById('contact')
            contactSection?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="bg-primary hover:bg-primary-dark transition-all duration-300 px-8 py-4 text-white font-bold rounded-full shadow-2xl hover:shadow-primary/25 group"
        >
          <span className="group-hover:scale-105 transition-transform duration-300 block">
            Kontakta oss
          </span>
        </button>
      </motion.div>
    </>
  )
}
