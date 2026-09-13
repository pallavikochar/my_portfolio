import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionWrapper({ children, id, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`py-24 ${className}`}
    >
      {children}
    </motion.section>
  )
}

export function SectionHeader({ eyebrow, title, subtitle, darkMode }) {
  return (
    <div className="mb-16">
      <div className={`text-sm font-mono mb-3 ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>
        <span className={darkMode ? 'text-accent-light' : 'text-accent'}>{'// '}</span>
        {eyebrow.toLowerCase()}
      </div>
      <h2 className={`font-serif text-3xl sm:text-4xl font-semibold ${darkMode ? 'text-bone' : 'text-ink'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base max-w-2xl ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
