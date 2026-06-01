import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper, { SectionHeader } from './SectionWrapper'
import { Trophy, Zap, Star } from 'lucide-react'

const AWARDS = [
  {
    icon: Zap,
    color: 'from-amber-400 to-orange-500',
    badgeColor: {
      dark: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      light: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    title: 'Fast-tracked Promotion',
    org: 'Kotak Securities Limited',
    date: 'Jun 2022 – Dec 2024',
    description:
      'Elevated from Management Trainee to Senior Manager in just 2 years, advancing 3 designations due to exceptional performance and measurable impact across backend engineering and automation initiatives.',
  },
  {
    icon: Trophy,
    color: 'from-blue-400 to-indigo-500',
    badgeColor: {
      dark: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      light: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    title: 'IT Champion Award',
    org: 'Kotak Securities Limited',
    date: 'Aug 2023',
    description:
      'Recognized with the FY23-24 Kotak Securities IT Champion Award for exemplary contribution and technical leadership across critical infrastructure and automation projects.',
  },
  {
    icon: Star,
    color: 'from-emerald-400 to-teal-500',
    badgeColor: {
      dark: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      light: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    title: 'Top 0.1% in JEE (Joint Entrance Examination)',
    org: 'IIT Bombay',
    date: 'Jul 2018',
    description:
      'Ranked in the top 0.1% of 1.1 million candidates in one of the world\'s most competitive engineering entrance exams, including the advanced level (top 1%), securing admission to IIT Bombay, India\'s top engineering institute.',
  },
]

function AwardCard({ award, index, darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = award.icon
  const badge = award.badgeColor[darkMode ? 'dark' : 'light']

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl border overflow-hidden card-hover ${
        darkMode ? 'border-blue-500/10 bg-navy-900' : 'border-slate-200 bg-white shadow-sm'
      }`}
    >
      {/* Top accent bar */}
      <div className={`h-1 bg-gradient-to-r ${award.color}`} />

      <div className="p-6">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className={`p-3 rounded-xl bg-gradient-to-br ${award.color} flex-shrink-0`}>
            <Icon size={20} className="text-white" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className={`text-base font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {award.title}
              </h3>
              <span className={`px-2 py-0.5 text-xs rounded-full border ${badge}`}>
                {award.date}
              </span>
            </div>
            <p className={`text-xs font-semibold mb-3 text-gradient`}>{award.org}</p>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {award.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Awards({ darkMode }) {
  return (
    <SectionWrapper id="awards" className={darkMode ? 'bg-navy-950' : 'bg-white'}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Honors & Awards"
          title="Recognition"
          subtitle="Academic and professional achievements that reflect consistent high performance."
          darkMode={darkMode}
        />

        <div className="grid lg:grid-cols-3 gap-5">
          {AWARDS.map((award, i) => (
            <AwardCard key={award.title} award={award} index={i} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
