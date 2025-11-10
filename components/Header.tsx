'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Funzionalità', href: '#features' },
    { name: 'Ecosistema', href: '#demo' },
    { name: 'Contatti', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-secondary-100/95 backdrop-blur-xl shadow-lg border-b border-white/10 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/assets/LogoTM.png"
                alt="Tournament Manager Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl md:text-3xl font-bold drop-shadow-sm">
              Tournament Manager
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium transition-colors duration-300 text-slate-200 hover:text-primary-200"
                {...(item.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="btn-primary px-6 py-2 rounded-lg"
            >
              Unisciti al pilot
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors duration-300 text-slate-200 hover:bg-secondary-400/40"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-secondary-100/95 backdrop-blur-xl rounded-lg mt-2 shadow-xl border border-white/10"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-slate-200 font-medium hover:text-primary-200 transition-colors duration-300"
                {...(item.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <a
                href="#contact"
                className="w-full btn-primary px-6 py-3 rounded-lg inline-block text-center"
              >
              Unisciti al pilot
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}
