import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper, { SectionHeader } from './SectionWrapper'

const HONORS = [
  { title: '3+ years', meta: 'Work experience' },
  { title: 'Top 0.1% in JEE', meta: 'IIT Bombay, Jul 2018' },
  { title: 'Fast-tracked promotion', meta: 'Kotak Securities, 3 designations in 2 years' },
  { title: 'IT Champion Award', meta: 'Kotak Securities, FY 2023 to 24' },
]

const INTERESTS = ['Derivative Pricing', 'Multi-Agent AI', 'Data Engineering', 'Quant Research', 'Explainable AI', 'Time Series']

export default function About({ darkMode }) {
  const imgRef = useRef(null)
  const inView = useInView(imgRef, { once: true, margin: '-60px' })

  return (
    <SectionWrapper id="about" className={darkMode ? 'bg-charcoal' : 'bg-paper'}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="About" title="Finance, engineering, and AI" darkMode={darkMode} />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div className="space-y-6">
            <p className={`text-base leading-relaxed ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>
              My background spans three disciplines: rigorous engineering from{' '}
              <span className={`font-semibold ${darkMode ? 'text-bone' : 'text-ink'}`}>IIT Bombay</span> (B.Tech,
              Chemical Engineering), deep financial theory from{' '}
              <span className={`font-semibold ${darkMode ? 'text-bone' : 'text-ink'}`}>UIUC's Gies College of Business</span>{' '}
              (MS Finance, concentration in Quantitative Finance and Data Analytics, 3.9/4.0 GPA), and three years of
              production backend engineering at{' '}
              <span className={`font-semibold ${darkMode ? 'text-bone' : 'text-ink'}`}>Kotak Securities</span>.
            </p>
            <p className={`text-base leading-relaxed ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>
              That combination of quant rigor, systems thinking, and hands-on ML lets me work fluidly across
              derivative pricing, data pipeline architecture, and explainable AI. I'm drawn to problems where
              market microstructure meets machine learning: from multi-agent trading systems to structured
              product Monte Carlo engines.
            </p>
            <p className={`text-base leading-relaxed ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>
              Most recently, I was a{' '}
              <span className={`font-semibold ${darkMode ? 'text-bone' : 'text-ink'}`}>Quant Data Engineer Intern at fAlpha.ai</span>,
              where I built a SHAP-based feature attribution framework for multi-factor equity models and an
              LLM-powered synthesis layer for structured equity research briefs.
            </p>

            <div className={`flex flex-wrap gap-2 pt-2 border-t ${darkMode ? 'border-rule-dark' : 'border-rule'} mt-2`}>
              {INTERESTS.map(tag => (
                <span
                  key={tag}
                  className={`mt-4 px-2.5 py-1 text-xs font-mono border ${
                    darkMode ? 'border-rule-dark text-bone-soft' : 'border-rule text-ink-soft'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right column: photo + honors */}
          <div ref={imgRef} className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className={`relative overflow-hidden aspect-[4/3] border ${darkMode ? 'border-rule-dark' : 'border-rule'}`}
            >
              <img
                src={`${import.meta.env.BASE_URL}photo.jpeg`}
                alt="Pallavi Kochar"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            <div className={`grid grid-cols-2 border-t border-l ${darkMode ? 'border-rule-dark' : 'border-rule'}`}>
              {HONORS.map(({ title, meta }) => (
                <div
                  key={title}
                  className={`p-4 border-b border-r ${darkMode ? 'border-rule-dark' : 'border-rule'}`}
                >
                  <p className={`text-sm font-semibold leading-snug ${darkMode ? 'text-bone' : 'text-ink'}`}>{title}</p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>{meta}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
