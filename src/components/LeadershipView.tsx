import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  Users, 
  Check, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  GraduationCap, 
  Briefcase, 
  BookOpen, 
  MapPin, 
  ShieldCheck, 
  Activity,
  ArrowRight,
  Mail,
  Phone,
  Linkedin,
  Cpu,
  Workflow,
  Sparkles
} from 'lucide-react';
import { LEADERSHIP_DATA } from '../data';
import { LeaderProfile } from '../types';

interface LeadershipViewProps {
  setView: (view: string) => void;
}

export default function LeadershipView({ setView }: LeadershipViewProps) {
  // Option C: Expandable profile bios (all expand by default for prominent reading since there are only 2 founders)
  const [expandedProfiles, setExpandedProfiles] = useState<Record<string, boolean>>({
    vineet_kulshreshtha: true,
    rajnish_kaila: true
  });

  const toggleProfile = (id: string) => {
    setExpandedProfiles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCTA = (targetView: string) => {
    setView(targetView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whyMattersPoints = [
    '48+ years combined transformation experience',
    'TOC (Theory of Constraints) certified practitioners',
    '50+ successful implementations across diverse industries',
    'Proven results: 50%+ efficiency improvements, 50% cost reductions',
    'Deep Punjab manufacturing expertise with global perspective',
    'Implementation focus, not just theoretical consulting'
  ];

  const approachPoints = [
    'On-time performance improvements (from 41% to 99.4%)',
    'TOC results: 50% OTIF improvement, 50% PLT reduction',
    '50+ ServiceNow digital transformation implementations',
    '100+ Cr enterprise program management success',
    '20+ FTE savings unlocked through intelligent automation',
    'Multiple SAP S/4HANA global system integrations'
  ];

  const philosophyItems = [
    {
      title: 'ACCOUNTABILITY',
      desc: 'We measure our success by your results, not PowerPoint presentations.',
      icon: ShieldCheck
    },
    {
      title: 'PARTNERSHIP',
      desc: 'We work alongside your team, not as external advisors dictating change.',
      icon: Users
    },
    {
      title: 'KNOWLEDGE TRANSFER',
      desc: "We build your team's capabilities, not dependency on us.",
      icon: BookOpen
    },
    {
      title: 'LONG-TERM THINKING',
      desc: 'We implement solutions that deliver sustainable results, not quick wins.',
      icon: Activity
    },
    {
      title: 'HANDS-ON EXECUTION',
      desc: "We're on the factory floor, in the office, in the trenches—where real transformation happens.",
      icon: Award
    }
  ];

  return (
    <div id="leadership-view" className="pt-24 min-h-screen bg-[#FAF7F2] text-[#2F241A] font-sans pb-12">
      
      {/* SECTION 1: HERO/HEADER */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#115E59] to-[#0F766E] text-[#FAF7F2] py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-lg text-xxs font-mono uppercase tracking-widest text-amber-300">
            <Sparkles className="h-3 w-3 text-amber-400" />
            <span>Maynit Co-Founders Matrix</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-sans">
            Our Leadership Team
          </h1>
          <p className="text-lg sm:text-xl font-medium text-teal-100 max-w-2xl mx-auto tracking-normal">
            Experienced consultants driving measurable business transformation
          </p>
          <div className="h-1 w-20 bg-[#D97706] mx-auto rounded mt-4" />
          <p className="text-xs sm:text-sm text-teal-50 max-w-2xl mx-auto leading-relaxed pt-2">
            Meet the primary system architects who bring decades of combined experience across manufacturing, IT, healthcare, and more.
            We don't just advise—we implement alongside your team to engineer lasting operational excellence.
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-xxs sm:text-xs font-semibold text-slate-500 uppercase tracking-widest">
          <li>
            <button onClick={() => handleCTA('home')} className="hover:text-[#115E59] transition-colors">
              Home
            </button>
          </li>
          <li className="text-slate-300">/</li>
          <li className="text-[#115E59]">Leadership</li>
        </ol>
      </nav>

      {/* SECTION 2: LEADERSHIP OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-3xl border border-[#E6D9C5] shadow-md shadow-slate-205/40 p-6 sm:p-10">
          
          {/* Left Column: WHY OUR TEAM MATTERS */}
          <div className="space-y-5">
            <div className="space-y-2">
              <span className="text-xxs font-bold text-[#D97706] uppercase tracking-wider block font-mono">Real Expertise</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#115E59] tracking-tight">
                Why Maynit's Leadership Matters
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-semibold">
              In business transformation, expertise matters. Our co-founders bring boots-on-the-ground operational execution:
            </p>
            <ul className="space-y-3.5">
              {whyMattersPoints.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs text-slate-700 font-medium">
                  <div className="p-1 bg-[#115E59]/10 rounded-lg mt-0.5 shrink-0 text-[#115E59]">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: OUR APPROACH */}
          <div className="space-y-5 lg:border-l lg:border-[#E6D9C5] lg:pl-12">
            <div className="space-y-2">
              <span className="text-xxs font-bold text-[#D97706] uppercase tracking-wider block font-mono">Quantitative Results</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#115E59] tracking-tight">
                Proven Expertise & Results
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-semibold">
              Vineet Kulshreshtha and Rajnish Kaila deliver predictable operations architecture to scale Indian enterprise divisions:
            </p>
            <ul className="space-y-3.5">
              {approachPoints.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs text-slate-700 font-medium">
                  <div className="p-1 bg-[#D97706]/10 rounded-lg mt-0.5 shrink-0 text-[#D97706]">
                    <Check className="h-4 w-4 stroke-[3px]" />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* SECTION 3: LEADERSHIP PROFILES (Main Content - Vertical/Horizontal Detailed Rows) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xxs font-bold text-[#D97706] uppercase tracking-wider block font-mono font-bold">The Founders</span>
          <h2 className="text-3xl font-extrabold text-[#115E59] tracking-tight">
            Meet Our Transformation Directors
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto">
            Decades of senior leadership experience across ServiceNow cloud strategy, Theory of Constraints (TOC), and factory operations.
          </p>
        </div>

        {/* Horizontal Founder Row Layout */}
        <div className="space-y-12">
          {LEADERSHIP_DATA.map((leader: LeaderProfile, index: number) => {
            const isExpanded = expandedProfiles[leader.id] || false;
            const isVineet = leader.id === 'vineet_kulshreshtha';
            
            return (
              <div 
                key={leader.id}
                id={`leader-card-${leader.id}`}
                className="bg-[#FFFCF8] rounded-3xl border border-[#E6D9C5] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Column: Avatar & Quick Info Badge */}
                  <div className="lg:col-span-4 bg-[#FAF7F2] p-8 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-[#E6D9C5]">
                    <div className="relative mb-6">
                      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md relative group">
                        <img 
                          src={leader.photoUrl} 
                          alt={leader.name} 
                          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-teal-900/10 mix-blend-multiply" />
                      </div>
                      
                      {/* Certified Indicator badge on avatar */}
                      <span className="absolute bottom-1 right-2 bg-[#D97706]/95 text-[#FAF7F2] text-[9px] font-bold font-mono tracking-wider py-1 px-2.5 rounded-lg shadow">
                        TOC CERTIFIED
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-[#115E59] tracking-tight">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                      {leader.title}
                    </p>
                    
                    <div className="flex items-center space-x-1 text-slate-400 text-xxs font-mono uppercase tracking-widest mt-3">
                      <MapPin className="h-3 w-3 text-amber-500 shrink-0" />
                      <span>{leader.location}</span>
                    </div>

                    {/* Contact & Social Links */}
                    <div className="mt-6 pt-5 border-t border-[#E6D9C5] w-full flex flex-col space-y-2 text-xs font-semibold font-mono text-[#003366]">
                      {leader.email && (
                        <a 
                          href={`mailto:${leader.email}`} 
                          className="inline-flex items-center justify-center space-x-2 text-slate-600 hover:text-[#D97706] transition-colors py-1"
                        >
                          <Mail className="h-3.5 w-3.5 text-[#115E59]" />
                          <span className="text-[11px] truncate">{leader.email}</span>
                        </a>
                      )}
                      {leader.phone && (
                        <a 
                          href={`tel:${leader.phone}`} 
                          className="inline-flex items-center justify-center space-x-2 text-slate-600 hover:text-[#D97706] transition-colors py-1"
                        >
                          <Phone className="h-3.5 w-3.5 text-[#115E59]" />
                          <span className="text-[11px]">{leader.phone}</span>
                        </a>
                      )}
                      {leader.linkedin && (
                        <a 
                          href={leader.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center justify-center space-x-2 text-slate-600 hover:text-[#D97706] transition-colors py-1"
                        >
                          <Linkedin className="h-3.5 w-3.5 text-[#115E59]" />
                          <span className="text-[11px]">View LinkedIn Profile</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Bio details, core metrics badges, collapsible credentials */}
                  <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
                    
                    <div className="space-y-6">
                      {/* Metric highlights tags right at the top */}
                      <div className="flex flex-wrap gap-2.5">
                        <div className="bg-[#115E59]/5 border border-[#115E59]/10 rounded-xl py-2 px-3 flex.col items-start min-w-[120px]">
                          <span className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-wider">Experience</span>
                          <p className="text-base font-extrabold text-[#115E59] tracking-tight">{leader.experienceYears}+ Years</p>
                        </div>
                        {isVineet ? (
                          <>
                            <div className="bg-[#D97706]/5 border border-[#D97706]/10 rounded-xl py-2 px-3 min-w-[120px]">
                              <span className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-wider">On-Time OTIF</span>
                              <p className="text-base font-extrabold text-[#D97706] tracking-tight">41% → 99.4%</p>
                            </div>
                            <div className="bg-blue-55/5 border border-slate-200 rounded-xl py-2 px-3 min-w-[120px]">
                              <span className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-wider">Cost Reduction</span>
                              <p className="text-base font-extrabold text-slate-700 tracking-tight">50% Overheads</p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="bg-[#D97706]/5 border border-[#D97706]/10 rounded-xl py-2 px-3 min-w-[120px]">
                              <span className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-wider">ServiceNow Deployments</span>
                              <p className="text-base font-extrabold text-[#D97706] tracking-tight">50+ Projects</p>
                            </div>
                            <div className="bg-blue-55/5 border border-slate-200 rounded-xl py-2 px-3 min-w-[120px]">
                              <span className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-wider">Program Budgets</span>
                              <p className="text-base font-extrabold text-slate-700 tracking-tight">100+ Cr Managed</p>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Tagline sentence */}
                      <div className="border-l-4 border-[#D07706] pl-4">
                        <p className="text-sm font-semibold italic text-slate-700 leading-relaxed">
                          "{leader.tagline}"
                        </p>
                      </div>

                      {/* Primary Text Bio */}
                      <div className="text-sm text-slate-650 leading-relaxed font-semibold space-y-3">
                        <p>{leader.bioParagraphs[0]}</p>
                      </div>

                      {/* Modular accordion triggers */}
                      <div className="pt-2">
                        <button
                          id={`toggle-bio-${leader.id}`}
                          onClick={() => toggleProfile(leader.id)}
                          className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#115E59] hover:text-[#D97706] transition-colors focus:outline-none"
                        >
                          <span>{isExpanded ? 'Hide Professional Portfolio' : 'Reveal Credentials & Specializations'}</span>
                          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                      </div>

                      {/* Expandable detailed content section */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-[#E6D9C5]/50 grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
                              
                              {/* Col 1: Bio Part 2, Credentials & Education */}
                              <div className="space-y-4">
                                {leader.bioParagraphs[1] && (
                                  <div className="text-xs text-slate-600 leading-relaxed font-medium">
                                    <p>{leader.bioParagraphs[1]}</p>
                                  </div>
                                )}

                                <div>
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono block mb-2">
                                    Credentials & Certifications
                                  </span>
                                  <ul className="space-y-1.5 text-xs text-slate-700 font-semibold font-mono">
                                    {leader.credentials.map((cred, cIdx) => (
                                      <li key={cIdx} className="flex items-start space-x-2">
                                        <div className="p-0.5 bg-[#115E59]/10 rounded mt-0.5 text-[#115E59]">
                                          <Check className="h-3 w-3 stroke-[2.5]" />
                                        </div>
                                        <span className="text-[10px] leading-tight">{cred}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono block mb-1">
                                    Education Profile
                                  </span>
                                  <ul className="space-y-1 text-xs text-slate-700 font-semibold">
                                    {leader.education.map((edu, eIdx) => (
                                      <li key={eIdx} className="flex items-start space-x-2">
                                        <GraduationCap className="h-4 w-4 text-slate-400 mt-0.5 shrink-0" />
                                        <span className="text-[11px] font-mono">{edu}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              {/* Col 2: Core Expertise, Industries served & Achievements */}
                              <div className="space-y-4">
                                <div>
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono block mb-2">
                                    Core Consulting Expertise
                                  </span>
                                  <div className="flex flex-wrap gap-1">
                                    {leader.coreExpertise.map((exp, expIdx) => (
                                      <span 
                                        key={expIdx}
                                        className="bg-[#115E59]/10 text-[#115E59] text-[9px] font-bold px-2 py-1 rounded tracking-wide uppercase font-mono"
                                      >
                                        {exp}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono block mb-2">
                                    Sector Footprints & Expertise
                                  </span>
                                  <div className="grid grid-cols-2 gap-2 text-xxs text-slate-600 font-semibold font-mono">
                                    {leader.industriesServed.map((ind, indIdx) => (
                                      <div key={indIdx} className="bg-[#FAF7F2] p-2 rounded flex justify-between items-center border border-[#E6D9C5]/50">
                                        <span className="text-[#2F241A] truncate">{ind.name}</span>
                                        <span className="text-[#115E59] bg-[#115E59]/10 px-1.5 py-0.5 rounded shrink-0 font-bold">{ind.years}y</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="bg-[#115E59]/5 border border-[#115E59]/15 p-3 rounded space-y-2">
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#115E59] font-mono block">
                                    Key Measurable Achievements
                                  </span>
                                  <ul className="space-y-1.5">
                                    {leader.notableAchievements.map((ach, achIdx) => (
                                      <li key={achIdx} className="flex items-start space-x-2 text-xxs text-slate-700 font-semibold leading-relaxed">
                                        <span className="text-[#D97706] mt-0.5 shrink-0">✓</span>
                                        <span>{ach}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Beyond Work footnote */}
                    {leader.beyondWork && (
                      <div className="mt-6 pt-4 border-t border-[#E6D9C5]/50 flex items-start space-x-2 text-xxs text-slate-500 italic font-semibold">
                        <span>Beyond work, {leader.beyondWork}</span>
                      </div>
                    )}

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: LEADERSHIP PHILOSOPHY */}
      <section id="leadership_standards" className="bg-white border-y border-[#E6D9C5] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xxs font-bold text-[#D97706] uppercase tracking-wider block font-mono">Strategic Standards</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#115E59] tracking-tight">
              Our Leadership Philosophy
            </h2>
            <p className="text-xs text-slate-500 leading-normal max-w-md mx-auto">
              We separate ourselves from traditional advisors by driving strict accountability metrics through every level of the change process.
            </p>
          </div>

          {/* Principle columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {philosophyItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-[#FFFCF8] rounded border border-[#E6D9C5] p-5 flex flex-col space-y-3 shadow-none hover:shadow-sm hover:border-[#115E59]/40 transition-all duration-200"
                >
                  <div className="p-2 bg-[#115E59]/10 rounded text-[#115E59] w-fit">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xs font-extrabold text-[#115E59] uppercase tracking-wider font-mono">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 5: CALL-TO-ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-[#115E59] rounded-xl text-[#FAF7F2] p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-md">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xxs font-bold text-amber-400 uppercase tracking-widest font-mono block">
              COLLABORATE WITH EXPERTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Work with Experts Who Deliver Measurable Outcomes?
            </h2>
            <p className="text-xs sm:text-sm text-teal-150 leading-relaxed font-semibold">
              Schedule an on-site consultation with our co-founders today to review your business bottlenecks, inventory leaks, and automation gaps.
            </p>
            
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="leadership-cta-consultation"
                onClick={() => handleCTA('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#D97706] hover:bg-[#B45309] text-[#FAF7F2] text-xs font-bold uppercase tracking-widest rounded shadow transition-all duration-200"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-wider text-teal-200">
                <span>Or explore our:</span>
                <button 
                  onClick={() => handleCTA('approach')}
                  className="underline hover:text-[#FAF7F2] transition-colors"
                >
                  Approach
                </button>
                <span className="text-teal-400">|</span>
                <button 
                  onClick={() => handleCTA('services')}
                  className="underline hover:text-[#FAF7F2] transition-colors"
                >
                  Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
