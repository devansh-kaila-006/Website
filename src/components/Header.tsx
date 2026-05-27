import React, { useState, useEffect } from 'react';
import { Menu, X, Building2, PhoneCall, ChevronDown, Link } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../logo.png';

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
  setSelectedServiceId?: (id: string | null) => void;
  setActiveIndustryId?: (id: string) => void;
  setActiveStageIdx?: (idx: number) => void;
}

export default function Header({ 
  currentView, 
  setView,
  setSelectedServiceId,
  setActiveIndustryId,
  setActiveStageIdx
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeMobileSubmenus, setActiveMobileSubmenus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'services', label: 'Services' },
    { id: 'approach', label: 'Our Approach' },
    { id: 'industries', label: 'Industries' },
    { id: 'contact', label: 'Contact' },
  ];

  const pollAndScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50); // Small timeout to allow active transition layouts to settle heights
      return;
    }
    
    let attempts = 0;
    const interval = setInterval(() => {
      const el = document.getElementById(elementId);
      if (el) {
        setTimeout(() => {
          const currentEl = document.getElementById(elementId);
          if (currentEl) {
            currentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 50);
        clearInterval(interval);
      }
      attempts++;
      if (attempts > 30) { // Max 1.5 seconds polling to wait for AnimatePresence mode="wait" transition
        clearInterval(interval);
      }
    }, 50);
  };

  const handleNav = (viewId: string, sectionId?: string) => {
    setView(viewId);
    setIsOpen(false);
    setHoveredItem(null);
    if (sectionId) {
      pollAndScrollTo(sectionId);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const selectService = (serviceId: string) => {
    if (setSelectedServiceId) {
      setSelectedServiceId(serviceId);
    }
    setView('services');
    pollAndScrollTo('services-page-container');
  };

  const selectIndustry = (industryId: string) => {
    if (setActiveIndustryId) {
      setActiveIndustryId(industryId);
    }
    setView('industries');
    pollAndScrollTo('industries-page-container');
  };

  const selectApproachIdx = (stageIdx: number) => {
    if (setActiveStageIdx) {
      setActiveStageIdx(stageIdx);
    }
    setView('approach');
    pollAndScrollTo('approach-page-container');
  };

  const toggleMobileSubmenu = (itemId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMobileSubmenus(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  interface DropdownLink {
    label: string;
    desc?: string;
    badge?: string;
    action: () => void;
  }

  const getDropdownContent = (itemId: string): DropdownLink[] => {
    switch (itemId) {
      case 'home':
        return [
          { label: 'Core Transformation Goals', desc: 'Overview of our target delivery objectives focusing on cost leadership and high performance.', action: () => handleNav('home', 'hero-section') },
          { label: 'Competitive Value Edge', desc: 'Learn why our boots-on-the-ground floor practices outshine standard strategy-only slide deck agencies.', action: () => handleNav('home', 'why-us-section') },
          { label: 'Interactive Benchmark Tracker', desc: 'Assess operational output benchmarks, lead times, and resource efficiencies dynamically.', action: () => handleNav('home', 'hero-diagnostic-preview') },
          { label: 'Sector Advisory Footprints', desc: 'Explore historical client trust indicators across major industrial verticals in India.', action: () => handleNav('home', 'trust-indicator-section') },
        ];
      case 'about':
        return [
          { label: 'Corporate DNA & Focus Area', desc: 'Who we are and our boots-on-the-ground operational approach.', action: () => handleNav('about', 'about-who-we-are') },
          { label: 'Strategic Vision & Mission', desc: 'Connecting multi-level strategic targets with daily frontline execution.', action: () => handleNav('about', 'about-vision-mission') },
          { label: 'Operational vs. Slide Consulting', desc: 'Contrast between mock slide binders and physical floor pilot tests.', action: () => handleNav('about', 'about-traditional-vs-us') },
          { label: 'Leadership & Board Matrix', desc: 'Accountability structure and core management milestones.', action: () => handleNav('about', 'about-directors-overview') },
        ];
      case 'leadership':
        return [
          { label: 'Rajnish Kaila', desc: 'Digital Transformation & ServiceNow Delivery Lead (25+ Yrs Exp).', badge: 'Co-Founder', action: () => handleNav('leadership', 'leader-card-rajnish_kaila') },
          { label: 'Vineet Kulshreshtha', desc: 'Operational Excellence Lead & TOC Industry Specialist (23+ Yrs Exp).', badge: 'Co-Founder', action: () => handleNav('leadership', 'leader-card-vineet_kulshreshtha') },
          { label: 'Core Advisory Standards', desc: 'Continuous on-floor accountability, capability transfer, and client ROI metrics.', action: () => handleNav('leadership', 'leadership_standards') },
        ];
      case 'services':
        return [
          { label: 'Business Excellence', desc: 'Establish DMS, Hoshin Kanri goals, and structured daily meetings.', action: () => selectService('business_excellence') },
          { label: 'Systems & Process Excellence', desc: 'Re-engineer cluttered core processes to establish lean, reproducible standard practices.', action: () => selectService('systems_excellence') },
          { label: 'Throughput Time Reduction', desc: 'Drastically shrink turnaround times to build superior responsiveness and unlock market capacity.', action: () => selectService('throughput_reduction') },
          { label: 'Project Management', desc: 'Establish rigorous execution rules to deliver complex business transformation programs on time.', action: () => selectService('project_management') },
          { label: 'Cost Optimization', desc: 'Eliminate waste and structural overheads to drive immediate bottom-line cashflow benefits.', action: () => selectService('cost_optimization') },
          { label: 'HR & Industrial Relations', desc: 'Align organizational culture and personnel policies to eliminate operational interruptions.', action: () => selectService('hr_relations') },
          { label: 'Innovation & Transformation', desc: 'Infuse intelligent workflows and emerging automation solutions into proven operating models.', action: () => selectService('innovation_transformation') },
        ];
      case 'approach':
        return [
          { label: 'Stage 1: Diagnostic Audit', desc: 'Empirical walkthroughs to document clear workflow baseline delays.', badge: 'Stage 01', action: () => selectApproachIdx(0) },
          { label: 'Stage 2: System Design', desc: 'Drafting structured capability processes and supplier templates.', badge: 'Stage 02', action: () => selectApproachIdx(1) },
          { label: 'Stage 3: Interactive Coaching', desc: 'Floor coaches implementing protocols alongside your workforce.', badge: 'Stage 03', action: () => selectApproachIdx(2) },
          { label: 'Stage 4: Validation & Transfer', desc: 'Formal client reviews to verify self-sustaining local systems.', badge: 'Stage 04', action: () => selectApproachIdx(3) },
        ];
      case 'industries':
        return [
          { label: 'Manufacturing Grid', desc: 'Engineered foundry processes and assembly throughput solutions.', action: () => selectIndustry('manufacturing') },
          { label: 'IT Enabled Services', desc: 'High-velocity SLA systems, queue logs, and tech workforce alignment.', action: () => selectIndustry('it_services') },
          { label: 'Healthcare & Pharma', desc: 'Inpatient discharge loops, operating rooms, and compliance controls.', action: () => selectIndustry('healthcare') },
          { label: 'Supply Chain & Logistics', desc: 'Port container transit times, central hub delays, and warehouse layout layouts.', action: () => selectIndustry('supply_chain') },
          { label: 'Retail & Multi-Store Unions', desc: 'Store layout efficiencies, queue compression, and direct catalog yield.', action: () => selectIndustry('retail') },
        ];
      case 'contact':
        return [
          { label: 'Book Consultation', desc: 'Arrange a face-to-face workshop to discuss your operational challenges.', action: () => handleNav('contact', 'book-consultation') },
          { label: 'Office Locations', desc: 'Physical coordinates of our development & coaching bases.', action: () => handleNav('contact', 'office_locations') },
        ];
      default:
        return [];
    }
  };

  const handleDropdownItemClick = (itemAction: () => void) => {
    itemAction();
    setHoveredItem(null);
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2.5 border-b border-slate-100'
          : 'bg-white/95 backdrop-blur-md py-3.5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNav('home')}
            className="flex items-center text-left group focus:outline-none"
          >
            <img src={logo} alt="Maynit Logo" className="h-[102px] w-auto" />
          </button>

          {/* Desktop Nav with hover dropdown menus */}
          <nav 
            className="hidden lg:flex items-center space-x-1"
            onMouseLeave={() => setHoveredItem(null)}
          >
            {navItems.map((item) => {
              const dropdownLinks = getDropdownContent(item.id);
              const hasDropdown = dropdownLinks.length > 0;
              const isHovered = hoveredItem === item.id;
              
              return (
                <div
                  key={item.id}
                  className="relative py-2"
                  onMouseEnter={() => {
                    if (hasDropdown) setHoveredItem(item.id);
                    else setHoveredItem(null);
                  }}
                >
                  <button
                    id={`nav-${item.id}-desktop-btn`}
                    onClick={() => handleNav(item.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 focus:outline-none flex items-center space-x-1 ${
                      currentView === item.id
                        ? 'text-[#0066CC] bg-[#E6F3FF]/60 font-extrabold'
                        : 'text-slate-650 hover:text-[#003366] hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasDropdown && (
                      <ChevronDown className={`h-3 w-3 text-slate-400 transition-transform duration-200 ${isHovered ? 'rotate-180 text-[#0066CC]' : 'rotate-0'}`} />
                    )}
                  </button>

                  {/* Mega-Dropdown panel */}
                  <AnimatePresence>
                    {hasDropdown && isHovered && (
                      <motion.div
                        id={`megamenu-${item.id}`}
                        initial={{ opacity: 0, y: 12, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-2xl z-50 text-left flex flex-col ${
                          item.id === 'services' ? 'w-[640px]' : 'w-[420px]'
                        }`}
                      >
                        {/* Sub-menu title */}
                        <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-3.5 border-b border-slate-100 pb-2 flex items-center justify-between font-mono">
                          <span>Directory: {item.label}</span>
                          <span className="text-[#FF6B35] font-semibold text-[8px] tracking-widest bg-orange-50 px-2 py-0.5 rounded-lg border border-orange-100">CLICKABLE QUICK LINKS</span>
                        </div>

                        {/* Link list */}
                        <div className={`gap-3 ${item.id === 'services' ? 'grid grid-cols-2' : 'flex flex-col'}`}>
                          {dropdownLinks.map((link, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleDropdownItemClick(link.action)}
                              className="w-full text-left p-2.5 rounded-xl border border-transparent hover:border-slate-150/70 hover:bg-[#E6F3FF]/20 hover:shadow-sm focus:outline-none transition-all duration-150 group flex items-start space-x-3 cursor-pointer"
                            >
                              <div className="shrink-0 mt-0.5 p-1.5 rounded-lg bg-slate-50 text-[#0066CC] group-hover:bg-[#FF6B35] group-hover:text-white transition-colors duration-150">
                                {link.badge ? (
                                  <span className="text-[8px] font-mono font-bold tracking-tight px-0.5">{link.badge}</span>
                                ) : (
                                  <Link className="h-3.5 w-3.5" />
                                )}
                              </div>
                              <div className="flex-grow min-w-0">
                                <p className="text-[12px] font-bold text-[#003366] group-hover:text-[#0066CC] leading-snug">
                                  {link.label}
                                </p>
                                {link.desc && (
                                  <p className="text-[10px] text-slate-450 font-normal leading-normal mt-0.5 line-clamp-2">
                                    {link.desc}
                                  </p>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <button
              id="header-cta-btn"
              onClick={() => handleNav('contact')}
              className="inline-flex items-center space-x-1.5 px-4.5 py-2 bg-[#FF6B35] hover:bg-[#e0521e] text-white text-sm font-semibold rounded-xl shadow hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Request Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id="mobile-nav-menu" 
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-1.5 shadow-inner overflow-y-auto max-h-[80vh]"
          >
            {navItems.map((item) => {
              const dropdownLinks = getDropdownContent(item.id);
              const hasDropdown = dropdownLinks.length > 0;
              const isCollapsibleOpen = !!activeMobileSubmenus[item.id];
              
              return (
                <div key={item.id} className="border-b border-slate-50 last:border-0 pb-1.5">
                  <div className="flex items-center justify-between">
                    <button
                      id={`nav-${item.id}-mobile-btn`}
                      onClick={() => handleNav(item.id)}
                      className={`flex-grow text-left px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                        currentView === item.id
                          ? 'text-[#0066CC] bg-[#E6F3FF]/60 font-extrabold'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                    </button>
                    {hasDropdown && (
                      <button
                        onClick={(e) => toggleMobileSubmenu(item.id, e)}
                        className="px-4 py-3 text-slate-400 hover:text-slate-700 focus:outline-none"
                        aria-label="Toggle submenu"
                      >
                        <ChevronDown className={`h-4.5 w-4.5 duration-200 transition-transform ${isCollapsibleOpen ? 'rotate-180 text-[#0066CC]' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* Collapsible submenu links on Mobile */}
                  {hasDropdown && isCollapsibleOpen && (
                    <div className="pl-4 pr-2.5 py-1.5 space-y-2.5 bg-slate-50/50 rounded-2xl mt-1 text-left border border-slate-100">
                      {dropdownLinks.map((link, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setIsOpen(false);
                            link.action();
                          }}
                          className="w-full text-left py-2 px-3 rounded-lg text-xs font-bold text-slate-650 hover:text-[#0066CC] hover:bg-[#E6F3FF]/45 transition-colors duration-150 flex items-start space-x-2.5"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35] mt-1.5 shrink-0 animate-pulse"></span>
                          <div>
                            <p className="font-bold text-slate-800 tracking-tight leading-tight">{link.label}</p>
                            {link.desc && <p className="text-[10px] text-slate-400 font-normal mt-0.5 line-clamp-1">{link.desc}</p>}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="pt-4 px-4">
              <button
                id="mobile-header-cta-btn"
                onClick={() => handleNav('contact')}
                className="block w-full text-center px-4 py-3 bg-[#FF6B35] hover:bg-[#e85a2a] text-white text-sm font-extrabold uppercase tracking-widest rounded-xl shadow transition-all duration-200"
              >
                Request Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Corporate Accent Animated Custom Scroller Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#FF6B35] via-[#0066CC] to-[#003366] transition-all duration-75 ease-out rounded-r z-50 shadow-sm" 
        style={{ width: `${scrollProgress}%` }} 
      />
    </header>
  );
}
