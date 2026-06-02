import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper, { SectionHeader } from './SectionWrapper'
const HONORS = [
  {
    title: '3+ Years',
    meta: 'Work Experience',
  },
  {
    title: 'Top 0.1% in JEE Examination',
    meta: 'IIT Bombay · Jul 2018',
  },
  {
    title: 'Fast-tracked Promotion',
    meta: 'Kotak Securities · 3 designations in 2 years',
  },
  {
    title: 'IT Champion Award',
    meta: 'Kotak Securities · FY23-24',
  },
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
              My background spans three disciplines:
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
              Most recently, I was a <span className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Data Product Engineer Intern at FAlpha.ai</span>, where I built
              an explainability layer over prediction models using SHAP and integrated gradients.
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

          {/* Right column: photo + honors */}
          <div ref={imgRef} className="space-y-6">
            {/* Profile photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`relative rounded-2xl overflow-hidden aspect-[4/3] border ${
                darkMode ? 'border-blue-500/15' : 'border-blue-200'
              }`}
            >
              <img
                src={`${import.meta.env.BASE_URL}photo.JPG`}
                alt="Pallavi Kochar"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            {/* Honors */}
            <div className="grid grid-cols-2 gap-4">
              {HONORS.map(({ title, meta }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className={`relative p-4 rounded-xl border overflow-hidden cursor-default group transition-shadow duration-300 ${
                    darkMode
                      ? 'border-blue-500/10 bg-navy-900 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10'
                      : 'border-slate-200 bg-white hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  {/* Subtle gradient glow on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    darkMode
                      ? 'bg-gradient-to-br from-blue-500/5 to-transparent'
                      : 'bg-gradient-to-br from-blue-50 to-transparent'
                  }`} />
                  <div className="relative">
                    <p className={`text-sm font-bold leading-snug text-gradient`}>{title}</p>
                    <p className={`text-xs mt-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{meta}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
