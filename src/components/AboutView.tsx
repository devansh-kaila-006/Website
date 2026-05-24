import React from 'react';
import { Shield, Eye, Users, ChevronRight, Activity, Cpu, Hammer, Check, X } from 'lucide-react';

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

  return (
    <div id="about-view-container" className="pt-24 space-y-16 pb-12">
      
      {/* Page Header banner */}
      <section className="bg-slate-50 border-b border-slate-150 py-12 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xxs font-mono font-bold text-[#FF6B35] uppercase tracking-wider block mb-2">WHO WE ARE</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#003366] tracking-tight">
            Our Story & Methodology Focus
          </h1>
          <p className="text-xs md:text-sm text-slate-500 max-w-2xl mt-2 leading-relaxed font-semibold">
            Maynit is a business transformation and consulting firm based in Ludhiana, Punjab, focused on converting complex organizational blockages into clear, streamlined routines.
          </p>
        </div>
      </section>

      {/* SECTION 1: WHO WE ARE (SPLIT LAYOUT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main narrative content */}
          <div className="lg:col-span-7 space-y-6">
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
              <div className="space-y-1 p-4 bg-slate-50 rounded border border-slate-150">
                <p className="text-xs font-bold text-[#003366] uppercase tracking-wider font-mono">What We Combine:</p>
                <ul className="space-y-1.5 pt-1">
                  {['Empirical Data-driven Insights', 'Lean / Six Sigma / Agile Systems', 'Deep Multi-industry Benchmarks'].map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-600 inline-flex items-center space-x-1.5 w-full font-medium">
                      <span className="h-1.5 w-1.5 bg-[#0066CC] rounded-sm shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1 p-4 bg-slate-50 rounded border border-slate-150">
                <p className="text-xs font-bold text-[#003366] uppercase tracking-wider font-mono">What We Deliver:</p>
                <ul className="space-y-1.5 pt-1">
                  {['Highly Scalable Core Protocols', 'Quantified, Realized ROI Metrics', 'Permanent Internal Capabilities'].map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-600 inline-flex items-center space-x-1.5 w-full font-medium">
                      <span className="h-1.5 w-1.5 bg-[#28A745] rounded-sm shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Graphical flow rendering on right */}
          <div className="lg:col-span-5">
            <div id="about-graphic-box" className="bg-[#003366] text-white p-6 rounded shadow-lg space-y-5 border border-white/5 relative">
              <div className="absolute top-2 right-4 text-[8px] font-mono text-white/30 uppercase tracking-widest">
                Governance Hierarchy
              </div>
              
              <div className="flex items-center space-x-2 pb-2.5 border-b border-white/10">
                <Activity className="h-4.5 w-4.5 text-[#FF6B35]" />
                <span className="text-xs font-bold uppercase tracking-widest font-mono">Structural Operational Cascade</span>
              </div>

              <div className="space-y-3 font-mono text-xxs">
                <div className="p-3 bg-white/5 rounded border border-white/10 text-left">
                  <p className="text-[#FF6B35] font-bold">1. Strategic Layer (Executive Board)</p>
                  <p className="text-slate-350 text-3xs mt-1 font-mono">Hoshin Kanri Vision Alignment & Long-term Yield KPIs</p>
                </div>
                
                <div className="text-center py-1">
                  <span className="inline-block h-3.5 w-0.5 border-l border-dashed border-white/30"></span>
                </div>

                <div className="p-3 bg-white/5 rounded border border-white/10 text-left">
                  <p className="text-[#E6F3FF] font-black uppercase">2. Process Layer (Value Streams)</p>
                  <p className="text-slate-350 text-3xs mt-1 font-mono">Cross-functional layouts, bottleneck removal, and standard flows</p>
                </div>

                <div className="text-center py-1">
                  <span className="inline-block h-3.5 w-0.5 border-l border-dashed border-white/30"></span>
                </div>

                <div className="p-3 bg-white/5 rounded border border-white/10 text-left">
                  <p className="text-emerald-400 font-bold">3. Execution Layer (Frontline Teams)</p>
                  <p className="text-slate-350 text-3xs mt-1 font-mono">Visual boards, Tier-Meetings, standard work, and instant root-cause logs</p>
                </div>
              </div>

              <div className="p-2.5 bg-amber-500/10 text-center rounded text-[10px] italic text-amber-200">
                "Connecting executive targets with active shop-floor execution rules."
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: VISION & MISSION */}
      <section className="bg-slate-50 py-12 border-y border-slate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Vision card */}
            <div className="bg-white p-6 rounded border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-2.5 bg-[#E6F3FF]/60 text-[#0066CC] rounded-sm w-fit">
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
            </div>

            {/* Mission card */}
            <div className="bg-white p-6 rounded border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-2.5 bg-[#E6F3FF]/60 text-[#0066CC] rounded-sm w-fit">
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
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT MAKES US DIFFERENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left py-4">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xxs font-bold text-[#FF6B35] uppercase tracking-wider block">HOW WE COMPETE</span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#003366] tracking-tight">
            Setting the Standard vs. Traditional Agencies
          </h3>
          <p className="text-xs text-slate-500 max-w-lg mx-auto leading-normal">
            Compare how our hands-on operations focus translates to predictable performance gains compared to generic strategy slide providers.
          </p>
        </div>

        <div className="bg-white rounded border border-slate-200 overflow-hidden shadow-sm">
          <table className="w-full text-left text-xs md:text-sm border-collapse">
            <thead>
              <tr className="bg-[#003366] text-white font-mono text-[10px] tracking-wider uppercase border-b border-slate-200">
                <th className="p-4 w-1/3">Core Parameter</th>
                <th className="p-4 w-1/3 text-slate-350">Traditional Consulting</th>
                <th className="p-4 w-1/3 bg-[#002244] text-white font-black">Our Transformation Approach</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs font-semibold">
              <tr>
                <td className="p-4 font-extrabold text-[#003366] bg-slate-50/50">Delivery Format</td>
                <td className="p-4 text-slate-500 flex items-center space-x-2">
                  <X className="h-4 w-4 text-red-500 shrink-0" />
                  <span>200-page theoretical slide binders for review.</span>
                </td>
                <td className="p-4 bg-[#E6F3FF]/20 text-[#003366] font-bold flex items-center space-x-2">
                  <Check className="h-4 w-4 text-[#28A745] shrink-0" />
                  <span>Tested pilots, live maps, and visual boards.</span>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-extrabold text-[#003366] bg-slate-50/50">Engagement Scope</td>
                <td className="p-4 text-slate-500 flex items-center space-x-2">
                  <X className="h-4 w-4 text-red-500 shrink-0" />
                  <span>One-time remote discovery meeting & handover.</span>
                </td>
                <td className="p-4 bg-[#E6F3FF]/20 text-[#003366] font-bold flex items-center space-x-2">
                  <Check className="h-4 w-4 text-[#28A745] shrink-0" />
                  <span>Embedded floor-coaching plus weekly reviews.</span>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-extrabold text-[#003366] bg-slate-50/50">Framework Focus</td>
                <td className="p-4 text-slate-500 flex items-center space-x-2">
                  <X className="h-4 w-4 text-red-500 shrink-0" />
                  <span>Boilerplate templates reused across client lists.</span>
                </td>
                <td className="p-4 bg-[#E6F3FF]/20 text-[#003366] font-bold flex items-center space-x-2">
                  <Check className="h-4 w-4 text-[#28A745] shrink-0" />
                  <span>Tailored designs respecting team and systems limits.</span>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-extrabold text-[#003366] bg-slate-50/50">Program Outcomes</td>
                <td className="p-4 text-slate-500 flex items-center space-x-2">
                  <X className="h-4 w-4 text-red-500 shrink-0" />
                  <span>Strategy descriptions without active deployment rules.</span>
                </td>
                <td className="p-4 bg-[#E6F3FF]/20 text-[#003366] font-bold flex items-center space-x-2">
                  <Check className="h-4 w-4 text-[#28A745] shrink-0" />
                  <span>Strategy connected entirely to verified floor metrics.</span>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-extrabold text-[#003366] bg-slate-50/50">Capability Transfer</td>
                <td className="p-4 text-slate-500 flex items-center space-x-2">
                  <X className="h-4 w-4 text-red-500 shrink-0" />
                  <span>Knowledge stays inside remote agency resource bases.</span>
                </td>
                <td className="p-4 bg-[#E6F3FF]/20 text-[#003366] font-bold flex items-center space-x-2">
                  <Check className="h-4 w-4 text-[#28A745] shrink-0" />
                  <span>Certified internal leads trained permanently.</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA section bottom */}
      <section className="bg-[#003366] text-white py-12 text-center rounded max-w-7xl mx-auto px-4">
        <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">Learn About Our 7 Core Specializations</h3>
        <p className="text-[10px] text-slate-300 font-mono mt-1 uppercase tracking-widest font-semibold">Proven operational outcomes across diverse organizational layouts</p>
        <button
          id="about-cta-btn"
          onClick={() => { setView('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="mt-5 px-6 py-3 bg-[#FF6B35] hover:bg-[#e85a2a] text-white text-xs font-bold uppercase tracking-widest rounded shadow transition-all duration-200"
        >
          Explore Our Solutions
        </button>
      </section>

    </div>
  );
}
