import React, { useState } from 'react';
import { 
  Factory, 
  Laptop, 
  HeartPulse, 
  Truck, 
  Store, 
  AlertOctagon, 
  CheckCircle, 
  TrendingUp, 
  ArrowRight,
  ShieldAlert,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { INDUSTRIES_DATA, SERVICES_DATA } from '../data';

interface IndustriesViewProps {
  setView: (view: string) => void;
  setSelectedServiceId: (id: string | null) => void;
  activeIndustryId?: string;
  setActiveIndustryId?: (id: string) => void;
}

export default function IndustriesView({ 
  setView, 
  setSelectedServiceId,
  activeIndustryId,
  setActiveIndustryId
}: IndustriesViewProps) {
  const [internalTab, setInternalTab] = useState('manufacturing');
  const activeIndTab = activeIndustryId || internalTab;
  const setActiveIndTab = setActiveIndustryId || setInternalTab;

  const iconMap: { [key: string]: React.ElementType } = {
    Factory, Laptop, HeartPulse, Truck, Store
  };

  const activeInd = INDUSTRIES_DATA.find(i => i.id === activeIndTab) || INDUSTRIES_DATA[0];

  const handleSolutionServiceNav = (srvId: string) => {
    setSelectedServiceId(srvId);
    setView('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="industries-page-container" className="pt-24 space-y-12 pb-12">
      
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-150 py-12 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xxs font-mono font-bold text-[#FF6B35] uppercase tracking-wider block mb-2">VERTICAL MARKETS</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#003366] tracking-tight">
            Vertical Markets Served
          </h1>
          <p className="text-xs md:text-sm text-slate-500 max-w-2xl mt-1.5 leading-relaxed font-semibold">
            We adapt process engineering protocols to survive key operational boundaries inside manufacturing, tech systems, logistics, clinical loops, and retail chains.
          </p>
        </div>
      </section>

      {/* HORIZONTAL TAB SWITCHER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 relative z-0">
          {INDUSTRIES_DATA.map((ind) => {
            const IndIconComp = iconMap[ind.iconName];
            const isSelected = activeIndTab === ind.id;
            
            return (
              <button
                key={ind.id}
                id={`industry-select-tab-${ind.id}`}
                onClick={() => setActiveIndTab(ind.id)}
                className={`relative flex items-center justify-center space-x-2 py-3 px-3 rounded-xl font-bold text-xs transition-colors duration-200 cursor-pointer focus:outline-none select-none ${
                   isSelected
                    ? 'text-white font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="activeIndustryTabPill"
                    className="absolute inset-0 bg-[#003366] rounded-xl shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {IndIconComp && <IndIconComp className="h-4 w-4 shrink-0 relative z-10" />}
                <span className="truncate relative z-10">{ind.name.split(' & ')[0]}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ACTIVE INDUSTRY CONTENT CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-md space-y-8 text-left"
          >
          
          {/* Industry Banner Title */}
          <div className="flex items-center space-x-3 pb-5 border-b border-slate-100">
            <div className="p-2.5 bg-[#E6F3FF]/50 text-[#0066CC] rounded-lg">
              {React.createElement(iconMap[activeInd.iconName] || Factory, { className: "h-5 w-5" })}
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-[#003366] tracking-tight leading-none">
                {activeInd.name} Sector
              </h2>
              <p className="text-[10px] text-slate-400 font-mono mt-1.5 uppercase tracking-widest font-bold">
                Industrial Operational Specifications
              </p>
            </div>
          </div>

          {/* Core Overview text paragraph */}
          <div className="space-y-2">
            <h4 className="text-[10px] font-extrabold font-mono text-slate-400 uppercase tracking-widest">
              Industry Footprint Description
            </h4>
            <p className="text-xs md:text-sm text-slate-650 leading-relaxed font-semibold">
              {activeInd.overview}
            </p>
          </div>

          {/* SPLIT LAYOUT: Challenge vs Solution columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            
            {/* Common industrial Challenges */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-rose-600 font-extrabold text-[11px] uppercase tracking-wider font-mono">
                <ShieldAlert className="h-4 w-4" />
                <span>Sector Performance Friction Points</span>
              </div>
              
              <div className="space-y-2.5">
                {activeInd.challenges.map((challenge, idx) => (
                  <div key={idx} className="p-3.5 bg-rose-50/30 border border-rose-100 rounded-xl text-xs text-slate-700 leading-relaxed flex items-start space-x-2.5 text-left">
                    <span className="h-4.5 w-4.5 rounded-full bg-rose-100 text-rose-700 text-3xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      !
                    </span>
                    <span className="font-semibold">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our customized Solutions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[#28A745] font-extrabold text-[11px] uppercase tracking-wider font-mono">
                <CheckCircle className="h-4 w-4" />
                <span>Tailored Deployment Solutions</span>
              </div>
              
              <div className="space-y-2.5">
                {activeInd.solutions.map((sol, idx) => (
                  <div key={idx} className="p-3.5 bg-emerald-50/20 border border-emerald-100 rounded-xl text-xs text-slate-700 leading-relaxed flex items-start space-x-2.5 text-left">
                    <span className="h-4.5 w-4.5 rounded-full bg-emerald-100 text-emerald-700 text-3xs font-bold flex items-center justify-center shrink-0 mt-0.5 animate-pulse">
                      ✓
                    </span>
                    <span className="font-semibold">{sol}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Operational metrics generated in Sector */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h4 className="text-[10px] font-extrabold font-mono text-slate-400 tracking-wider">
              AVERAGE DELIVERED RESULTS (BY INDUSTRY METRICS)
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeInd.metrics.map((m, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-150 flex items-center justify-between text-left">
                  <span className="text-xs text-slate-655 font-extrabold leading-tight">{m.description}</span>
                  <span className="text-lg font-extrabold text-[#003366] font-mono tracking-tight shrink-0 ml-4 bg-[#E6F3FF]/45 px-3 py-1 rounded-lg border border-[#0066CC]/15">
                    +{m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick links to core services */}
          <div className="bg-[#E6F3FF]/30 p-5 rounded-2xl border border-[#0066CC]/15 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="space-y-1 text-left">
              <span className="font-extrabold text-[#003366] uppercase tracking-tight text-xs block">Explore core process templates suitable for {activeInd.name}:</span>
              <p className="text-[10px] text-slate-450 font-semibold uppercase font-mono">Jump directly into service parameters and problems solved lists.</p>
            </div>
            
            <div className="flex gap-2">
              <button
                id="ind-to-service-cost-btn"
                onClick={() => handleSolutionServiceNav('cost_optimization')}
                className="px-4 py-2 bg-[#003366] hover:bg-[#0066CC] text-white font-bold uppercase tracking-wider text-[10px] rounded-xl transition-colors cursor-pointer"
              >
                Cost Optimization Service
              </button>
              <button
                id="ind-to-service-sys-btn"
                onClick={() => handleSolutionServiceNav('systems_excellence')}
                className="px-4 py-2 bg-[#003366] hover:bg-[#0066CC] text-white font-bold uppercase tracking-wider text-[10px] rounded-xl transition-colors cursor-pointer"
              >
                Process Excellence Service
              </button>
            </div>
          </div>

        </motion.div>
      </AnimatePresence>
    </section>

    </div>
  );
}
