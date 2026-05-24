import React, { useState, useEffect } from 'react';
import { Menu, X, Building2, PhoneCall } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
}

export default function Header({ currentView, setView }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'approach', label: 'Our Approach' },
    { id: 'industries', label: 'Industries' },
    { id: 'impact', label: 'Impact & Results' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (viewId: string) => {
    setView(viewId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3 border-b border-gray-100'
          : 'bg-white/95 backdrop-blur-md py-4 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNav('home')}
            className="flex items-center space-x-2.5 text-left group focus:outline-none"
          >
            <div className="w-8 h-8 bg-[#003366] rounded-sm flex items-center justify-center text-white group-hover:bg-[#0066CC] transition-colors duration-200 shrink-0">
              <Building2 className="h-4.5 w-4.5" />
            </div>
            <div>
              <span className="block text-lg font-extrabold tracking-tight text-[#003366] uppercase leading-none">
                MAYNIT
              </span>
              <span className="block text-[8px] tracking-wider text-slate-500 uppercase font-mono leading-none mt-0.5">
                Business Transformation Excellence
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}-desktop-btn`}
                onClick={() => handleNav(item.id)}
                className={`px-3.5 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-200 border-b-2 ${
                  currentView === item.id
                    ? 'text-[#0066CC] border-[#0066CC] bg-blue-50/10'
                    : 'text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-50/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <button
              id="header-cta-btn"
              onClick={() => handleNav('contact')}
              className="inline-flex items-center space-x-1.5 px-4.5 py-2 bg-[#FF6B35] hover:bg-[#e0521e] text-white text-sm font-semibold rounded shadow hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none"
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
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div id="mobile-nav-menu" className="lg:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-1 shadow-inner animate-in fade-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-${item.id}-mobile-btn`}
              onClick={() => handleNav(item.id)}
              className={`block w-full text-left px-4 py-3 rounded text-sm font-bold uppercase tracking-wider transition-colors ${
                currentView === item.id
                  ? 'text-[#0066CC] bg-blue-55/20 font-bold'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 px-4">
            <button
              id="mobile-header-cta-btn"
              onClick={() => handleNav('contact')}
              className="block w-full text-center px-4 py-3 bg-[#FF6B35] hover:bg-[#e85a2a] text-white text-sm font-extrabold uppercase tracking-widest rounded shadow transition-all duration-200"
            >
              Request Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
