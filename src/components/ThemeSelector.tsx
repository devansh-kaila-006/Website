import { useState, useRef, useEffect } from 'react';
import { 
  Palette, Check, Shield, TrendingUp, Moon, Flame, Compass, 
  Crown, Zap, Activity, Briefcase, Snowflake, Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ThemeSelectorProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

export default function ThemeSelector({ 
  currentTheme, 
  onThemeChange 
}: ThemeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Responsive device/screen size detection for phone optimizations
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close when clicking outside of the dropdown components
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themes = [
    {
      id: 'classic',
      name: 'Classic Executive',
      description: 'Navy Blue & Coral Accent',
      icon: Shield,
      colors: ['bg-[#003366]', 'bg-[#FF6B35]']
    },
    {
      id: 'emerald',
      name: 'Emerald Wealth',
      description: 'Forest Deep & Royal Gold',
      icon: TrendingUp,
      colors: ['bg-[#0F4C43]', 'bg-[#D97706]']
    },
    {
      id: 'obsidian',
      name: 'Midnight Obsidian',
      description: 'Slate Noir & Violet Elite',
      icon: Moon,
      colors: ['bg-[#0F172A]', 'bg-[#8B5CF6]']
    },
    {
      id: 'crimson',
      name: 'Executive Crimson',
      description: 'Maroon & Gold Saffron',
      icon: Flame,
      colors: ['bg-[#7F1D1D]', 'bg-[#D97706]']
    },
    {
      id: 'oceanic',
      name: 'Oceanic Modernism',
      description: 'Deep Teal & Coral Orange',
      icon: Compass,
      colors: ['bg-[#115E59]', 'bg-[#F97316]']
    },
    {
      id: 'imperial',
      name: 'Imperial Velvet',
      description: 'Royal Purple & Saffron Gold',
      icon: Crown,
      colors: ['bg-[#4C1D95]', 'bg-[#F59E0B]']
    },
    {
      id: 'steel',
      name: 'Industrial Steel',
      description: 'Steel Slate & Ignite Crimson',
      icon: Zap,
      colors: ['bg-[#334155]', 'bg-[#EF4444]']
    },
    {
      id: 'forest',
      name: 'Tactical Forest',
      description: 'Spruce Pine & Sandstone Gold',
      icon: Activity,
      colors: ['bg-[#14532D]', 'bg-[#EAB308]']
    },
    {
      id: 'corporate',
      name: 'Silicon Enterprise',
      description: 'Enterprise Royal & Cyber Cyan',
      icon: Briefcase,
      colors: ['bg-[#1E3A8A]', 'bg-[#06B6D4]']
    },
    {
      id: 'nordic',
      name: 'Nordic Winter Rose',
      description: 'Deep Indigo & Arctic Rose',
      icon: Snowflake,
      colors: ['bg-[#1E1B4B]', 'bg-[#FB7185]']
    }
  ];

  return (
    <div ref={menuRef}>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Immersive background overlay for mobile screens to anchor focus */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-50 sm:hidden"
            />

            {/* Config Choice Panel: Responsive popover for wide, sleek bottom-drawer for phones */}
            <motion.div
              initial={isMobile ? { y: '100%' } : { opacity: 0, y: 15, scale: 0.95 }}
              animate={isMobile ? { y: 0 } : { opacity: 1, y: 0, scale: 1 }}
              exit={isMobile ? { y: '100%' } : { opacity: 0, y: 15, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`fixed z-50 bg-white text-left shadow-2xl border border-slate-200/80 outline-none
                ${isMobile 
                  ? 'bottom-0 left-0 right-0 w-full rounded-t-[2.5rem] p-5 pb-9 border-x-0 border-b-0 max-h-[82vh] flex flex-col' 
                  : 'bottom-22 right-6 w-80 rounded-xl p-3 space-y-2'
                }
              `}
            >
              {/* Native touch drag indicator at top on phone layouts */}
              {isMobile && (
                <div className="flex justify-center pb-3">
                  <div className="w-12 h-1.5 bg-slate-200 rounded-full" />
                </div>
              )}

              {/* Header description with responsive actions */}
              <div className="px-2 pb-2 border-b border-slate-100 flex items-center justify-between shrink-0">
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#003366] flex items-center gap-1.5">
                  <Settings className="h-3 w-3 text-[#0066CC] rotate-45" />
                  BRAND COLOR PALETTE
                </span>
                
                {isMobile ? (
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-[10px] font-mono bg-slate-100 hover:bg-slate-200 text-[#003366] px-3.5 py-1.5 rounded-full font-extrabold uppercase transition-all duration-150 cursor-pointer"
                  >
                    Close
                  </button>
                ) : (
                  <span className="text-[8px] font-mono bg-amber-50 text-amber-700 px-2 py-0.5 rounded uppercase font-bold text-3xs border border-amber-200">
                    Nordic Layout
                  </span>
                )}
              </div>

              {/* Theme Subtitle */}
              <div className="px-2 py-1.5 shrink-0">
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Select Accent Palette:
                </span>
              </div>

              {/* Option lists (Using overscroll-contain & larger touch padding optimized for fingers on phone) */}
              <div className={`space-y-1.5 overflow-y-auto pr-1 overscroll-contain scrollbar-thin scrollbar-thumb-slate-200 ${
                isMobile ? 'flex-1 min-h-0 py-2.5' : 'max-h-80'
              }`}>
                {themes.map((themeOption) => {
                  const isActive = currentTheme === themeOption.id;
                  const Icon = themeOption.icon;
                  return (
                    <button
                      key={themeOption.id}
                      onClick={() => {
                        onThemeChange(themeOption.id);
                      }}
                      className={`w-full flex items-center justify-between rounded-lg text-left transition-all duration-150 cursor-pointer border ${
                        isMobile ? 'p-3' : 'p-2'
                      } ${
                        isActive 
                          ? 'bg-slate-50 border-slate-200/80 shadow-xxs' 
                          : 'hover:bg-slate-50/50 border-transparent'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`rounded-md flex items-center justify-center shrink-0 ${
                          isMobile ? 'p-2' : 'p-1.5'
                        } ${
                          isActive ? 'bg-[#003366] text-white' : 'bg-slate-200 text-slate-600'
                        }`}>
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-800 leading-none">
                            {themeOption.name}
                          </div>
                          <div className="text-[9px] text-slate-400 mt-1 leading-none font-semibold">
                            {themeOption.description}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 shrink-0">
                        <div className="flex -space-x-1">
                          <span className={`rounded-full border border-white ${
                            isMobile ? 'h-3.5 w-3.5 border-1.5' : 'h-2.5 w-2.5'
                          } ${themeOption.colors[0]}`} />
                          <span className={`rounded-full border border-white ${
                            isMobile ? 'h-3.5 w-3.5 border-1.5' : 'h-2.5 w-2.5'
                          } ${themeOption.colors[1]}`} />
                        </div>
                        {isActive && <Check className="h-3 w-3.5 text-emerald-600 shrink-0" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Trigger button (Slightly larger tap area and more distinct positioning on mobile) */}
      <div className={`fixed z-50 ${isMobile ? 'bottom-4 right-4' : 'bottom-6 right-6'}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-[#003366] hover:bg-[#003366]/90 hover:scale-105 active:scale-95 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer border border-white/10 group focus:outline-none ${
            isMobile ? 'h-14 w-14' : 'h-12 w-12'
          }`}
          title="Toggle Accent Palette"
        >
          <Palette className={`${isMobile ? 'h-6 w-6' : 'h-5 w-5'} group-hover:rotate-12 transition-transform duration-300`} />
        </button>
      </div>
    </div>
  );
}
