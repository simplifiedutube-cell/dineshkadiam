import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Navigation Links
  const navLinks = ['Work', 'Services', 'About', 'Insights', 'Contact']

  // Entrance Motion Variants
  const logoVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  const navLinkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (idx) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.1 + idx * 0.05,
      },
    }),
  }

  const navCtaVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
  }

  const heroContentVariants = {
    hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3,
      },
    },
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-dark-bg text-white overflow-hidden select-none">
      
      {/* 3.1 Background Layer */}
      <div className="absolute inset-0 z-0 bottom-[-360px] overflow-hidden pointer-events-none">
        <video
          src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/floating_flowers.mp4"
          playsInline
          muted
          loop
          autoPlay
          className="w-full h-full object-cover object-bottom opacity-35"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90" />
      </div>

      {/* 3.2 Header Navigation */}
      <header className="relative z-20 w-full mx-auto max-w-[1400px]">
        <div className="flex items-center justify-between px-6 md:px-12 py-8 w-full">
          {/* Logo (Left) */}
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-full h-full text-gold group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                <path d="M4.5 4.5L19.5 19.5" strokeLinecap="round" />
                <path d="M19.5 4.5L14 10" strokeLinecap="round" />
                <path d="M10 14L4.5 19.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-sans text-sm font-semibold tracking-[0.2em] text-[#fdfbf6]">
              SOCIETY
            </span>
          </motion.div>

          {/* Desktop Links (Center) */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                custom={idx}
                variants={navLinkVariants}
                initial="hidden"
                animate="visible"
                className="font-sans text-[11px] font-medium tracking-[0.15em] text-white/70 uppercase transition-colors duration-300 hover:text-white"
              >
                {link}
              </motion.a>
            ))}
          </nav>

          {/* Primary CTA (Right) */}
          <motion.div
            variants={navCtaVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:block"
          >
            <a
              href="#contact"
              className="group flex items-center gap-1.5 px-6 py-2.5 rounded-full border border-white/20 bg-transparent backdrop-blur-sm font-sans text-[11px] font-bold tracking-[0.15em] text-white uppercase transition-all duration-300 hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              START A PROJECT
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </motion.div>

          {/* Mobile Menu Icon (Right) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Navigation Menu"
              className="text-white/70 hover:text-white transition-colors duration-300 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Interactive Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center gap-8 md:hidden"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Navigation Menu"
              className="absolute top-8 right-6 text-white/70 hover:text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans text-sm font-medium tracking-[0.2em] text-white/70 hover:text-white uppercase transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 flex items-center gap-1.5 px-6 py-3 rounded-full bg-gold text-black font-sans text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-gold-hover transition-colors duration-300"
              >
                START A PROJECT
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3.3 Hero Content Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pb-10">
        <motion.div
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl space-y-5 flex flex-col items-center justify-center"
        >
          {/* Hero Subtitle (Kicker) */}
          <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-gold uppercase">
            BRAND. DIGITAL. EXPERIENCE.
          </span>

          {/* Hero H1 */}
          <div className="overflow-hidden py-1">
            <h1 className="font-serif font-medium tracking-tight text-[#fdfbf6] leading-[1.1] text-4xl md:text-6xl lg:text-[65px] whitespace-nowrap">
              We design what grows.
            </h1>
          </div>

          {/* Hero Body Paragraph */}
          <p className="max-w-xl font-sans text-base md:text-[18px] font-light leading-relaxed text-white/70">
            X Society is a digital agency that helps ambitious brands bloom in the digital space.
          </p>

          {/* Primary Button Wrapper */}
          <div className="pt-3">
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-1.5 px-7 py-3 rounded-full bg-gold text-black font-sans text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:bg-gold-hover shadow-[0_0_40px_rgba(194,186,155,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              EXPLORE OUR WORK
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" />
            </motion.a>
          </div>
        </motion.div>
      </main>
      
    </div>
  )
}

export default App
