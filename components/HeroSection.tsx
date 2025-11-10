'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, Cloud, Settings } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-secondary-100 via-secondary-200 to-primary-800 text-slate-100 relative isolate min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* <section id="demo" className="py-20 bg-secondary-200/60 text-slate-100"></section> */}
      {/* <Image
        src="/assets/back-no-text.jpg"
        alt="Tournament Manager background"
        fill
        className="object-cover"
        priority
      /> */}
      {/* <div className="absolute inset-0 bg-black/50" /> */}
      <div className="relative max-w-7xl mx-auto text-center text-white">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-16 h-16 mr-4">
              <Image
                src="/assets/LogoTM.png"
                alt="Tournament Manager Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Tournament Manager
            </h1>
          </div>
        </motion.div> */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl font-semibold text-white mb-8 max-w-4xl mx-auto leading-tight mt-6"
        >
         Organizza tornei, gestisci le classifiche stagionali, fai crescere la tua community.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full max-w-4xl h-96 mx-auto mt-4 rounded-xl overflow-hidden"
        >

          
          <Image
            src="/assets/TM-Banner.jpg"
            alt="Tournament Manager Banner"
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white mt-6 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Progetta tabelloni, coordina partecipanti e raccogli dati di prestazione in tempo reale, dalla pubblicazione del torneo alla fase post-partita.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a href="#features" className="btn-primary text-lg px-8 py-4 group inline-block">
            Scopri di più
            <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
          </a>
          {/* <button className="btn-secondary text-lg px-8 py-4">
            Richiedi una demo
          </button> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="card p-6 text-center">
            <div className="bg-primary-200/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-500/40">
              <Users className="w-8 h-8 text-primary-200" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Pieno supporto</h3>
            <p className="text-white/80">Americano, a gironi, eliminazione diretta. Ogni tipo di formato è possibile</p>
          </div>

          <div className="card p-6 text-center">
            <div className="bg-primary-200/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-500/40">
              <Cloud className="w-8 h-8 text-primary-200" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Raccolta dati</h3>
            <p className="text-white/80">Risultati inseriti da giocatori, arbitri e organizzatori con telemetria in tempo reale</p>
          </div>

          <div className="card p-6 text-center">
            <div className="bg-primary-200/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-500/40">
              <Settings className="w-8 h-8 text-primary-200" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Insights immediati</h3>
            <p className="text-white/80">Statistiche personalizzate per centri sportivi, arbitri e giocatori</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
