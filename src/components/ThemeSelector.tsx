import { useState, useRef, useEffect } from 'react';
import { 
  Palette, Check, Shield, TrendingUp, Moon, Flame, Compass, 
  Crown, Zap, Activity, Briefcase, Snowflake, Square, 
  BookOpen, Sparkles, Cpu, Settings, Grid, Layers, CreditCard
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ThemeSelectorProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
  currentTemplate: string;
  onTemplateChange: (template: string) => void;
}

export default function ThemeSelector({ 
  currentTheme, 
  onThemeChange, 
  currentTemplate, 
  onTemplateChange 
}: ThemeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'themes' | 'templates'>('themes');
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside of the dropdown drawer
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

  const templates = [
    {
      id: 'classic',
      name: 'Classic Corporate',
      description: 'Montserrat heading & Inter sans serif',
      icon: Shield
    },
    {
      id: 'stark',
      name: 'Swiss Stark Minimalist',
      description: 'Crisp hairline borders, zero shadows & Swiss grid spacing',
      icon: Grid
    },
    {
      id: 'editorial',
      name: 'Nordic Editorial',
      description: 'Luxury Playfair Display serif & warm page tones',
      icon: BookOpen
    },
    {
      id: 'fintech',
      name: 'Sleek FinTech',
      description: 'Clean sharp card compartments with bright brand rules',
      icon: CreditCard
    },
    {
      id: 'slate',
      name: 'Modernist Slate',
      description: 'Clean cool slate fill, subtle borders & elegant drop alignment',
      icon: Layers
    }
  ];

  return (
    <div ref={menuRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="mb-3 w-76 bg-white border border-slate-200 rounded shadow-xl p-3 space-y-2 text-left"
          >
            {/* Header description */}
            <div className="px-2 pb-1.5 border-b border-slate-100 flex items-center justify-between">
              <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                <Settings className="h-3 w-3 text-slate-400 animate-spin-slow" />
                WORKSPACE BRANDING
              </span>
              <span className="text-[8px] font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded uppercase font-bold text-3xs">
                15 CONFIG OPTIONS
              </span>
            </div>

            {/* Config Mode Switch Tabs */}
            <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100/70 rounded border border-slate-200/50">
              <button
                onClick={() => setActiveTab('themes')}
                className={`flex items-center justify-center space-x-1.5 py-1.5 px-2 rounded font-bold text-[10px] uppercase tracking-wide transition-all duration-150 cursor-pointer ${
                  activeTab === 'themes'
                    ? 'bg-white text-[#003366] shadow-[0_1px_3px_rgba(0,0,0,0.05)] font-extrabold'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <Palette className="h-3 w-3" />
                <span>Palettes ({themes.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('templates')}
                className={`flex items-center justify-center space-x-1.5 py-1.5 px-2 rounded font-bold text-[10px] uppercase tracking-wide transition-all duration-150 cursor-pointer ${
                  activeTab === 'templates'
                    ? 'bg-white text-[#003366] shadow-[0_1px_3px_rgba(0,0,0,0.05)] font-extrabold'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <Cpu className="h-3 w-3" />
                <span>Layouts ({templates.length})</span>
              </button>
            </div>

            {/* Option lists */}
            <div className="space-y-1 max-h-80 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200">
              {activeTab === 'themes' ? (
                // THEME LISTING
                themes.map((themeOption) => {
                  const isActive = currentTheme === themeOption.id;
                  const Icon = themeOption.icon;
                  return (
                    <button
                      key={themeOption.id}
                      onClick={() => {
                        onThemeChange(themeOption.id);
                      }}
                      className={`w-full flex items-center justify-between p-2 rounded text-left transition-all duration-150 cursor-pointer ${
                        isActive 
                          ? 'bg-slate-50 border border-slate-200/80 shadow-xxs' 
                          : 'hover:bg-slate-50 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <div className={`p-1.5 rounded flex items-center justify-center ${isActive ? 'bg-[#003366] text-white' : 'bg-slate-200 text-slate-600'}`}>
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
                          <span className={`h-2.5 w-2.5 rounded-full border border-white ${themeOption.colors[0]}`} />
                          <span className={`h-2.5 w-2.5 rounded-full border border-white ${themeOption.colors[1]}`} />
                        </div>
                        {isActive && <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />}
                      </div>
                    </button>
                  );
                })
              ) : (
                // LAYOUT TEMPLATE LISTING
                templates.map((tmplOption) => {
                  const isActive = currentTemplate === tmplOption.id;
                  const Icon = tmplOption.icon;
                  return (
                    <button
                      key={tmplOption.id}
                      onClick={() => {
                        onTemplateChange(tmplOption.id);
                      }}
                      className={`w-full flex items-center justify-between p-2 rounded text-left transition-all duration-150 cursor-pointer ${
                        isActive 
                          ? 'bg-slate-50 border border-slate-200/80 shadow-xxs' 
                          : 'hover:bg-slate-50 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <div className={`p-1.5 rounded flex items-center justify-center ${isActive ? 'bg-[#003366] text-white' : 'bg-slate-200 text-slate-600'}`}>
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-800 leading-none">
                            {tmplOption.name}
                          </div>
                          <div className="text-[9px] text-slate-400 mt-1.5 leading-snug font-semibold">
                            {tmplOption.description}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center shrink-0">
                        {isActive && <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />}
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 w-12 bg-[#003366] hover:bg-[#003366]/90 hover:scale-105 active:scale-95 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer border border-white/10 group focus:outline-none"
        title="Toggle Brand Themes & Templates"
      >
        <Palette className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
      </button>
    </div>
  );
}
