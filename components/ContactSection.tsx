'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-6 md:py-8 bg-background-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(30deg, #556b2f 12%, transparent 12.5%, transparent 87%, #556b2f 87.5%, #556b2f), linear-gradient(150deg, #556b2f 12%, transparent 12.5%, transparent 87%, #556b2f 87.5%, #556b2f), linear-gradient(30deg, #556b2f 12%, transparent 12.5%, transparent 87%, #556b2f 87.5%, #556b2f), linear-gradient(150deg, #556b2f 12%, transparent 12.5%, transparent 87%, #556b2f 87.5%, #556b2f)`,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
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
            className="text-center mb-6 md:mb-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-black text-white mb-3 md:mb-4">
              Låt Oss <span className="text-primary">Prata</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-secondary max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
              Redo att förverkliga din vision? Kontakta oss för en kostnadsfri konsultation och offert.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-background border border-primary/20 p-8 hover:border-primary/40 transition-all duration-500">
                <h3 className="text-2xl font-display font-bold text-white mb-8">
                  Skicka oss ett meddelande
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-secondary font-semibold mb-2">
                      Namn *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-background-secondary border border-primary/30 px-3 py-2 text-white focus:border-primary focus:outline-none transition-colors duration-300 text-sm"
                      placeholder="Ditt fullständiga namn"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-secondary font-semibold mb-2">
                      E-post *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-background-secondary border border-primary/30 px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors duration-300"
                      placeholder="din@email.se"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-secondary font-semibold mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-background-secondary border border-primary/30 px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors duration-300"
                      placeholder="+46 123 456 789"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-secondary font-semibold mb-2">
                      Tjänst
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-background-secondary border border-primary/30 px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Välj tjänst</option>
                      <option value="fordonsdekor">Fordonsdekor</option>
                      <option value="foliering">Foliering</option>
                      <option value="skyltar">Skyltar</option>
                      <option value="dekaler">Dekaler & Vinyl</option>
                      <option value="annat">Annat</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-secondary font-semibold mb-2">
                      Meddelande *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-background-secondary border border-primary/30 px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Berätta om ditt projekt..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary hover:bg-primary-dark transition-all duration-300 px-8 py-4 text-white font-semibold uppercase tracking-wide flex items-center justify-center space-x-3 group"
                  >
                    <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Skicka Meddelande</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-8">
                  Kontaktinformation
                </h3>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Adress</h4>
                      <p className="text-secondary">
                        Industrivägen 12<br />
                        123 45 Stockholm<br />
                        Sverige
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Telefon</h4>
                      <a href="tel:+46123456789" className="text-secondary hover:text-primary transition-colors duration-300">
                        +46 123 456 789
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">E-post</h4>
                      <a href="mailto:info@dekorfabriken.se" className="text-secondary hover:text-primary transition-colors duration-300">
                        info@dekorfabriken.se
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Öppettider</h4>
                      <div className="text-secondary space-y-1">
                        <p>Mån-Fre: 08:00 - 17:00</p>
                        <p>Lördag: 09:00 - 15:00</p>
                        <p>Söndag: Stängt</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-background border border-primary/20 p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-primary mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">Hitta till oss</h4>
                  <p className="text-secondary">Interaktiv karta kommer här</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Emergency Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-16 border-t border-primary/20 text-center"
          >
            <h3 className="text-xl font-display font-bold text-white mb-4">
              Akuta uppdrag eller bråttom?
            </h3>
            <p className="text-secondary mb-6">
              Vi erbjuder akuttjänster för brådskande projekt. Ring oss direkt för omedelbar hjälp.
            </p>
            <a
              href="tel:+46123456789"
              className="inline-flex items-center space-x-3 bg-secondary hover:bg-secondary-dark transition-all duration-300 px-8 py-4 text-background font-semibold rounded-none uppercase tracking-wide"
            >
              <Phone size={20} />
              <span>Ring Nu: +46 123 456 789</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
