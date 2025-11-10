'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Users, 
  CreditCard, 
  BookOpen, 
  Calendar, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  ClipboardList,
  ChevronRight
} from 'lucide-react'

const features = [
  {
    id: 'tournaments',
    title: 'Regia Tornei',
    icon: Users,
    description: 'Format individuali e a squadre con gestione completa di round, gironi e tabelloni',
    details: [
      'Supporto per singoli e doppi.',
      'Supporto tornei all\'Americana per rotazioni automatiche',
      'Tornei a gironi con qualificazioni e fasi finali',
      'Tornei a eliminazione diretta'
    ]
  },
  {
    id: 'participants',
    title: 'Supporto per team',
    icon: CreditCard,
    description: 'Gestione di più team per ogni partecipante per far crescere la community',
    details: [
      'Sistema di inviti e creazione team',
      'Ruoli e permessi personalizzabili',
      'Profilazione giocatori con statistiche e storico match'
    ]
  },
  {
    id: 'matchflows',
    title: 'Inserimento Risultati',
    icon: BookOpen,
    description: 'Tre flussi coordinati per giocatori, arbitri e organizzatori con controlli in tempo reale',
    details: [
      'App dedicata per self-reporting post gara',
      'Console organizzatore per rettifiche e validazione dei risultati',
      'Pannello arbitro con telemetria live',
      'Tracciamento eventi: smash, errori, pallonetti, punti'
    ]
  },
  {
    id: 'scheduling',
    title: 'Calendario Match',
    icon: Calendar,
    description: "Programmazione delle partite con notifiche e sincronizzazione risorse", 
    details: [
      'Generazione automatica slot e side',
      'Monitor live stato match'
    ]
  },
  {
    id: 'communication',
    title: 'Leaderbord stagionali e assoluti',
    icon: MessageSquare,
    description: 'Un sistema di classifiche completo e con una forte presa sulla community',
    details: [
      'Classifiche assolute',
      'Classifiche stagionali',
      'Classifiche per team e individuali'
    ]
  },
  {
    id: 'analytics',
    title: 'Analytics Avanzate',
    icon: BarChart3,
    description: 'Dashboard insight per centri sportivi con focus su performance e abbonamenti',
    details: [
      'Metriche su standing e risultati',
      'Report centro sportivo con KPI personalizzati'
    ]
  },
  // {
  //   id: 'operations',
  //   title: 'Operazioni Semplificate',
  //   icon: ClipboardList,
  //   description: 'Tooling DevOps con Docker, PM2 e ambienti multipli per rollout rapidi',
  //   details: [
  //     'Stack server+client pronto al deploy',
  //     'Script docker-compose per servizi core',
  //     'Pipeline PM2 staging/production',
  //     'Test end-to-end su Node e React'
  //   ]
  // }
]

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState('tournaments')

  const handleFeatureChange = (featureId: string) => {
    setActiveFeature(featureId)
  }

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-secondary-100 via-secondary-200 to-primary-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Un mondo di funzionalità.
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Un centro di controllo per organizzare i tuoi tornei in modo moderno, dinamico e con un occhio puntato alla crescita dei tuoi clienti.
          </p>
        </motion.div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden lg:grid grid-cols-4 gap-8">
          {/* Tabs Navigation */}
          <div className="col-span-1">
            <div className="space-y-2">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center group ${
                      activeFeature === feature.id
                        ? 'bg-primary-600/90 text-white shadow-xl'
                        : 'bg-secondary-200/40 hover:bg-secondary-200/60 text-slate-200 border border-white/5'
                    }`}
                  >
                    <Icon className={`w-5 h-5 mr-3 ${
                      activeFeature === feature.id ? 'text-white' : 'text-primary-200'
                    }`} />
                    <span className="font-medium">{feature.title}</span>
                    <ChevronRight className={`w-4 h-4 ml-auto transition-transform ${
                      activeFeature === feature.id ? 'rotate-90' : 'group-hover:translate-x-1'
                    }`} />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Feature Content */}
          <div className="col-span-3">
            <AnimatePresence mode="wait">
              {features.map((feature) => {
                if (feature.id !== activeFeature) return null
                const Icon = feature.icon
                
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="card p-8 h-full"
                  >
                    <div className="flex items-start mb-6">
                      <div className="bg-primary-200/20 p-3 rounded-xl mr-4 border border-primary-500/40">
                        <Icon className="w-8 h-8 text-primary-200" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-50 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-slate-200 text-lg">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-slate-50 mb-4">
                        Caratteristiche principali:
                      </h4>
                      {feature.details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center text-slate-200"
                        >
                          <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 flex-shrink-0" />
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Layout - Accordion style */}
        <div className="lg:hidden space-y-4">
          {features.map((feature) => {
            const Icon = feature.icon
            const isActive = activeFeature === feature.id
            
            return (
              <div key={feature.id} className="bg-secondary-200/40 rounded-xl shadow-lg overflow-hidden border border-white/10">
                <button
                  onClick={() => handleFeatureChange(feature.id)}
                  onTouchEnd={(e) => {
                    e.preventDefault()
                    handleFeatureChange(feature.id)
                  }}
                  className={`w-full text-left p-5 transition-all duration-300 flex items-center group touch-manipulation ${
                    isActive
                      ? 'bg-primary-600/90 text-white'
                      : 'bg-secondary-200/60 hover:bg-secondary-200/80 active:bg-secondary-200 text-slate-200'
                  }`}
                  style={{ minHeight: '60px' }}
                >
                  <Icon className={`w-6 h-6 mr-4 ${
                    isActive ? 'text-white' : 'text-primary-200'
                  }`} />
                  <span className="font-semibold text-lg flex-1">{feature.title}</span>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    isActive ? 'rotate-90' : 'group-hover:translate-x-1'
                  }`} />
                </button>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-secondary-200/40 border-t border-white/10">
                        <div className="flex items-start mb-6">
                          <div className="bg-primary-200/20 p-3 rounded-xl mr-4 border border-primary-500/40">
                            <Icon className="w-8 h-8 text-primary-200" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-50 mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-slate-200">
                              {feature.description}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-slate-50 mb-4">
                            Caratteristiche principali:
                          </h4>
                          {feature.details.map((detail, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="flex items-center text-gray-700"
                            >
                              <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0" />
                              {detail}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
