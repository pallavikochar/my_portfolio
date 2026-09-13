import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

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

// A single static motif: a price chart (the market) read by a connected trace
// and square nodes (the systems that watch it). Deterministic, not random, and
// never animated beyond the section's own one-time fade-in.
const CANDLES = (() => {
  const n = 32
  const candles = []
  let prevClose = 30
  for (let i = 0; i < n; i++) {
    const trend = i * 1.1
    const wiggle = Math.sin(i * 0.9) * 6 + Math.sin(i * 2.3) * 2.5
    const close = 30 + trend + wiggle
    const open = prevClose
    const wick = 2 + Math.abs(Math.sin(i * 1.7)) * 3
    const high = Math.max(open, close) + wick
    const low = Math.min(open, close) - wick
    candles.push({ x: i * (200 / n) + 2, open, close, high, low })
    prevClose = close
  }
  return candles
})()

function MarketBackground({ darkMode }) {
  const candleW = (200 / CANDLES.length) * 0.55
  const line = CANDLES.map(c => `${c.x},${60 - c.close * 0.42}`).join(' ')

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 200 60"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {CANDLES.map((c, i) => {
        const up = c.close >= c.open
        const color = up
          ? (darkMode ? '#4E9B74' : '#1F6F4A')
          : (darkMode ? '#C1615A' : '#A32F2F')
        const yOpen = 60 - c.open * 0.42
        const yClose = 60 - c.close * 0.42
        const yHigh = 60 - c.high * 0.42
        const yLow = 60 - c.low * 0.42
        return (
          <g key={i} opacity={darkMode ? 0.16 : 0.14}>
            <line x1={c.x} y1={yHigh} x2={c.x} y2={yLow} stroke={color} strokeWidth="0.3" vectorEffect="non-scaling-stroke" />
            <rect
              x={c.x - candleW / 2}
              y={Math.min(yOpen, yClose)}
              width={candleW}
              height={Math.max(Math.abs(yClose - yOpen), 0.4)}
              fill={color}
            />
          </g>
        )
      })}
      <polyline
        points={line}
        fill="none"
        stroke={darkMode ? '#7B9CC4' : '#1E3A5F'}
        strokeWidth="0.35"
        vectorEffect="non-scaling-stroke"
        opacity={darkMode ? 0.22 : 0.18}
      />
      {CANDLES.filter((_, i) => i % 3 === 0).map((c, i) => (
        <rect
          key={i}
          x={c.x - 0.6}
          y={60 - c.close * 0.42 - 0.6}
          width="1.2"
          height="1.2"
          fill={darkMode ? '#7B9CC4' : '#1E3A5F'}
          opacity={darkMode ? 0.3 : 0.25}
        />
      ))}
    </svg>
  )
}

// Real results, shown once as a static table, not a decorative scrolling ticker.
const METRICS = [
  { value: '13.9%', label: 'CAGR' },
  { value: '2.1%', label: 'Alpha' },
  { value: '0.35', label: 'Sharpe' },
  { value: '83%', label: 'Hit rate' },
  { value: '$0.74', label: 'MC std error' },
  { value: '95%', label: 'VaR confidence' },
  { value: '11', label: 'Research agents' },
  { value: '160K', label: 'SEC filing chunks' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero({ darkMode }) {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className={`relative pt-28 pb-0 overflow-hidden ${darkMode ? 'bg-charcoal' : 'bg-paper'}`}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-6"
      >
        <motion.div variants={item} className={`flex items-center gap-2.5 mb-5 text-sm font-mono ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>
          <span className={`h-px w-5 ${darkMode ? 'bg-bone-soft' : 'bg-ink-soft'}`} />
          Pallavi Kochar, quantitative research and systems engineering
        </motion.div>

        <motion.h1
          variants={item}
          className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.15] mb-6 max-w-4xl ${
            darkMode ? 'text-bone' : 'text-ink'
          }`}
        >
          Quantitative finance professional building at the intersection of markets, data, and AI
        </motion.h1>

        <motion.p
          variants={item}
          className={`text-lg leading-relaxed mb-8 max-w-2xl ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}
        >
          I work across derivative pricing, multi-agent research systems, and the production
          infrastructure underneath them. MS in Finance (Quantitative Finance and Data Analytics),
          University of Illinois Urbana-Champaign. B.Tech in Chemical Engineering, IIT Bombay.
          Three years of backend engineering at Kotak Securities before that.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-10">
          <button
            onClick={() => handleScroll('projects')}
            className={`px-5 py-2.5 text-sm font-semibold border transition-colors ${
              darkMode
                ? 'bg-accent-light text-charcoal border-accent-light hover:bg-bone'
                : 'bg-accent text-paper border-accent hover:bg-ink'
            }`}
          >
            View work
          </button>
          <a
            href={`${import.meta.env.BASE_URL}Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-semibold border-b pb-0.5 transition-colors ${
              darkMode
                ? 'text-bone border-bone-soft hover:border-accent-light hover:text-accent-light'
                : 'text-ink border-ink-soft hover:border-accent hover:text-accent'
            }`}
          >
            Resume
          </a>
          <button
            onClick={() => handleScroll('contact')}
            className={`text-sm font-semibold border-b pb-0.5 transition-colors ${
              darkMode
                ? 'text-bone-soft border-transparent hover:text-bone hover:border-bone-soft'
                : 'text-ink-soft border-transparent hover:text-ink hover:border-ink-soft'
            }`}
          >
            Contact
          </button>

          <div className="flex items-center gap-4 sm:ml-auto">
            <a
              href="mailto:pallavikochar8@gmail.com"
              aria-label="Email"
              className={`transition-colors ${darkMode ? 'text-bone-soft hover:text-accent-light' : 'text-ink-soft hover:text-accent'}`}
            >
              <Mail size={19} />
            </a>
            <a
              href="https://linkedin.com/in/pallavikochar7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`transition-colors ${darkMode ? 'text-bone-soft hover:text-accent-light' : 'text-ink-soft hover:text-accent'}`}
            >
              <IconLinkedin size={19} />
            </a>
            <a
              href="https://github.com/pallavikochar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`transition-colors ${darkMode ? 'text-bone-soft hover:text-accent-light' : 'text-ink-soft hover:text-accent'}`}
            >
              <IconGithub size={19} />
            </a>
          </div>
        </motion.div>

        {/* Real result metrics, laid out as a static table */}
        <motion.div
          variants={item}
          className={`grid grid-cols-2 sm:grid-cols-4 border-t border-l ${darkMode ? 'border-rule-dark' : 'border-rule'}`}
        >
          {METRICS.map((m) => (
            <div
              key={m.label}
              className={`px-4 py-4 border-b border-r ${darkMode ? 'border-rule-dark' : 'border-rule'}`}
            >
              <div className={`font-mono tabular-nums text-xl sm:text-2xl font-medium ${darkMode ? 'text-bone' : 'text-ink'}`}>
                {m.value}
              </div>
              <div className={`text-xs mt-1 ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className={`relative h-28 sm:h-36 mt-12 border-t ${darkMode ? 'border-rule-dark' : 'border-rule'}`}>
        <MarketBackground darkMode={darkMode} />
      </div>
    </section>
  )
}
