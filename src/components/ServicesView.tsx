import React, { useState, useEffect } from 'react';
import { 
  Award, 
  DollarSign, 
  Workflow, 
  Users, 
  Briefcase, 
  Zap, 
  Lightbulb, 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle, 
  TrendingUp, 
  ChevronRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { SERVICES_DATA } from '../data';

interface ServicesViewProps {
  selectedServiceId: string | null;
  setSelectedServiceId: (id: string | null) => void;
  setView: (view: string) => void;
}

export default function ServicesView({ 
  selectedServiceId, 
  setSelectedServiceId, 
  setView 
}: ServicesViewProps) {
  
  // Set default view to 'business_excellence' if nothing is pre-selected
  const currentServiceId = selectedServiceId || 'business_excellence';
  const activeService = SERVICES_DATA.find(s => s.id === currentServiceId) || SERVICES_DATA[0];

  // Accordion state to track which components are expanded
  const [expandedComponents, setExpandedComponents] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    // Reset accordions to expanded on service switch for easier reading
    const initialAccordions: { [key: string]: boolean } = {};
    activeService.components.forEach((_, idx) => {
      initialAccordions[`${activeService.id}-${idx}`] = true;
    });
    setExpandedComponents(initialAccordions);
  }, [currentServiceId]);

  const toggleComponent = (key: string) => {
    setExpandedComponents(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const iconMap: { [key: string]: React.ElementType } = {
    Award, DollarSign, Workflow, Users, Briefcase, Zap, Lightbulb
  };

  const handleDiscussService = (serviceTitle: string) => {
    setView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRelatedNav = (srvId: string) => {
    setSelectedServiceId(srvId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="services-page-container" className="pt-24 space-y-12 pb-12">
      
      {/* Services Header */}
      <section className="bg-slate-50 border-b border-slate-150 py-12 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xxs font-mono font-bold text-[#FF6B35] uppercase tracking-wider block mb-2">OUR CAPABILITIES</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#003366] tracking-tight">
            Comprehensive Operational Services (7)
          </h1>
          <p className="text-xs md:text-sm text-slate-500 max-w-2xl mt-1.5 leading-relaxed font-semibold">
            Discover our tailored operational frameworks designed to optimize costs, streamline systems, upskill workforces, and accelerate cycle times.
          </p>
        </div>
      </section>

      {/* Main interactive split panel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Service List Sidebar selector */}
          <div className="lg:col-span-4 bg-slate-50 rounded p-4 border border-slate-200 space-y-2">
            <h3 className="text-[10px] font-extrabold font-mono text-slate-400 uppercase tracking-widest pl-3 mb-3">
              Service Directory
            </h3>
            
            <div className="space-y-1.5">
              {SERVICES_DATA.map((service) => {
                const IconComp = iconMap[service.iconName];
                const isActive = service.id === activeService.id;
                return (
                  <button
                    key={service.id}
                    id={`sidebar-select-service-${service.id}`}
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`w-full flex items-center space-x-3 p-3.5 rounded text-left text-xs font-bold transition-all duration-155 cursor-pointer ${
                      isActive
                        ? 'bg-[#003366] text-white shadow-sm'
                        : 'text-slate-705 hover:text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    <div className={`p-1.5 rounded ${isActive ? 'bg-white/15 text-white' : 'bg-slate-200 text-slate-500'}`}>
                      {IconComp && <IconComp className="h-4 w-4" />}
                    </div>
                    <span className="truncate flex-grow">{service.title}</span>
                    <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${isActive ? 'translate-x-0.5 text-white' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-6 mt-4 border-t border-slate-200 space-y-3 px-2">
              <p className="text-[10px] uppercase font-extrabold text-[#003366] font-mono tracking-widest">Confidential Advisory</p>
              <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                All client metrics, organizational designs, and transformation blueprints are secured under rigorous non-disclosure agreements (NDAs).
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Selected Service Specification template */}
          <div className="lg:col-span-8 bg-white rounded border border-slate-200 p-6 md:p-8 shadow-sm space-y-8 animate-in fade-in duration-250">
            
            {/* Header portion */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-5 gap-4 text-left">
              <div className="flex items-center space-x-3.5">
                <div className="p-2.5 bg-[#E6F3FF]/50 text-[#0066CC] rounded">
                  {React.createElement(iconMap[activeService.iconName] || Award, { className: "h-6.5 w-6.5" })}
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#003366] tracking-tight">
                    {activeService.title}
                  </h2>
                  <p className="text-[10px] text-[#0066CC] uppercase font-extrabold tracking-widest font-mono mt-0.5">
                    Professional Operational Specification
                  </p>
                </div>
              </div>
              
              <button
                id={`discuss-service-top-btn-${activeService.id}`}
                onClick={() => handleDiscussService(activeService.title)}
                className="px-4 py-2 bg-[#FF6B35] hover:bg-[#e85a2a] text-white text-xs font-bold uppercase tracking-wider rounded shadow transition-all duration-150 inline-flex items-center space-x-1.5 focus:outline-none cursor-pointer shrink-0"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                <span>Discuss Program</span>
              </button>
            </div>

            {/* Model Overview (2-3 sentences) */}
            <div className="space-y-2 text-left">
              <h4 className="text-[10px] font-extrabold font-mono text-slate-400 uppercase tracking-widest">
                Service Overview
              </h4>
              <p className="text-xs md:text-sm text-slate-650 leading-relaxed font-semibold">
                {activeService.longDescription}
              </p>
            </div>

            {/* Detailed components Accordion section */}
            <div className="space-y-3 text-left">
              <h4 className="text-[10px] font-extrabold font-mono text-slate-400 uppercase tracking-widest mb-1">
                Core Program Components (Details)
              </h4>
              <div className="space-y-2.5">
                {activeService.components.map((comp, idx) => {
                  const compKey = `${activeService.id}-${idx}`;
                  const isExpanded = !!expandedComponents[compKey];
                  return (
                    <div 
                      key={idx} 
                      className="border border-slate-150 rounded overflow-hidden bg-slate-50 hover:bg-slate-100/50 transition-colors"
                    >
                      <button
                        id={`accordion-toggle-${compKey}`}
                        onClick={() => toggleComponent(compKey)}
                        className="w-full flex items-center justify-between p-3.5 text-left text-xs font-extrabold text-[#003366] focus:outline-none cursor-pointer"
                      >
                        <span className="pr-4">{comp.title}</span>
                        {isExpanded ? <ChevronUp className="h-4 w-4 text-[#003366] shrink-0" /> : <ChevronDown className="h-4 w-4 text-[#003366] shrink-0" />}
                      </button>
                      
                      {isExpanded && (
                        <div className="px-4 pb-4.5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5 bg-white text-left font-semibold">
                          {comp.description}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Problems resolved Grid */}
            <div className="space-y-3 text-left">
              <h4 className="text-[10px] font-extrabold font-mono text-slate-400 uppercase tracking-widest">
                Operational Problems Solved
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {activeService.problemsSolved.map((problem, idx) => (
                  <div key={idx} className="flex space-x-2.5 p-3.5 bg-rose-50/25 rounded border border-rose-100/50 text-left">
                    <AlertTriangle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-700 leading-normal font-semibold">
                      {problem}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes & Metrics Banner */}
            <div className="space-y-3 text-left">
              <h4 className="text-[10px] font-extrabold font-mono text-slate-400 uppercase tracking-widest">
                Target Improvement Metrics
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeService.outcomes.map((out, idx) => (
                  <div key={idx} className="p-4 bg-[#E6F3FF]/30 text-slate-900 rounded border border-[#0066CC]/15 flex items-center space-x-3.5 text-left">
                    <div className="text-2xl font-extrabold text-[#0066CC] font-mono tracking-tight shrink-0">
                      {out.metric}
                    </div>
                    <p className="text-xs font-bold text-[#003366] leading-snug">
                      {out.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related services Cross-linking */}
            <div className="pt-6 border-t border-slate-150 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-4 text-left">
              <div className="flex flex-wrap items-center gap-1.5 text-left">
                <span className="font-extrabold text-slate-400 font-mono uppercase tracking-widest mr-1.5 text-[10px]">Related Solutions:</span>
                {activeService.relatedServices.map((srvId) => {
                  const targetSrv = SERVICES_DATA.find(s => s.id === srvId);
                  if (!targetSrv) return null;
                  return (
                    <button
                      key={srvId}
                      id={`cross-link-btn-${srvId}`}
                      onClick={() => handleRelatedNav(srvId)}
                      className="px-2.5 py-1 bg-slate-50 hover:bg-[#E6F3FF] hover:text-[#0066CC] rounded text-[10px] font-bold text-slate-650 border border-slate-200 transition-colors cursor-pointer"
                    >
                      {targetSrv.title}
                    </button>
                  );
                })}
              </div>
              
              <button
                id="services-back-about-btn"
                onClick={() => setView('approach')}
                className="text-[#FF6B35] font-bold inline-flex items-center space-x-1 hover:underline text-xs cursor-pointer"
              >
                <span>Review Our Approach</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
