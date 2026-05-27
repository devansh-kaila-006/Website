import React, { useState } from 'react';
import { 
  Search, 
  DraftingCompass, 
  PlayCircle, 
  ToggleRight, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  ClipboardCheck,
  Target
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { APPROACH_STAGES, CASE_STUDIES } from '../data';

interface ApproachViewProps {
  setView: (view: string) => void;
  activeStageIdx?: number;
  setActiveStageIdx?: (idx: number | ((prev: number) => number)) => void;
}

export default function ApproachView({ 
  setView,
  activeStageIdx: overrideStageIdx,
  setActiveStageIdx: overrideSetStageIdx
}: ApproachViewProps) {
  const [internalStageIdx, setInternalStageIdx] = useState(0);
  const activeStageIdx = overrideStageIdx !== undefined ? overrideStageIdx : internalStageIdx;
  const setActiveStageIdx = overrideSetStageIdx !== undefined ? overrideSetStageIdx : setInternalStageIdx;

  const iconMap: { [key: string]: React.ElementType } = {
    Search, DraftingCompass, PlayCircle, ToggleRight
  };

  const handleNextStage = () => {
    setActiveStageIdx((prev) => (prev + 1) % APPROACH_STAGES.length);
  };

  const handlePrevStage = () => {
    setActiveStageIdx((prev) => (prev - 1 + APPROACH_STAGES.length) % APPROACH_STAGES.length);
  };

  // Select an appropriate case study based on index for variety
  const getStageCaseStudy = (idx: number) => {
    if (idx === 0) return CASE_STUDIES[1]; // diagnose/digital
    if (idx === 1) return CASE_STUDIES[0]; // design/mfg
    return CASE_STUDIES[2]; // implement-sustain/hospital
  };

  const activeStage = APPROACH_STAGES[activeStageIdx];
  const relatedCS = getStageCaseStudy(activeStageIdx);

  return (
    <div id="approach-page-container" className="pt-24 space-y-16 pb-12">
      
      {/* Page Title */}
      <section className="bg-slate-50 border-b border-slate-150 py-12 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xxs font-mono font-bold text-[#FF6B35] uppercase tracking-wider block mb-2">OPERATIONAL BLUEPRINT</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#003366] tracking-tight">
            Our 4-Stage Methodology
          </h1>
          <p className="text-xs md:text-sm text-slate-500 max-w-2xl mt-1.5 leading-relaxed font-semibold">
            Every business improvement is run under a highly repeatable, logical governance template to guarantee execution velocity.
          </p>
        </div>
      </section>

      {/* HORIZONTAL TIMELINE PROCESS FLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pb-4">
          
          {/* Connecting line */}
          <div className="absolute top-[34px] left-[5%] right-[5%] h-1 bg-slate-200 -z-10 hidden md:block">
            <div 
              className="h-full bg-[#003366] transition-all duration-300"
              style={{ width: `${(activeStageIdx / (APPROACH_STAGES.length - 1)) * 90}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-between items-center text-center">
            {APPROACH_STAGES.map((stage, idx) => {
              const StageIcon = iconMap[stage.iconName] || Search;
              const isSelected = activeStageIdx === idx;
              const isPassed = idx < activeStageIdx;
              
              return (
                <button
                  key={stage.id}
                  id={`timeline-node-${stage.id}`}
                  onClick={() => setActiveStageIdx(idx)}
                  className="flex flex-col items-center group focus:outline-none cursor-pointer"
                >
                  <div className={`h-[64px] w-[64px] rounded-full flex items-center justify-center transition-all duration-200 border-4 ${
                    isSelected 
                      ? 'bg-[#003366] text-white border-[#FF6B35] scale-105 shadow'
                      : isPassed
                        ? 'bg-[#E6F3FF] text-[#003366] border-[#0066CC]'
                        : 'bg-white text-slate-400 border-slate-200 hover:border-slate-400 hover:text-slate-700'
                  }`}>
                    <StageIcon className="h-5 w-5" />
                  </div>
                  <span className={`block text-[10px] font-mono font-bold mt-3 uppercase tracking-widest ${isSelected ? 'text-[#FF6B35]' : 'text-slate-400'}`}>
                    Stage 0{idx + 1}
                  </span>
                  <span className={`block text-xs font-extrabold tracking-tight mt-1 ${isSelected ? 'text-slate-900 underline decoration-2 decoration-[#FF6B35]' : 'text-slate-600 group-hover:text-slate-900'}`}>
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACTIVE STAGE DEEP DIVE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main stage specifications panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStageIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-md flex flex-col justify-between"
            >
            <div className="space-y-6">
              
              {/* Header metrics */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-3">
                <div className="flex items-center space-x-3">
                  <span className="text-[10px] font-mono bg-[#003366] text-white font-bold h-6 w-6 rounded-full flex items-center justify-center shrink-0">
                    {activeStage.number}
                  </span>
                  <h3 className="text-lg md:text-xl font-extrabold text-[#003366] tracking-tight">
                    {activeStage.title} Specifications
                  </h3>
                </div>
                
                {activeStage.metric && (
                  <span className="text-[9px] font-extrabold text-[#0066CC] bg-[#E6F3FF]/45 px-2.5 py-1 rounded border border-[#0066CC]/15 uppercase tracking-widest font-mono shrink-0 self-start sm:self-auto max-w-full text-center">
                    {activeStage.metric}
                  </span>
                )}
              </div>

              {/* Tagline overview */}
              <p className="text-xs font-extrabold text-[#FF6B35] font-mono uppercase tracking-widest">
                "{activeStage.oneLiner}"
              </p>

              {/* Main description paragraph */}
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-semibold">
                {activeStage.description}
              </p>

              {/* Core checklist items */}
              <div className="space-y-3 pt-3">
                <p className="text-[10px] font-extrabold text-[#003366] uppercase tracking-wider font-mono">
                  Methodology Procedures:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeStage.details.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-2 p-3 bg-slate-50 rounded-xl border border-slate-150 text-left">
                      <CheckCircle2 className="h-4 w-4 text-[#0066CC] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-650 font-semibold">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core deliverable details */}
              <div className="pt-4 border-t border-slate-100 flex items-start space-x-2.5">
                <ClipboardCheck className="h-4.5 w-4.5 text-[#0066CC] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-[#003366] uppercase tracking-widest font-mono">Core Stage Output Deliverable:</p>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{activeStage.output}</p>
                </div>
              </div>

            </div>

            {/* Slider back/forward controls */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100 col-span-full">
              <button
                id="methodology-prev-stage-btn"
                onClick={handlePrevStage}
                className="text-xs font-bold text-slate-500 hover:text-[#003366] cursor-pointer focus:outline-none transition-colors inline-flex items-center space-x-1"
              >
                <span>← Previous Stage</span>
              </button>
              <button
                id="methodology-next-stage-btn"
                onClick={handleNextStage}
                className="text-xs font-bold px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 cursor-pointer rounded-xl focus:outline-none transition-colors inline-flex items-center space-x-1.5"
              >
                <span>Cycle Stages</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#FF6B35]" />
              </button>
            </div>

          </motion.div>
          </AnimatePresence>

          {/* SIDEBAR: Active methodology Stage case study reference */}
          <div className="lg:col-span-4 bg-[#003366] text-white rounded-2xl p-6 flex flex-col justify-between border border-white/5 shadow-md space-y-6 text-left">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[10px] font-extrabold text-[#FF6B35] uppercase font-mono tracking-wider">
                <Target className="h-4 w-4" />
                <span>Methodology Framework</span>
              </div>
              
              <h4 className="text-base font-extrabold tracking-tight text-white leading-snug">
                Stage Case Study: {relatedCS.title}
              </h4>
              
              <p className="text-[10px] text-blue-200 uppercase tracking-widest font-mono">
                Client Sector: {relatedCS.clientType} ({relatedCS.industry})
              </p>

              <div className="space-y-3.5 text-slate-200 text-xs font-semibold">
                <div>
                  <p className="font-extrabold text-[#FF6B35] text-[9px] uppercase tracking-wider font-mono">Specific Challenge:</p>
                  <p className="text-xxs leading-relaxed text-slate-100">{relatedCS.challenge}</p>
                </div>
                <div>
                  <p className="font-extrabold text-[#FF6B35] text-[9px] uppercase tracking-wider font-mono">Methodology Solution:</p>
                  <p className="text-xxs leading-relaxed text-slate-100">{relatedCS.solution}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
