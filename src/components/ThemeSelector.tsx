import { useState, useRef, useEffect } from 'react';
import { Palette, Check, Shield, TrendingUp, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ThemeSelectorProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

export default function ThemeSelector({ currentTheme, onThemeChange }: ThemeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
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
            className="mb-3 w-64 bg-white border border-slate-200 rounded shadow-xl p-3 space-y-2 text-left"
          >
            <div className="px-2 pb-1.5 border-b border-slate-100 flex items-center justify-between">
              <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-slate-400 flex items-center gap-1">
                <Palette className="h-3 w-3 text-slate-400" />
                Select Workspace Theme
              </span>
              <span className="text-[8px] font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded uppercase font-bold">
                Options
              </span>
            </div>

            <div className="space-y-1">
              {themes.map((themeOption) => {
                const isActive = currentTheme === themeOption.id;
                const Icon = themeOption.icon;
                return (
                  <button
                    key={themeOption.id}
                    onClick={() => {
                      onThemeChange(themeOption.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded text-left transition-all duration-150 cursor-pointer ${
                      isActive 
                        ? 'bg-slate-50 border border-slate-200 shadow-xxs' 
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
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 w-12 bg-[#003366] hover:bg-[#003366]/90 hover:scale-105 active:scale-95 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer border border-white/10 group focus:outline-none"
        title="Toggle Brand Themes"
      >
        <Palette className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
      </button>
    </div>
  );
}
