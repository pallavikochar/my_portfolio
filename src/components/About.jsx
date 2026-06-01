import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper, { SectionHeader } from './SectionWrapper'

const STATS = [
  { value: '3+', label: 'Years Engineering' },
  { value: 'IIT', label: 'Bombay Alumna' },
  { value: 'UIUC', label: 'MS Finance' },
  { value: 'AI/ML', label: 'Focus Area' },
]

export default function About({ darkMode }) {
  const imgRef = useRef(null)
  const inView = useInView(imgRef, { once: true, margin: '-60px' })

  return (
    <SectionWrapper id="about" className={darkMode ? 'bg-navy-950' : 'bg-white'}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="About"
          title="Finance + Engineering + AI"
          darkMode={darkMode}
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div className="space-y-6">
            <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              I'm a quantitative finance professional with a rare background spanning three disciplines:
              rigorous engineering from <span className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>IIT Bombay</span> (B.Tech, Chemical Engineering),
              deep financial theory from <span className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>UIUC's Gies College of Business</span> (MS Finance,
              concentrations in Asset Management and Quantitative Finance), and three years of
              production backend engineering at <span className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Kotak Securities</span>.
            </p>
            <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              That combination of quant rigor, systems thinking, and hands-on ML lets me work
              fluidly across derivative pricing, data pipeline architecture, and explainable AI.
              I'm drawn to problems where market microstructure meets machine learning: from
              multi-agent trading systems to structured product Monte Carlo engines.
            </p>
            <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              Currently, I'm a <span className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Data Product Engineer Intern at FAlpha.ai</span>, building
              an explainability layer over prediction models using SHAP, LIME, and integrated
              gradients. I graduated in May 2026 and am actively exploring full-time roles in
              quant research, data engineering, and AI-driven fintech.
            </p>

            {/* Key interests */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Derivative Pricing', 'Multi-Agent AI', 'Data Engineering', 'Quant Research', 'Explainable AI', 'Time Series'].map(tag => (
                <span
                  key={tag}
                  className={`px-3 py-1 text-xs font-medium rounded-full border ${
                    darkMode
                      ? 'border-blue-500/20 text-accent-light bg-blue-500/5'
                      : 'border-blue-300 text-accent-dark bg-blue-50'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right column: photo placeholder + stats */}
          <div ref={imgRef} className="space-y-8">
            {/* Profile photo placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`relative rounded-2xl overflow-hidden aspect-[4/3] border ${
                darkMode ? 'border-blue-500/15' : 'border-blue-200'
              }`}
            >
              <img
                src="/photo.JPG"
                alt="Pallavi Kochar"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className={`p-5 rounded-xl border ${
                    darkMode
                      ? 'border-blue-500/10 bg-navy-900'
                      : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div className="font-serif text-2xl font-bold text-gradient">{value}</div>
                  <div className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
