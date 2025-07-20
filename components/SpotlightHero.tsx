'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'


export default function SpotlightHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [isHovering, setIsHovering] = useState(false)
  
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePosition({ x, y })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseenter', () => setIsHovering(true))
      container.addEventListener('mouseleave', () => setIsHovering(false))
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseenter', () => setIsHovering(true))
        container.removeEventListener('mouseleave', () => setIsHovering(false))
      }
    }
  }, [])

  return (
    <motion.section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden spotlight-container"
      style={{ y, opacity }}
    >
      {/* Background layer - ren mörk miljö */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-slate-900 to-black">
        {/* Subtila partiklar i luften */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Spotlight effect med light rays */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ 
          opacity: isHovering ? 1 : 0,
          filter: 'blur(0.3px) brightness(1.2) contrast(1.1)' // Reduced bloom effect
        }}
      >
        {/* Light rays från spotlighten - DÄMPAD */}
        <div
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from 0deg at ${mousePosition.x}% ${mousePosition.y}%, 
              transparent 0deg, 
              rgba(255, 255, 255, 0.18) 30deg, 
              transparent 60deg, 
              rgba(255, 255, 255, 0.12) 90deg, 
              transparent 120deg,
              rgba(255, 255, 255, 0.18) 150deg,
              transparent 180deg,
              rgba(255, 255, 255, 0.12) 210deg,
              transparent 240deg,
              rgba(255, 255, 255, 0.18) 270deg,
              transparent 300deg,
              rgba(255, 255, 255, 0.12) 330deg,
              transparent 360deg)`
          }}
        />
        
        {/* Huvudspotlight - som en strålkastare - DÄMPAD */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(
              ellipse 900px 1200px at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(255, 255, 255, 0.50) 0%,
              rgba(255, 255, 255, 0.35) 15%,
              rgba(255, 255, 255, 0.22) 30%,
              rgba(255, 255, 255, 0.15) 50%,
              rgba(255, 255, 255, 0.08) 70%,
              rgba(255, 255, 255, 0.02) 85%,
              transparent 95%
            )`,
          }}
        />
        
        {/* Intensiv centrum av spotlight - DÄMPAD */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(
              circle 400px at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(255, 255, 255, 0.58) 0%,
              rgba(255, 255, 255, 0.42) 20%,
              rgba(255, 255, 255, 0.28) 40%,
              rgba(255, 255, 255, 0.15) 60%,
              rgba(255, 255, 255, 0.06) 80%,
              transparent 95%
            )`,
          }}
        />
      </div>

      {/* Spotlight glow effect - som en riktig strålkastare - DÄMPAD */}
      {isHovering && (
        <>
          {/* Yttre ljuskägla - DÄMPAD */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(
                ellipse 1600px 1800px at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(255, 255, 255, 0.15) 0%,
                rgba(255, 255, 255, 0.11) 15%,
                rgba(255, 255, 255, 0.08) 30%,
                rgba(255, 255, 255, 0.05) 50%,
                rgba(255, 255, 255, 0.02) 70%,
                rgba(255, 255, 255, 0.01) 85%,
                transparent 95%
              )`,
              filter: 'blur(0.8px) brightness(1.2)' // Reduced bloom
            }}
          />
          
          {/* Mellersta ljuskägla - DÄMPAD */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(
                ellipse 1000px 1200px at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(255, 255, 255, 0.28) 0%,
                rgba(255, 255, 255, 0.20) 15%,
                rgba(255, 255, 255, 0.14) 30%,
                rgba(255, 255, 255, 0.09) 50%,
                rgba(255, 255, 255, 0.04) 70%,
                transparent 85%
              )`,
              filter: 'blur(0.4px) brightness(1.1)'
            }}
          />
          
          {/* Inre ljuskärna - DÄMPAD */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(
                circle 350px at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(255, 255, 255, 0.55) 0%,
                rgba(255, 255, 255, 0.38) 20%,
                rgba(255, 255, 255, 0.26) 40%,
                rgba(255, 255, 255, 0.15) 60%,
                rgba(255, 255, 255, 0.06) 80%,
                transparent 90%
              )`,
              filter: 'brightness(1.15)'
            }}
          />
          
          {/* Dramatiska ljusstrålar - DÄMPAD */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `conic-gradient(from 0deg at ${mousePosition.x}% ${mousePosition.y}%, 
                transparent 0deg, 
                rgba(255, 255, 255, 0.22) 15deg,
                transparent 30deg,
                rgba(255, 255, 255, 0.16) 45deg,
                transparent 60deg,
                rgba(255, 255, 255, 0.20) 75deg,
                transparent 90deg,
                rgba(255, 255, 255, 0.15) 105deg,
                transparent 120deg,
                rgba(255, 255, 255, 0.22) 135deg,
                transparent 150deg,
                rgba(255, 255, 255, 0.16) 165deg,
                transparent 180deg,
                rgba(255, 255, 255, 0.20) 195deg,
                transparent 210deg,
                rgba(255, 255, 255, 0.15) 225deg,
                transparent 240deg,
                rgba(255, 255, 255, 0.22) 255deg,
                transparent 270deg,
                rgba(255, 255, 255, 0.16) 285deg,
                transparent 300deg,
                rgba(255, 255, 255, 0.20) 315deg,
                transparent 330deg,
                rgba(255, 255, 255, 0.15) 345deg,
                transparent 360deg
              )`,
              maskImage: `radial-gradient(
                ellipse 1000px 1200px at ${mousePosition.x}% ${mousePosition.y}%, 
                black 0%, 
                transparent 65%
              )`,
              WebkitMaskImage: `radial-gradient(
                ellipse 1000px 1200px at ${mousePosition.x}% ${mousePosition.y}%, 
                black 0%, 
                transparent 65%
              )`,
              filter: 'brightness(1.05)'
            }}
          />
          
          {/* Extra stark central glow - DÄMPAD */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(
                circle 150px at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(255, 255, 255, 0.65) 0%,
                rgba(255, 255, 255, 0.48) 15%,
                rgba(255, 255, 255, 0.32) 30%,
                rgba(255, 255, 255, 0.18) 50%,
                rgba(255, 255, 255, 0.09) 70%,
                transparent 85%
              )`,
              filter: 'blur(0.2px) brightness(1.3)'
            }}
          />
          
          {/* Ultra intensiv kärna - DÄMPAD */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(
                circle 80px at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(255, 255, 255, 0.70) 0%,
                rgba(255, 255, 255, 0.52) 25%,
                rgba(255, 255, 255, 0.32) 50%,
                rgba(255, 255, 255, 0.15) 75%,
                transparent 90%
              )`,
              filter: 'blur(0.1px) brightness(1.35)'
            }}
          />
        </>
      )}



      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tight text-gradient"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Precision.<br />
              Kvalité.<br />
              <span className="text-primary">Extremt hållbart.</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-secondary font-light max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Foliering & dekor i toppklass – från fordon till fasad.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="pt-8"
            >
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  if (contactSection) {
                    const navHeight = 80 // Account for navbar height
                    const targetPosition = contactSection.offsetTop - navHeight
                    window.scrollTo({
                      top: targetPosition,
                      behavior: 'smooth'
                    })
                  }
                }}
                className="group relative px-12 py-4 bg-primary hover:bg-primary-dark transition-all duration-300 rounded-none text-white font-semibold text-lg tracking-wide uppercase overflow-hidden"
              >
                <span className="relative z-10">Få Prisförslag</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.section>
  )
}
