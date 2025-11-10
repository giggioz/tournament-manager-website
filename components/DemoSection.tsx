'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import Image from 'next/image'

const mockups = [
  {
    id: 'control-room',
    title: 'Control Room Torneo',
    description: 'Monitoraggio in tempo reale di round, ranking e stato partite',
    image: '/assets/Tournaments.jpg',
    features: ['Timeline stato partite', 'Gestione tabelloni dinamici', 'Workflow approvazione risultati']
  },
  {
    id: 'participant-hub',
    title: 'Leaderboard Partecipanti',
    description: 'Classifica aggiornata in tempo reale',
    image: '/assets/Leaderboard.jpg',
    features: ['Classifica live', 'Leaderboard stagionali', 'Leaderboard asiolute']
  },
  {
    id: 'match-operations',
    title: 'Calendario Match',
    description: 'Gestione completa della programmazione delle partite',
    image: '/assets/Schedule.jpg',
    features: ['Accoppiamenti automatici', 'Notifiche ai partecipanti', 'Gestione avanzata inserimento risultati  ']
  },
  {
    id: 'referee-console',
    title: 'Referee Console',
    description: 'Interfaccia dedicata agli arbitri con telemetria puntuale e controlli live',
    image: '/assets/TM-Banner.jpg',
    features: ['Input eventi azione per azione', 'Registro falli e time-out', 'Sincronizzazione risultati istantanea']
  },
  // {
  //   id: 'insights',
  //   title: 'Insights Center',
  //   description: 'Analytics su performance giocatori, tornei e centri sportivi',
  //   image: '/assets/Courses.jpg',
  //   features: ['Dashboard KPI personalizzata', 'Esportazioni CSV/BI', 'Trend di crescita abbonamenti']
  // }
]

export default function DemoSection() {
  const [currentMockup, setCurrentMockup] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentMockup((prev) => (prev + 1) % mockups.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  const nextMockup = () => {
    setCurrentMockup((prev) => (prev + 1) % mockups.length)
  }

  const prevMockup = () => {
    setCurrentMockup((prev) => (prev - 1 + mockups.length) % mockups.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextMockup()
    } else if (isRightSwipe) {
      prevMockup()
    }

    // Reset values
    touchStartX.current = 0
    touchEndX.current = 0
  }

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-secondary-100 via-secondary-200 to-primary-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Scopri <span className="">Tournament Manager</span> in azione
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Esperienze interattive pensate per coordinare tornei competitivi e generare insight immediati
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mockup Display */}
          <div className="relative">
            <div 
              className="relative bg-secondary-100/80 border border-white/10 rounded-2xl shadow-2xl overflow-hidden touch-manipulation backdrop-blur"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="bg-secondary-200/80 border-b border-white/10 px-4 py-3 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-sm text-slate-200">
                  {mockups[currentMockup].title}
                </div>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMockup}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="aspect-video overflow-hidden bg-secondary-100/60"
                >
                  {mockups[currentMockup].image.startsWith('/api/placeholder') ? (
                    <div className="w-full h-full bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                        <p className="text-gray-600 font-medium">
                          Mockup {mockups[currentMockup].title}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={mockups[currentMockup].image}
                      alt={mockups[currentMockup].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={prevMockup}
                onTouchEnd={(e) => {
                  e.preventDefault()
                  prevMockup()
                }}
                className="p-4 md:p-3 bg-secondary-100/80 border border-white/10 rounded-full shadow-lg hover:shadow-xl active:shadow-md transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation"
                style={{ minWidth: '48px', minHeight: '48px' }}
              >
                <ChevronLeft className="w-6 h-6 text-slate-100" />
              </button>
              
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                onTouchEnd={(e) => {
                  e.preventDefault()
                  setIsPlaying(!isPlaying)
                }}
                className="p-4 md:p-3 bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl active:shadow-md transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation"
                style={{ minWidth: '48px', minHeight: '48px' }}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6" />
                )}
              </button>
              
              <button
                onClick={nextMockup}
                onTouchEnd={(e) => {
                  e.preventDefault()
                  nextMockup()
                }}
                className="p-4 md:p-3 bg-secondary-100/80 border border-white/10 rounded-full shadow-lg hover:shadow-xl active:shadow-md transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation"
                style={{ minWidth: '48px', minHeight: '48px' }}
              >
                <ChevronRight className="w-6 h-6 text-slate-100" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {mockups.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMockup(index)}
                  onTouchEnd={(e) => {
                    e.preventDefault()
                    setCurrentMockup(index)
                  }}
                  className={`w-4 h-4 md:w-3 md:h-3 rounded-full transition-all duration-300 touch-manipulation ${
                    index === currentMockup
                      ? 'bg-primary-500 scale-125 shadow-lg'
                      : 'bg-secondary-100/70 hover:bg-secondary-100/90 active:bg-secondary-100'
                  }`}
                  style={{ minWidth: '20px', minHeight: '20px' }}
                />
              ))}
            </div>
            
            {/* Mobile swipe instruction */}
            <div className="lg:hidden mt-4 text-center">
              <p className="text-sm text-slate-300/80">
                👆 Scorri per navigare tra le immagini
              </p>
            </div>
          </div>

          {/* Feature Description */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMockup}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-secondary-200/30 border border-white/10 rounded-2xl p-8 shadow-xl backdrop-blur"
              >
                <h3 className="text-3xl font-bold text-slate-50 mb-4">
                  {mockups[currentMockup].title}
                </h3>
                <p className="text-lg text-slate-200 mb-8">
                  {mockups[currentMockup].description}
                </p>
                
                <div className="space-y-4">
                  {mockups[currentMockup].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 flex-shrink-0" />
                      <span className="text-slate-200">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <a 
                    href="#contact"
                    className="btn-primary text-lg px-8 py-4 inline-block"
                  >
                    Partecipa al programma pilota
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
