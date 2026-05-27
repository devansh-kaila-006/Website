import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, ChevronRight, Building2 } from 'lucide-react';

interface FooterProps {
  setView: (view: string) => void;
}

export default function Footer({ setView }: FooterProps) {

  const handleNav = (viewId: string) => {
    setView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-[#003366] text-slate-200 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission section */}
          <div className="space-y-4">
            <button
              id="footer-logo-btn"
              onClick={() => handleNav('home')}
              className="flex items-center space-x-2 text-left focus:outline-none group"
            >
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center text-[#003366] group-hover:bg-[#FF6B35] group-hover:text-white transition-all duration-200 shrink-0">
                <Building2 className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="block text-lg font-extrabold tracking-tight text-white uppercase leading-none">
                  MAYNIT
                </span>
                <span className="block text-[8px] tracking-wider text-[#E6F3FF] uppercase font-mono leading-none mt-0.5 animate-pulse">
                  Business Transformation Consulting
                </span>
              </div>
            </button>
            <p className="text-slate-300 text-sm leading-relaxed">
              Enabling modern companies to achieve operations efficiency, core cost reduction, and continuous improvement through structured process change.
            </p>
            <div className="flex space-x-3.5 pt-2">
              <a
                id="footer-social-linkedin"
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/10 hover:bg-[#FF6B35] hover:text-white rounded-full transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <a
                id="footer-social-twitter"
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/10 hover:bg-[#FF6B35] hover:text-white rounded-full transition-colors duration-200"
                aria-label="Twitter Profile"
              >
                <Twitter className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div>
            <h4 className="text-white font-bold text-base tracking-wide mb-4 uppercase">
              Expertise
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-link-home"
                  onClick={() => handleNav('home')}
                  className="hover:text-[#FF6B35] transition-colors inline-flex items-center space-x-1"
                >
                  <ChevronRight className="h-3 w-3 text-[#FF6B35]" />
                  <span>Home & Value</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-link-about"
                  onClick={() => handleNav('about')}
                  className="hover:text-[#FF6B35] transition-colors inline-flex items-center space-x-1"
                >
                  <ChevronRight className="h-3 w-3 text-[#FF6B35]" />
                  <span>Who We Are</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-link-leadership"
                  onClick={() => handleNav('leadership')}
                  className="hover:text-[#FF6B35] transition-colors inline-flex items-center space-x-1"
                >
                  <ChevronRight className="h-3 w-3 text-[#FF6B35]" />
                  <span>Our Leadership</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-link-services"
                  onClick={() => handleNav('services')}
                  className="hover:text-[#FF6B35] transition-colors inline-flex items-center space-x-1"
                >
                  <ChevronRight className="h-3 w-3 text-[#FF6B35]" />
                  <span>Core Services (7)</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-link-approach"
                  onClick={() => handleNav('approach')}
                  className="hover:text-[#FF6B35] transition-colors inline-flex items-center space-x-1"
                >
                  <ChevronRight className="h-3 w-3 text-[#FF6B35]" />
                  <span>Our 4-Step Methodology</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-link-industries"
                  onClick={() => handleNav('industries')}
                  className="hover:text-[#FF6B35] transition-colors inline-flex items-center space-x-1"
                >
                  <ChevronRight className="h-3 w-3 text-[#FF6B35]" />
                  <span>Industries Served</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 text-sm">
            <h4 className="text-white font-bold text-base tracking-wide mb-3 uppercase">
              Get in Touch
            </h4>
            <div className="flex items-start space-x-2.5">
              <MapPin className="h-5 w-5 text-[#FF6B35] shrink-0 mt-0.5" />
              <p className="text-slate-300">
                MAYNIT<br />
                Ludhiana, Punjab, India
              </p>
            </div>
            <div className="flex items-start space-x-2.5">
              <Phone className="h-4.5 w-4.5 text-[#FF6B35] shrink-0 mt-0.5" />
              <div className="space-y-1.5 flex flex-col text-slate-300 text-sm">
                <a href="tel:+919872422589" className="hover:text-[#FF6B35] transition-colors">
                  +91 98724 22589
                </a>
                <a href="tel:+917069010057" className="hover:text-[#FF6B35] transition-colors">
                  +91 70690 10057
                </a>
              </div>
            </div>
          </div>


        </div>

        {/* Corporate Legal Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400">
          <p>© 2025 Maynit. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button onClick={() => alert('Maynit Privacy Policy covers secure NDAs and client process data isolation.')} className="hover:text-[#FF6B35] transition-colors">Privacy Policy</button>
            <span>|</span>
            <button onClick={() => alert('Maynit Terms of Service are framed per standard management consultancy operations.')} className="hover:text-[#FF6B35] transition-colors">Terms of Engagement</button>
            <span>|</span>
            <p>Made for Business Leaders</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
