'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, CheckCircle } from 'lucide-react'

const benefits = [
  'Setup del sistema Tournament Manager gratuito con staff dedicato',
  'Integrazione flussi arbitri e organizzatori',
  'Formazione dedicata per il tuo staff',
  'Dashboard di insight personalizzata',
  'Utilizzo di tutte le funzionalità premium per l\'intera durata del pilot (3 mesi)',
]

export default function CTASection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary-100 via-secondary-200 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-slate-100"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Porta il tuo torneo{' '}
            <span className="text-accent-300">al livello pro</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Stiamo selezionando centri padel di Roma per il programma pilota gratuito: risultati in campo, dati in cloud.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 text-accent-300">
                Che cosa otterrai con il pilot:
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-6 h-6 text-accent-300 mr-3 flex-shrink-0" />
                    <span className="text-lg text-slate-200">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 text-accent-300">
                Candidati al pilot:
              </h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:infinitymundi.publishing@gmail.com"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center text-lg text-slate-200 hover:text-accent-300 transition-colors duration-300 group"
                >
                  <Mail className="w-6 h-6 mr-3 text-accent-300 group-hover:scale-110 transition-transform" />
                  infinitymundi.publishing@gmail.com
                </motion.a>
                
                <motion.a
                  href="tel:+393384291451"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center text-lg text-slate-200 hover:text-accent-300 transition-colors duration-300 group"
                >
                  <Phone className="w-6 h-6 mr-3 text-accent-300 group-hover:scale-110 transition-transform" />
                  +39 338 429 1451
                </motion.a>
                
                <motion.a
                  href="https://wa.me/393384291451?text=Ciao,%20sono%20interessato%20al%20programma%20pilota%20di%20Tournament%20Manager"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center text-lg text-slate-200 hover:text-accent-300 transition-colors duration-300 group"
                >
                  <MessageCircle className="w-6 h-6 mr-3 text-accent-300 group-hover:scale-110 transition-transform" />
                  WhatsApp
                </motion.a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="mailto:infinitymundi.publishing@gmail.com?subject=Candidatura%20programma%20pilota%20Tournament%20Manager"
              className="bg-accent-400 hover:bg-accent-500 text-secondary-100 font-bold text-xl px-8 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center min-w-[240px]"
            >
              <Mail className="w-6 h-6 mr-3" />
              Contattaci via email
            </a>
            <a
              href="https://wa.me/393384291451?text=Ciao,%20sono%20interessato%20al%20programma%20pilota%20di%20Tournament%20Manager"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebe5d] text-secondary-100 font-bold text-xl px-8 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center min-w-[240px]"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Contattaci su WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
