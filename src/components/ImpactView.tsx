import React, { useState, useEffect } from 'react';
import { 
  TrendingDown, 
  Zap, 
  Clock, 
  Users, 
  Star, 
  ChevronRight, 
  Filter, 
  Flame, 
  ArrowRight,
  ClipboardList,
  FlameKindling
} from 'lucide-react';
import { METRICS, CASE_STUDIES, TESTIMONIALS } from '../data';

interface ImpactViewProps {
  setView: (view: string) => void;
}

export default function ImpactView({ setView }: ImpactViewProps) {
  const [selectedIndFilter, setSelectedIndFilter] = useState('All');
  const [selectedServFilter, setSelectedServFilter] = useState('All');

  // Animated-style numerical counters running inside React layout on mount
  const [costCount, setCostCount] = useState(0);
  const [efficiencyCount, setEfficiencyCount] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);
  const [prodCount, setProdCount] = useState(0);

  useEffect(() => {
    // Basic fluid numeric counter increase on first load
    const interval = setInterval(() => {
      setCostCount(prev => (prev < 30 ? prev + 1 : 30));
      setEfficiencyCount(prev => (prev < 40 ? prev + 1 : 40));
      setCycleCount(prev => (prev < 50 ? prev + 1 : 50));
      setProdCount(prev => (prev < 25 ? prev + 1 : 25));
    }, 25);
    return () => clearInterval(interval);
  }, []);

  const industriesList = ['All', 'Manufacturing', 'IT & Services', 'Healthcare'];
  const servicesList = ['All', 'Cost Optimization', 'Systems & Process Excellence', 'Business Excellence'];

  const filteredCaseStudies = CASE_STUDIES.filter((study) => {
    const indMatch = selectedIndFilter === 'All' || study.industry.toLowerCase() === selectedIndFilter.toLowerCase();
    
    // Map serviceId string keys back to filter headers loosely for matching
    let serviceLabel = '';
    if (study.serviceId === 'cost_optimization') serviceLabel = 'Cost Optimization';
    else if (study.serviceId === 'systems_excellence') serviceLabel = 'Systems & Process Excellence';
    else if (study.serviceId === 'business_excellence') serviceLabel = 'Business Excellence';

    const servMatch = selectedServFilter === 'All' || serviceLabel === selectedServFilter;
    return indMatch && servMatch;
  });

  const overallMetrics = [
    { value: `${costCount}%`, label: 'Total Sourced Cost Reductions', icon: TrendingDown, desc: 'Targeting unnecessary expenses.' },
    { value: `+${efficiencyCount}%`, label: 'Process Efficiency Increase', icon: Zap, desc: 'Eliminate waste/non-value add workflows.' },
    { value: `-${cycleCount}%`, label: 'Cycle Time Compression', icon: Clock, desc: 'Eradicating queuing and shipping bottlenecks.' },
    { value: `+${prodCount}%`, label: 'Workforce Productivity Increases', icon: Users, desc: 'Continuous standard work compliance.' }
  ];

  return (
    <div id="impact-page-container" className="pt-24 space-y-16 pb-12">
      
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-150 py-12 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xxs font-mono font-bold text-[#FF6B35] uppercase tracking-wider block mb-2">PROVEN RESULTS</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#003366] tracking-tight">
            Client Impact & Quantified Results
          </h1>
          <p className="text-xs md:text-sm text-slate-500 max-w-2xl mt-1.5 leading-relaxed font-semibold">
            Every process improvement intervention we launch is tracked and monitored, focusing exclusively on sustainable EBITDA growth.
          </p>
        </div>
      </section>

      {/* SECTION 1: NUMBERS METRIC CARDS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {overallMetrics.map((om, index) => (
            <div 
              key={index}
              id={`overall-metric-card-${index}`}
              className="bg-white border-t-2 border-t-[#003366] border border-slate-200 p-6 rounded text-left shadow-sm space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="p-2 bg-[#E6F3FF]/50 text-[#0066CC] rounded w-fit">
                  <om.icon className="h-4.5 w-4.5" />
                </div>
                <div className="text-3xl font-extrabold text-[#003366] font-mono tracking-tight">
                  {om.value}
                </div>
                <h4 className="font-extrabold text-[#003366] text-[10px] uppercase tracking-wider">
                  {om.label}
                </h4>
              </div>
              <p className="text-[10px] text-slate-400 font-mono italic pt-1 leading-normal font-semibold">{om.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: FILTERABLE CASE STUDIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4 border-b border-slate-200">
          <div className="space-y-1">
            <span className="text-xxs font-extrabold text-[#FF6B35] uppercase tracking-wider font-mono">
              CLIENT CASE HISTORIES
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-[#003366] tracking-tight">
              Detailed Case Studies ({filteredCaseStudies.length})
            </h3>
          </div>

          {/* Filtering Layout Dropdowns / Pills */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center space-x-2">
              <Filter className="h-3.5 w-3.5 text-slate-400 shrink-0" />
              <span className="font-bold text-slate-500 mr-1.5 font-mono uppercase tracking-wider text-[10px]">Sector:</span>
              <div className="flex space-x-1.5">
                {industriesList.map((indKey) => (
                  <button
                    key={indKey}
                    id={`filter-ind-${indKey}`}
                    onClick={() => setSelectedIndFilter(indKey)}
                    className={`px-3 py-1.5 font-bold rounded-sm text-[10px] uppercase tracking-wider transition-colors cursor-pointer ${
                      selectedIndFilter === indKey
                        ? 'bg-[#003366] text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {indKey}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2 border-l border-slate-200 pl-4">
              <span className="font-bold text-slate-550 mr-1.5 font-mono uppercase tracking-wider text-[10px]">Advisory Field:</span>
              <div className="flex space-x-1.5">
                {servicesList.map((servKey) => (
                  <button
                    key={servKey}
                    id={`filter-serv-${servKey.replace(/\s+/g, '-')}`}
                    onClick={() => setSelectedServFilter(servKey)}
                    className={`px-3 py-1.5 font-bold rounded-sm text-[10px] uppercase tracking-wider transition-colors cursor-pointer ${
                      selectedServFilter === servKey
                        ? 'bg-[#003366] text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-705'
                    }`}
                  >
                    {servKey.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic List Rendering */}
        {filteredCaseStudies.length === 0 ? (
          <div className="p-12 text-center bg-slate-50 border border-dashed border-slate-200 rounded">
            <ClipboardList className="h-8 w-8 text-slate-400 mx-auto mb-2" />
            <p className="text-xs font-bold text-slate-600">No matching case studies for active operational filter combination.</p>
            <button 
              id="clear-filters-btn"
              onClick={() => { setSelectedIndFilter('All'); setSelectedServFilter('All'); }}
              className="text-xs font-extrabold text-blue-600 hover:underline mt-2 inline-block focus:outline-none cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCaseStudies.map((study) => (
              <div
                key={study.id}
                id={`case-study-grid-card-${study.id}`}
                className="bg-white border hover:border-[#0066CC] border-slate-200 rounded p-5 shadow-sm space-y-4 flex flex-col justify-between transition-colors"
              >
                <div className="space-y-3 font-semibold text-left">
                  <div className="flex items-center justify-between text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest leading-none">
                    <span>{study.industry} sector</span>
                    <span className="bg-[#E6F3FF] text-[#0066CC] px-2 py-0.5 rounded border border-[#0066CC]/15 font-semibold">Verified Outcome</span>
                  </div>
                  
                  <h4 className="font-extrabold text-sm text-[#003366] leading-snug hover:text-[#0066CC] transition-colors">
                    {study.title}
                  </h4>
                  
                  <p className="text-[10px] text-slate-400 uppercase font-mono tracking-wide">
                    Client: {study.clientType}
                  </p>

                  <div className="space-y-1 text-left text-xs">
                    <p className="font-extrabold text-rose-600 text-[9px] uppercase tracking-wider font-mono">The Friction Point:</p>
                    <p className="text-slate-600 text-xxs leading-relaxed line-clamp-3">{study.challenge}</p>
                  </div>

                  <div className="space-y-1 text-left text-xs">
                    <p className="font-extrabold text-[#0066CC] text-[9px] uppercase tracking-wider font-mono">Process Solution Strategy:</p>
                    <p className="text-slate-600 text-xxs leading-relaxed line-clamp-3">{study.solution}</p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-3 space-y-2 text-left">
                  <p className="font-extrabold text-[#FF6B35] text-xxs uppercase tracking-wider font-mono">EBITDA Realized Gains:</p>
                  <ul className="space-y-1 font-semibold text-xxs text-slate-800">
                    {study.results.slice(0, 2).map((res, i) => (
                      <li key={i} className="flex items-start space-x-1.5">
                        <span className="text-[#28A745] shrink-0 font-bold">✓</span>
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* SECTION 3: CLIENT TESTIMONIALS */}
      <section className="bg-slate-50 py-16 border-y border-slate-150 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xxs font-bold text-[#FF6B35] uppercase tracking-widest font-mono">DIRECT VERIFICATIONS</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#003366] tracking-tight">
              Testimonials from Executives
            </h3>
            <p className="text-xs text-slate-500 leading-normal max-w-sm mx-auto font-medium">
              Hear firsthand feedback from Chief Operating Officers, Managing Directors, and Business Owners who partnered with our process engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                id={`testimonial-bubble-${test.id}`}
                className="bg-white rounded border border-slate-200 p-5 shadow-sm space-y-4 flex flex-col justify-between text-left"
              >
                <div className="space-y-3">
                  {/* Star Rating */}
                  <div className="flex space-x-0.5 text-amber-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs italic text-slate-600 leading-normal font-semibold text-left">
                    "{test.quote}"
                  </p>
                </div>

                <div className="border-t border-slate-105 pt-3 space-y-1.5 text-left">
                  <div>
                    <h5 className="font-extrabold text-[#003366] text-xs leading-none text-left">
                      {test.name}
                    </h5>
                    <p className="text-[9px] text-slate-400 mt-1 uppercase font-mono tracking-wider leading-none font-bold">
                      {test.role}, {test.company}
                    </p>
                  </div>
                  
                  <div className="p-2 bg-slate-50 rounded border border-slate-100 space-y-0.5 text-left rounded-sm">
                    <p className="text-[9px] text-slate-400 font-mono uppercase tracking-wide leading-none font-bold">Target Program:</p>
                    <p className="text-[10px] font-extrabold text-blue-800 tracking-tight leading-normal truncate">{test.serviceReceived}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section bottom */}
      <section className="bg-[#003366] text-white py-12 text-center rounded max-w-7xl mx-auto px-4">
        <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">Initiate Your Operational Diagnostic Today</h3>
        <p className="text-[10px] text-slate-300 font-mono mt-1 uppercase tracking-widest font-semibold">Set up a confidential 30-minute operational scoping assessment</p>
        <button
          id="impact-cta-btn"
          onClick={() => { setView('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="mt-5 px-6 py-3 bg-[#FF6B35] hover:bg-[#e85a2a] text-white text-xs font-bold uppercase tracking-widest rounded shadow transition-all duration-200 focus:outline-none"
        >
          Request Consultation
        </button>
      </section>

    </div>
  );
}
