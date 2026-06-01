import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'

function IconGithub({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function IconLinkedin({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

// Animated chart line SVG motif
function ChartLine({ className }) {
  return (
    <svg
      viewBox="0 0 600 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <motion.path
        d="M0 130 L60 110 L120 120 L180 80 L240 90 L300 50 L360 65 L420 30 L480 45 L540 20 L600 35"
        stroke="rgba(59,130,246,0.35)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut', delay: 0.5 }}
      />
      <motion.path
        d="M0 130 L60 110 L120 120 L180 80 L240 90 L300 50 L360 65 L420 30 L480 45 L540 20 L600 35 L600 160 L0 160 Z"
        fill="url(#chartGrad)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.5 }}
      />
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(59,130,246,0.12)" />
          <stop offset="100%" stopColor="rgba(59,130,246,0)" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// Subtle animated grid
function GridBackground({ darkMode }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Radial gradient glow */}
      <div className={`absolute inset-0 ${
        darkMode
          ? 'bg-radial-gradient'
          : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'
      }`} />

      {/* Grid lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        aria-hidden
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke={darkMode ? '#3b82f6' : '#1d4ed8'} strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-600/5 blur-3xl" />
    </div>
  )
}

// Floating data node
function FloatingNode({ x, y, delay, size = 4 }) {
  return (
    <motion.div
      className="absolute rounded-full bg-accent/40 border border-accent/60"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{ y: [-8, 8, -8], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  )
}

export default function Hero({ darkMode }) {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const nodes = [
    { x: 15, y: 20, delay: 0, size: 5 },
    { x: 80, y: 15, delay: 0.8, size: 4 },
    { x: 88, y: 60, delay: 1.5, size: 6 },
    { x: 10, y: 70, delay: 0.3, size: 4 },
    { x: 50, y: 10, delay: 1.1, size: 3 },
    { x: 70, y: 80, delay: 0.6, size: 5 },
    { x: 25, y: 85, delay: 1.8, size: 4 },
    { x: 60, y: 30, delay: 0.9, size: 3 },
  ]

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex flex-col justify-center overflow-hidden ${
        darkMode ? 'bg-navy-950' : 'bg-slate-50'
      }`}
    >
      <GridBackground darkMode={darkMode} />

      {/* Floating nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {nodes.map((n, i) => (
          <FloatingNode key={i} {...n} />
        ))}
      </div>

      {/* Chart motif bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <ChartLine className="w-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2"
          >
            <span className="h-px w-8 bg-accent" />
            <span className={`text-sm font-mono tracking-widest uppercase ${darkMode ? 'text-accent-light' : 'text-accent-dark'}`}>
              Portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className={darkMode ? 'text-white' : 'text-slate-900'}>Pallavi</span>{' '}
            <span className="text-gradient">Kochar</span>
          </motion.h1>

          {/* Positioning statement */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className={`text-lg sm:text-xl lg:text-2xl font-light leading-relaxed mb-4 max-w-2xl ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Quantitative finance professional building at the intersection of{' '}
            <span className={`font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              markets, data, and AI
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`text-sm sm:text-base mb-10 ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}
          >
            MS Finance · UIUC &nbsp;·&nbsp; B.Tech · IIT Bombay
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <button
              onClick={() => handleScroll('projects')}
              className="px-6 py-3 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
            >
              View Work
            </button>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 text-sm font-semibold rounded-lg border transition-all duration-200 ${
                darkMode
                  ? 'border-slate-600 text-slate-300 hover:border-accent hover:text-accent'
                  : 'border-slate-300 text-slate-700 hover:border-accent hover:text-accent'
              }`}
            >
              Resume
            </a>
            <button
              onClick={() => handleScroll('contact')}
              className={`px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-200 ${
                darkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Contact →
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex items-center gap-5"
          >
            <a
              href="mailto:pallavikochar8@gmail.com"
              aria-label="Email"
              className={`transition-colors ${darkMode ? 'text-slate-500 hover:text-accent' : 'text-slate-400 hover:text-accent'}`}
            >
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com/in/pallavikochar7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`transition-colors ${darkMode ? 'text-slate-500 hover:text-accent' : 'text-slate-400 hover:text-accent'}`}
            >
              <IconLinkedin size={20} />
            </a>
            <a
              href="https://github.com/pallavikochar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`transition-colors ${darkMode ? 'text-slate-500 hover:text-accent' : 'text-slate-400 hover:text-accent'}`}
            >
              <IconGithub size={20} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className={`text-xs font-mono tracking-widest uppercase ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className={darkMode ? 'text-slate-600' : 'text-slate-400'} />
        </motion.div>
      </motion.div>
    </section>
  )
}
