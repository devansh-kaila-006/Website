import React from 'react';
import { Shield, Eye, Users, ChevronRight, Activity, Cpu, Hammer, Check, X } from 'lucide-react';
import { motion } from 'motion/react';
import { LEADERSHIP_DATA } from '../data';

interface AboutViewProps {
  setView: (view: string) => void;
}

export default function AboutView({ setView }: AboutViewProps) {
  const coreFocuses = [
    { title: 'Operational Efficiency', desc: 'Identify and resolve deep systemic bottlenecks to optimize daily process flow.' },
    { title: 'Surgical Cost Leadership', desc: 'Lower overhead expenses permanently without eroding product or delivery quality.' },
    { title: 'Workforce Alignment', desc: 'Connect strategic executive goals directly with morning operational standups.' },
    { title: 'Rapid Decision Velocity', desc: 'Implement flat reporting routines and standard escalations to clear issues immediately.' }
  ];

  const comparisonData = [
    {
      parameter: 'Delivery Format',
      traditional: '200-page theoretical slide binders for review.',
      ourApproach: 'Tested pilots, live maps, and visual boards.'
    },
    {
      parameter: 'Engagement Scope',
      traditional: 'One-time remote discovery meeting & handover.',
      ourApproach: 'Embedded floor-coaching plus weekly reviews.'
    },
    {
      parameter: 'Framework Focus',
      traditional: 'Boilerplate templates reused across client lists.',
      ourApproach: 'Tailored designs respecting team and systems limits.'
    },
    {
      parameter: 'Program Outcomes',
      traditional: 'Strategy descriptions without active deployment rules.',
      ourApproach: 'Strategy connected entirely to verified floor metrics.'
    },
    {
      parameter: 'Capability Transfer',
      traditional: 'Knowledge stays inside remote agency resource bases.',
      ourApproach: 'Certified internal leads trained permanently.'
    }
  ];

  return (
    <div id="about-view-container" className="pt-24 space-y-16 pb-12">
      
      {/* Page Header banner */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-slate-50 border-b border-slate-150 py-12 text-left"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xxs font-mono font-bold text-[#FF6B35] uppercase tracking-wider block mb-2">WHO WE ARE</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#003366] tracking-tight">
              Our Story & Methodology Focus
            </h1>
            <p className="text-xs md:text-sm text-slate-500 max-w-2xl mt-2 leading-relaxed font-semibold">
              Maynit is a business transformation and consulting firm with offices in Ludhiana, Punjab & Surat, Gujarat, focused on converting complex organizational blockages into clear, streamlined routines.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 1: WHO WE ARE (SPLIT LAYOUT) */}
      <motion.section 
        id="about-who-we-are" 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main narrative content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#003366] tracking-tight">
              A Strategic Transformation & Performance Partner
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              We operate at the critical intersection of business strategy and daily execution. Founded by senior operations leaders who grew tired of theoretical consulting slides, Maynit was built on a simple premise: <span className="text-[#0066CC] font-bold">Management consulting must deliver measurable execution gains, not just binder recommendations.</span>
            </p>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              We combine deep scientific analytics (Value Stream Mapping, quantitative baseline metrics) with proven performance methodologies (<span className="text-[#003366] font-bold">Lean, Six Sigma, Agile</span>) and extensive on-the-floor floor management experience to restructure broken processes, upskill employees, and guarantee client self-sufficiency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <motion.div 
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="space-y-1 p-4 bg-slate-50 rounded-xl border border-slate-150 cursor-default"
              >
                <p className="text-xs font-bold text-[#003366] uppercase tracking-wider font-mono">What We Combine:</p>
                <ul className="space-y-1.5 pt-1">
                  {['Empirical Data-driven Insights', 'Lean / Six Sigma / Agile Systems', 'Deep Multi-industry Benchmarks'].map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-600 inline-flex items-center space-x-1.5 w-full font-medium">
                      <span className="h-1.5 w-1.5 bg-[#0066CC] rounded-full shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="space-y-1 p-4 bg-slate-50 rounded-xl border border-slate-150 cursor-default"
              >
                <p className="text-xs font-bold text-[#003366] uppercase tracking-wider font-mono">What We Deliver:</p>
                <ul className="space-y-1.5 pt-1">
                  {['Highly Scalable Core Protocols', 'Quantified, Realized ROI Metrics', 'Permanent Internal Capabilities'].map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-600 inline-flex items-center space-x-1.5 w-full font-medium">
                      <span className="h-1.5 w-1.5 bg-[#28A745] rounded-full shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Graphical flow rendering on right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-12 xl:col-span-5 lg:w-full"
          >
            <div id="about-graphic-box" className="bg-[#003366] text-white p-6 rounded-2xl shadow-lg space-y-5 border border-white/5 relative mx-auto max-w-md lg:max-w-full">
              <div className="absolute top-2 right-4 text-[8px] font-mono text-white/30 uppercase tracking-widest">
                Governance Hierarchy
              </div>
              
              <div className="flex items-center space-x-2 pb-2.5 border-b border-white/10">
                <Activity className="h-4.5 w-4.5 text-[#FF6B35]" />
                <span className="text-xs font-bold uppercase tracking-widest font-mono">Structural Operational Cascade</span>
              </div>

              <div className="space-y-3 font-mono text-xxs">
                <motion.div 
                  whileHover={{ x: 3, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  className="p-3 bg-white/5 rounded-xl border border-white/10 text-left transition-colors duration-150 cursor-default"
                >
                  <p className="text-[#FF6B35] font-bold">1. Strategic Layer (Executive Board)</p>
                  <p className="text-slate-350 text-3xs mt-1 font-mono">Hoshin Kanri Vision Alignment & Long-term Yield KPIs</p>
                </motion.div>
                
                <div className="text-center py-1">
                  <span className="inline-block h-3.5 w-0.5 border-l border-dashed border-white/30"></span>
                </div>

                <motion.div 
                  whileHover={{ x: 3, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  className="p-3 bg-white/5 rounded-xl border border-white/10 text-left transition-colors duration-150 cursor-default"
                >
                  <p className="text-[#E6F3FF] font-black uppercase">2. Process Layer (Value Streams)</p>
                  <p className="text-slate-350 text-3xs mt-1 font-mono">Cross-functional layouts, bottleneck removal, and standard flows</p>
                </motion.div>

                <div className="text-center py-1">
                  <span className="inline-block h-3.5 w-0.5 border-l border-dashed border-white/30"></span>
                </div>

                <motion.div 
                  whileHover={{ x: 3, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  className="p-3 bg-white/5 rounded-xl border border-white/10 text-left transition-colors duration-150 cursor-default"
                >
                  <p className="text-emerald-400 font-bold">3. Execution Layer (Frontline Teams)</p>
                  <p className="text-slate-350 text-3xs mt-1 font-mono">Visual boards, Tier-Meetings, standard work, and instant root-cause logs</p>
                </motion.div>
              </div>

              <div className="p-2.5 bg-amber-500/10 text-center rounded-lg text-[10px] italic text-amber-200">
                "Connecting executive targets with active shop-floor execution rules."
              </div>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* SECTION 2: VISION & MISSION */}
      <motion.section 
        id="about-vision-mission" 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-slate-50 py-12 border-y border-slate-150"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Vision card */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between cursor-default"
            >
              <div className="space-y-3">
                <div className="p-2.5 bg-[#E6F3FF]/60 text-[#0066CC] rounded-lg w-fit">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-extrabold text-[#003366] uppercase tracking-widest font-mono">
                  OUR STRATEGIC VISION
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  To enable modern organizations worldwide to operate at their absolute peak genetic efficiency, fostering high operational speed while continuously and systematically innovating for future market challenges.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-[#FF6B35] font-mono text-[9px] font-bold uppercase tracking-wider">
                Excellence as a predictable continuous system
              </div>
            </motion.div>

            {/* Mission card */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between cursor-default"
            >
              <div className="space-y-3">
                <div className="p-2.5 bg-[#E6F3FF]/60 text-[#0066CC] rounded-lg w-fit">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-extrabold text-[#003366] uppercase tracking-widest font-mono">
                  OUR ONGOING MISSION
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  To deliver structured, physical, and high-impact operational solutions that improve long-term business performance indicators at all levels, shifting corporate cultures from defensive reaction to active daily optimization.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-[#0066CC] font-mono text-[9px] font-bold uppercase tracking-wider">
                Measurable, highly practical sustainable ROI
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* SECTION 3: WHAT MAKES US DIFFERENT */}
      <motion.section 
        id="about-traditional-vs-us" 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left py-4"
      >
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xxs font-bold text-[#FF6B35] uppercase tracking-wider block">HOW WE COMPETE</span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#003366] tracking-tight">
            Setting the Standard vs. Traditional Agencies
          </h3>
          <p className="text-xs text-slate-500 max-w-lg mx-auto leading-normal">
            Compare how our hands-on operations focus translates to predictable performance gains compared to generic strategy slide providers.
          </p>
        </div>

        {/* Responsive view for screens: Desktop Table vs Mobile Stacked comparative Cards */}
        <div>
          {/* Mobile phone card list layout */}
          <div className="sm:hidden space-y-4">
            {comparisonData.map((row, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
              >
                <div className="bg-[#003366] text-white py-2.5 px-4 text-xs font-mono font-bold uppercase tracking-wider">
                  {row.parameter}
                </div>
                <div className="p-4 space-y-3.5">
                  {/* Traditional consulting */}
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono font-extrabold text-[#FF6B35] tracking-wider">Traditional Consulting</span>
                    <div className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-150">
                      <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">{row.traditional}</p>
                    </div>
                  </div>

                  {/* Maynit strategy */}
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono font-extrabold text-[#0066CC] tracking-wider">Our Approach</span>
                    <div className="flex items-start space-x-2 bg-[#E6F3FF]/40 p-3 rounded-xl border border-blue-100">
                      <Check className="h-4 w-4 text-[#28A745] mt-0.5 shrink-0" />
                      <p className="text-xs text-[#003366] font-bold leading-relaxed">{row.ourApproach}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop/Tablet table view */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:block bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md"
          >
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-[#003366] text-white font-mono text-[10px] tracking-wider uppercase border-b border-slate-200">
                  <th className="p-4 w-1/4">Core Parameter</th>
                  <th className="p-4 w-3/8 text-slate-350">Traditional Consulting</th>
                  <th className="p-4 w-3/8 bg-[#002244] text-white font-black">Our Transformation Approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs font-semibold">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50/40 transition-colors duration-100">
                    <td className="p-4 font-extrabold text-[#003366] bg-slate-50/50 w-1/4 align-top">{row.parameter}</td>
                    <td className="p-4 text-slate-500 w-3/8 align-top">
                      <div className="flex items-start space-x-2">
                        <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{row.traditional}</span>
                      </div>
                    </td>
                    <td className="p-4 bg-[#E6F3FF]/15 text-[#003366] font-bold w-3/8 align-top">
                      <div className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-[#28A745] mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{row.ourApproach}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </motion.section>

      {/* BRIEF LEADERSHIP EXTRACTION - HYBRID OPTION 3 */}
      <motion.section 
        id="about-directors-overview" 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-slate-50 py-12 border-y border-slate-150"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xxs font-bold text-[#FF6B35] uppercase tracking-wider block">OUR DIRECTORS</span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#003366] tracking-tight">
              Meet Our Leadership
            </h3>
            <p className="text-xs text-slate-500 max-w-lg mx-auto leading-normal">
              Maynit is powered by operational transformation experts with deep sector knowledge and multi-industry execution records across Punjab, Gujarat, and pan-India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {LEADERSHIP_DATA.map((leader) => (
              <motion.div 
                key={leader.id}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 450, damping: 19 }}
                className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-default"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={leader.photoUrl} 
                      alt={leader.name}
                      className="w-12 h-12 rounded-full object-cover shrink-0 border border-slate-200 w-12 h-12"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-sm font-extrabold text-[#003366] leading-tight">{leader.name}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{leader.title}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    {leader.tagline}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xxs font-mono text-slate-400">
                  <span>{leader.experienceYears}+ Years Exp</span>
                  <span className="text-[#0066CC] font-bold">{leader.location}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.button
              id="about-meet-full-team-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => { setView('leadership'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-widest text-[#003366] hover:text-[#FF6B35] transition-colors group cursor-pointer"
            >
              <span>Meet our full leadership team</span>
              <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* CTA section bottom */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-[#003366] text-white py-12 text-center rounded-3xl max-w-7xl mx-auto px-4 shadow-xl"
      >
        <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">Learn About Our 7 Core Specializations</h3>
        <p className="text-[10px] text-slate-300 font-mono mt-1 uppercase tracking-widest font-semibold">Proven operational outcomes across diverse organizational layouts</p>
        <motion.button
          id="about-cta-btn"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => { setView('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="mt-5 px-6 py-3 bg-[#FF6B35] hover:bg-[#e85a2a] text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow hover:shadow-lg transition-all duration-200 cursor-pointer"
        >
          Explore Our Solutions
        </motion.button>
      </motion.section>

    </div>
  );
}
