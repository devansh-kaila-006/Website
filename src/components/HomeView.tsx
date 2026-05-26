import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  TrendingDown, 
  Zap, 
  Clock, 
  Users, 
  Award, 
  DollarSign, 
  Workflow, 
  Briefcase, 
  Lightbulb, 
  ArrowRight, 
  ChevronRight,
  ShieldCheck,
  BarChart3,
  Shuffle,
  Repeat,
  Factory,
  Laptop,
  HeartPulse,
  Truck,
  Store
} from 'lucide-react';
import { METRICS, VALUE_PROPS, SERVICES_DATA, APPROACH_STAGES, INDUSTRIES_DATA } from '../data';

interface HomeViewProps {
  setView: (view: string) => void;
  setSelectedServiceId?: (id: string | null) => void;
}

export default function HomeView({ setView, setSelectedServiceId }: HomeViewProps) {
  const [activeApproachStep, setActiveApproachStep] = useState(0);

  const iconMap: { [key: string]: React.ElementType } = {
    TrendingDown, Zap, Clock, Users, Award, DollarSign, Workflow, Briefcase, Lightbulb, Factory, Laptop, HeartPulse, Truck, Store, ShieldCheck, BarChart3, Shuffle, Repeat
  };

  const handleServiceClick = (serviceId: string) => {
    if (setSelectedServiceId) {
      setSelectedServiceId(serviceId);
    }
    setView('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="home-view-container" className="space-y-20 pb-4">
      
      {/* SECTION 1: HERO */}
      <section 
        id="hero-section" 
        className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-white via-[#E6F3FF]/40 to-[#E6F3FF] text-slate-900 pt-28 overflow-hidden px-4"
      >
        {/* Abstract vector flow background accent */}
        <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
          <svg className="absolute top-10 right-0 w-1/2 h-full text-blue-100/60" fill="none" viewBox="0 0 100 100">
            <path d="M0,50 Q25,20 50,50 T100,50" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M0,30 Q25,0 50,30 T100,30" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M0,70 Q25,40 50,70 T100,70" stroke="currentColor" strokeWidth="0.25" fill="none" strokeDasharray="2,2" />
          </svg>
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/8 left-10 w-[300px] h-[300px] bg-[#E6F3FF]/40 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-10">
          
          {/* Hero Left: Text copy and CTA buttons */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center space-x-2 px-3 py-1 bg-white border border-slate-100 rounded text-[10px] font-bold text-[#0066CC] tracking-widest uppercase font-mono shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35] animate-pulse"></span>
              <span>MANAGEMENT CONSULTING PARTNER</span>
            </span>
            
            <h1 className="text-3xl sm:text-5xl lg:text-5.5xl font-extrabold tracking-tight text-[#003366] leading-[1.15] sm:leading-[1.1]">
              Driving Business, System & <br className="hidden sm:inline" /><span className="text-[#0066CC]">Process Excellence</span>
            </h1>
            
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
              Enabling partner organizations to achieve operations efficiency, permanent cost leadership, and sustainable market expansion through structured process transformation, workforce alignment, and technology integration.
            </p>
 
            {/* Premium Clean Minimalism Stats Strip - Fully optimized for phone stacked layouts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md w-full pt-1">
              <div className="bg-white px-5 py-3 rounded shadow-sm border border-slate-100 flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#28A745]">↓30%</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 font-mono leading-tight">Cost<br/>Reduction</span>
              </div>
              <div className="bg-white px-5 py-3 rounded shadow-sm border border-slate-100 flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#28A745]">↑40%</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 font-mono leading-tight">Process<br/>Efficiency</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                id="hero-primary-cta"
                onClick={() => { setView('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-6 py-3 bg-[#FF6B35] hover:bg-[#e85a2a] text-white text-xs font-bold uppercase tracking-widest rounded shadow hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Partner With Us</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                id="hero-secondary-cta"
                onClick={() => { setView('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-6 py-3 bg-white border border-slate-100 hover:border-slate-300 text-[#003366] text-xs font-bold uppercase tracking-widest rounded shadow-sm hover:bg-slate-50 transition-all duration-150 text-center"
              >
                Explore Our Solutions
              </button>
            </div>
          </div>

          {/* Hero Right: Interactive Dashboard Widget & Metrics */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            <div id="hero-diagnostic-preview" className="w-full bg-white rounded-xl border border-slate-100 p-6 sm:p-7 shadow-lg max-w-md relative">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-sm bg-[#FF6B35]"></div>
                  <span className="text-xxs font-extrabold text-[#003366] uppercase tracking-widest font-mono">Live Impact Tracker</span>
                </div>
                <span className="text-[9px] text-slate-400 uppercase font-mono font-bold tracking-tight">Verified Benchmarks</span>
              </div>

              <div className="space-y-3">
                {METRICS.map((metric) => {
                  const IconComp = iconMap[metric.icon || 'Zap'];
                  return (
                    <div 
                      key={metric.id}
                      id={`hero-metric-card-${metric.id}`}
                      className="p-3 bg-slate-50/70 hover:bg-[#E6F3FF]/40 rounded border border-slate-100 hover:border-blue-100 transition-all duration-200 flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3 text-left">
                        <div className="p-2 bg-white rounded border border-slate-100 text-[#0066CC] shadow-sm shrink-0">
                          {IconComp && <IconComp className="h-4 w-4" />}
                        </div>
                        <div>
                          <p className="text-[10px] font-extrabold text-[#003366] uppercase tracking-wider leading-none">{metric.label}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{metric.description}</p>
                        </div>
                      </div>
                      <div className="text-right ml-2 shrink-0">
                        <span className="block text-base font-extrabold text-[#003366] font-mono tracking-tight">{metric.value}</span>
                        <span className="block text-[8px] font-bold text-[#28A745] uppercase tracking-widest font-mono">Verified</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Minimal quote badge as integrated block */}
              <div className="mt-4 p-3.5 bg-[#003366] rounded-lg text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                <div className="relative">
                  <div className="w-8 h-[2px] bg-[#FF6B35] mx-auto mb-2"></div>
                  <p className="text-xxs text-slate-100 leading-relaxed font-medium italic">
                    "Transforming complexity into clarity. Driving measurable impact."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Soft decorative background elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#E6F3FF]/70 rounded-full blur-xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-50/80 rounded-full blur-xl -z-10"></div>
          </div>

        </div>
      </section>

      {/* SECTION 2: TRUST INDICATORS BAR */}
      <section id="trust-indicator-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded border border-slate-200 p-6 shadow-sm">
          <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 font-mono">
            Trusted by organizations across dynamic vertical sectors
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center text-center">
            {['Manufacturing Grid', 'Services Consortium', 'Logistics Network', 'Healthcare Union', 'Retail Coalition'].map((logo, index) => (
              <div 
                key={index} 
                className="px-4 py-2.5 bg-slate-50 rounded border border-slate-150 text-[11px] font-extrabold text-slate-500 uppercase tracking-wider select-none hover:text-[#0066CC] hover:bg-[#E6F3FF]/40 hover:border-[#0066CC]/30 transition-all duration-200"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: VALUE PROPOSITION ("Why Us") */}
      <section id="why-us-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xxs font-bold text-[#FF6B35] uppercase tracking-wider block">Our Competitive Advantage</span>
          <h2 className="text-3xl font-extrabold text-[#003366] tracking-tight">
            We Don't Just Advise — We Transform
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-normal">
            Unlike standard advisory agencies sending templates from afar, we embed directly with frontline and leadership teams to co-create sustainable gains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PROPS.map((prop) => {
            const IconComp = iconMap[prop.iconName];
            return (
              <div
                key={prop.id}
                id={`value-prop-${prop.id}`}
                className="bg-white border border-slate-200 hover:border-[#0066CC] p-5 rounded shadow-sm hover:shadow transition-all duration-200 group flex flex-col text-left"
              >
                <div className="p-2.5 bg-slate-50 text-[#0066CC] rounded-sm inline-block w-fit mb-4 group-hover:bg-[#FF6B35] group-hover:text-white transition-colors duration-200">
                  {IconComp && <IconComp className="h-4.5 w-4.5" />}
                </div>
                <h3 className="font-extrabold text-[#003366] text-[15px] mb-1.5 group-hover:text-[#0066CC] transition-colors">
                  {prop.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed flex-grow font-medium">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: CORE SERVICES PREVIEW */}
      <section id="services-preview-section" className="bg-[#F8FAFC] py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div className="space-y-2 text-left">
              <span className="text-xxs font-bold text-[#FF6B35] uppercase tracking-wider block mb-1">WHAT WE SPECIALIZE IN</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#003366] tracking-tight">
                High-Impact Advisory Solutions (7)
              </h3>
            </div>
            <button
              id="services-view-all-btn"
              onClick={() => { setView('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="mt-4 md:mt-0 inline-flex items-center space-x-1.5 text-xs font-bold text-[#0066CC] hover:text-[#FF6B35] transition-colors uppercase tracking-widest font-mono focus:outline-none"
            >
              <span>View precise specifications</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service) => {
              const IconComp = iconMap[service.iconName];
              return (
                <div
                  key={service.id}
                  id={`service-preview-card-${service.id}`}
                  onClick={() => handleServiceClick(service.id)}
                  className="bg-white border-l-2 border-[#0066CC] border-y border-r border-slate-150 p-6 rounded-r shadow-sm hover:shadow hover:border-l-[#003366] cursor-pointer transition-all duration-205 group text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-slate-50 text-slate-700 rounded-sm group-hover:bg-[#E6F3FF]/60 group-hover:text-[#0066CC] transition-colors">
                        {IconComp && <IconComp className="h-4.5 w-4.5" />}
                      </div>
                      <span className="text-[9px] font-mono font-bold text-slate-400 group-hover:text-[#0066CC] uppercase tracking-widest">
                        Explore
                      </span>
                    </div>
                    <h4 className="font-extrabold text-[#003366] text-base mb-1.5 group-hover:text-[#0066CC] transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
                      {service.shortDescription}
                    </p>
                  </div>
                  <div className="flex items-center text-xs font-semibold text-[#0066CC] group-hover:text-[#FF6B35] transition-colors pt-3 border-t border-slate-100">
                    <span>Analyze Service Parameters</span>
                    <ChevronRight className="h-3.5 w-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR APPROACH PREVIEW (Interactive) */}
      <section id="approach-preview-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xxs font-bold text-[#FF6B35] uppercase tracking-wider block">OUR PROTOCOLS</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#003366] tracking-tight">
            Our 4-Step Transformation Pathway
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-normal">
            We follow a rigorous, repeatable operational lifecycle to take businesses from structural diagnosis to long-term standalone success.
          </p>
        </div>

        {/* Step Tabs header */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-slate-100 p-1.5 rounded border border-slate-200">
          {APPROACH_STAGES.map((stage, idx) => (
            <button
              key={stage.id}
              id={`approach-step-tab-${idx}`}
              onClick={() => setActiveApproachStep(idx)}
              className={`py-3 px-4 text-center rounded font-semibold text-xs transition-all duration-150 focus:outline-none ${
                activeApproachStep === idx
                  ? 'bg-white text-[#003366] shadow-sm border border-slate-200'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50/50'
              }`}
            >
              <div className="text-[9px] uppercase tracking-widest font-mono font-bold text-slate-400">Step 0{idx + 1}</div>
              <div className="font-extrabold truncate uppercase text-[11px] mt-0.5">{stage.title}</div>
            </button>
          ))}
        </div>

        {/* Step content presentation */}
        <div className="bg-white rounded border border-slate-200 p-6 md:p-8 shadow-sm text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-slate-400 font-mono font-bold text-lg">0{APPROACH_STAGES[activeApproachStep].number}.</span>
              <h4 className="text-xl md:text-2xl font-extrabold text-[#003366]">
                {APPROACH_STAGES[activeApproachStep].title} Stage
              </h4>
            </div>
            
            <p className="text-xs font-bold text-[#0066CC] font-mono uppercase tracking-wide">
              "{APPROACH_STAGES[activeApproachStep].oneLiner}"
            </p>
            
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              {APPROACH_STAGES[activeApproachStep].description}
            </p>

            <div className="space-y-2 pt-2">
              <p className="text-xs font-bold text-[#003366] uppercase tracking-wider font-mono">Core Actions:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {APPROACH_STAGES[activeApproachStep].details.slice(0, 4).map((detail, index) => (
                  <li key={index} className="flex items-start space-x-2 text-xs text-slate-600 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35] mt-1.5 shrink-0"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-50 rounded p-5 border border-slate-150 flex flex-col justify-between h-full">
            <div className="space-y-3 text-left">
              <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Core Deliverable:</span>
              <p className="text-xs text-slate-700 leading-relaxed font-bold">
                {APPROACH_STAGES[activeApproachStep].output}
              </p>
            </div>
            {APPROACH_STAGES[activeApproachStep].metric && (
              <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider">Milestone target:</span>
                <span className="text-xs font-bold text-[#28A745] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-150 self-start sm:self-auto max-w-full text-left">{APPROACH_STAGES[activeApproachStep].metric}</span>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            id="approach-preview-spec-btn"
            onClick={() => { setView('approach'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider font-mono border-b border-dashed border-slate-400"
          >
            <span>See detailed implementation blueprint</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>

      {/* SECTION 6: INDUSTRIES SERVED */}
      <section id="industries-preview-section" className="bg-[#003366] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xxs font-bold text-[#FF6B35] uppercase tracking-wider block font-mono">VERTICALS SERVED</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Deep Sector Specialization
            </h3>
            <p className="text-slate-200 text-xs font-medium">
              We translate process excellence metrics across highly specialized business ecosystems to secure fast operational returns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {INDUSTRIES_DATA.map((ind) => {
              const IconComp = iconMap[ind.iconName];
              return (
                <div
                  key={ind.id}
                  id={`industry-pill-${ind.id}`}
                  onClick={() => { setView('industries'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="bg-white/5 border border-white/10 hover:border-white/20 p-5 rounded-sm hover:bg-white/[0.08] cursor-pointer transition-all duration-150 text-left flex flex-col justify-between"
                >
                  <div className="p-2 bg-white/10 text-[#FF6B35] rounded-sm w-fit mb-4">
                    {IconComp && <IconComp className="h-4 w-4" />}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#E6F3FF] text-xs uppercase tracking-wide mb-1 leading-snug">
                      {ind.name}
                    </h4>
                    <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                      {ind.overview}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA LIMITS */}
      <section id="home-last-cta-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-[#003366] text-white rounded p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
          
          {/* Subtle decoration vector */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"></div>

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl sm:text-3.5xl font-extrabold tracking-tight">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-lg mx-auto leading-relaxed">
              Let's build a smarter, faster, and permanently more efficient operational organization together. Set up your discovery call now.
            </p>
            <div className="pt-2">
              <button
                id="home-final-cta-btn"
                onClick={() => { setView('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#FF6B35] hover:bg-[#e85a2a] text-white text-xs font-bold uppercase tracking-widest rounded shadow hover:shadow-lg transition-all"
              >
                <span>Request Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <p className="text-[9px] text-slate-300 uppercase font-mono tracking-widest pt-2">
              No obligation introductory discovery call • Response within 24 hours
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
