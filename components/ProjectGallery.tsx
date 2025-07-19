'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  category: string
  beforeImage: string
  afterImage: string
  description: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'BMW M3 - Mattsvart Foliering',
    category: 'Fordonsdekor',
    beforeImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1494976688381-233a79f21e47?w=600&h=400&fit=crop',
    description: 'Komplett transformation från glansig silver till djup mattsvart finish med kolfiber-detaljer.'
  },
  {
    id: 2,
    title: 'Tesla Model 3 - Militärgrön Matt',
    category: 'Fordonsdekor',
    beforeImage: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop',
    description: 'Exklusiv militärgrön mattfoliering med matchande detaljer och keramisk skyddsfilm.'
  },
  {
    id: 3,
    title: 'Mercedes Sprinter Företagsdekor',
    category: 'Fordonsdekor',
    beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    description: 'Professionell helomslående dekor med logotyp och kontaktinformation i företagsprofil.'
  },
  {
    id: 4,
    title: 'Porsche 911 - Karbon Wrap',
    category: 'Fordonsdekor',
    beforeImage: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop',
    description: 'Exklusiv kolfiber-foliering med 3D-textur för ultimate prestanda-känsla.'
  },
  {
    id: 5,
    title: 'Kontorslokal Glasfoliering',
    category: 'Foliering',
    beforeImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop',
    description: 'Privacy-folie med företagets grafiska profil för moderna kontorslokaler.'
  },
  {
    id: 6,
    title: 'Restaurang Fasadskylt',
    category: 'Skyltar',
    beforeImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
    description: 'Modern LED-skylt med elegant typografi och diskret belysning för premiummiljö.'
  },
  {
    id: 7,
    title: 'Range Rover Evoque - Chrome Delete',
    category: 'Fordonsdekor',
    beforeImage: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?w=600&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1544788187-4d4edef55f9a?w=600&h=400&fit=crop',
    description: 'Elegant chrome delete med mattsvart finish för diskret lyxkänsla.'
  },
  {
    id: 8,
    title: 'Butik Fönsterdekor',
    category: 'Dekaler',
    beforeImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
    description: 'Attraktiv fönsterdekor som lockar kunder medan den bevarar naturligt ljus.'
  },
  {
    id: 9,
    title: 'Lamborghini Huracán - Neon Accent',
    category: 'Fordonsdekor',
    beforeImage: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=600&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    description: 'Spektakulär neon-foliering med färgskiftande effekt för maximal uppmärksamhet.'
  }
]

const categories = ['Alla', 'Fordonsdekor', 'Skyltar', 'Foliering', 'Dekaler']

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState('Alla')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = activeCategory === 'Alla' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="gallery" className="py-6 md:py-12 bg-background">
      <div className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 md:mb-10"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-black text-white mb-3 md:mb-4">
              Våra <span className="text-primary">Projekt</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-secondary max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
              Se transformationerna vi skapat. Varje projekt visar vår passion för perfektion.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-10"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold transition-all duration-300 border ${
                  activeCategory === category
                    ? 'bg-primary text-white border-primary'
                    : 'text-secondary hover:text-white border-primary/30 hover:border-primary/60'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Project Grid - Show only 6 on mobile, all on desktop */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          >
            {/* Show only first 6 projects on mobile */}
            {filteredProjects.slice(0, 6).map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden bg-background-secondary border border-primary/20 hover:border-primary/40 transition-all duration-500">
                  {/* Image Container with Before/After Effect */}
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    {/* Before Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={project.beforeImage}
                        alt={`${project.title} - före`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 text-white text-sm font-semibold rounded">
                        FÖRE
                      </div>
                    </div>
                    
                    {/* After Image - Reveals on hover */}
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 1 : 0
                      }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                      <Image
                        src={project.afterImage}
                        alt={`${project.title} - efter`}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 right-4 bg-primary px-3 py-1 text-white text-sm font-semibold rounded">
                        EFTER
                      </div>
                    </motion.div>

                  </div>

                  {/* Project Details */}
                  <div className="p-3 md:p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-primary text-sm font-semibold uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-base md:text-lg font-display font-bold text-white mb-1 md:mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-secondary text-xs md:text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Show remaining projects only on md+ screens */}
          <motion.div
            layout
            className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-4 md:mt-6 lg:mt-8"
          >
            {filteredProjects.slice(6).map((project, index) => (
              <motion.div
                key={`additional-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden bg-background-secondary border border-primary/20 hover:border-primary/40 transition-all duration-500">
                  {/* Image Container with Before/After Effect */}
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    {/* Before Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={project.beforeImage}
                        alt={`${project.title} - före`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 text-white text-sm font-semibold rounded">
                        FÖRE
                      </div>
                    </div>
                    
                    {/* After Image - Reveals on hover */}
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 1 : 0
                      }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                      <Image
                        src={project.afterImage}
                        alt={`${project.title} - efter`}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 right-4 bg-primary px-3 py-1 text-white text-sm font-semibold rounded">
                        EFTER
                      </div>
                    </motion.div>

                  </div>

                  {/* Project Details */}
                  <div className="p-3 md:p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-primary text-sm font-semibold uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-base md:text-lg font-display font-bold text-white mb-1 md:mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-secondary text-xs md:text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-6 md:mt-10"
          >
            <p className="text-lg text-secondary mb-8">
              Vill du se fler exempel eller diskutera ditt eget projekt?
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-primary hover:bg-primary-dark transition-all duration-300 px-10 py-4 text-white font-semibold rounded-none uppercase tracking-wide group"
            >
              <span className="group-hover:tracking-wider transition-all duration-300">
                Kontakta oss
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
