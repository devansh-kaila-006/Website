/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import LeadershipView from './components/LeadershipView';
import ServicesView from './components/ServicesView';
import ApproachView from './components/ApproachView';
import IndustriesView from './components/IndustriesView';
import ContactView from './components/ContactView';

export default function App() {
  const [view, setView] = useState('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [activeIndustryId, setActiveIndustryId] = useState('manufacturing');
  const [activeStageIdx, setActiveStageIdx] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('template-editorial');
  }, []);

  const renderActiveView = () => {
    switch (view) {
      case 'home':
        return <HomeView setView={setView} setSelectedServiceId={setSelectedServiceId} />;
      case 'about':
        return <AboutView setView={setView} />;
      case 'leadership':
        return <LeadershipView setView={setView} />;
      case 'services':
        return (
          <ServicesView
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
            setView={setView}
          />
        );
      case 'approach':
        return <ApproachView setView={setView} activeStageIdx={activeStageIdx} setActiveStageIdx={setActiveStageIdx} />;
      case 'industries':
        return (
          <IndustriesView
            setView={setView}
            setSelectedServiceId={setSelectedServiceId}
            activeIndustryId={activeIndustryId}
            setActiveIndustryId={setActiveIndustryId}
          />
        );
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView setView={setView} setSelectedServiceId={setSelectedServiceId} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col antialiased overflow-x-hidden">
      {/* Sticky High-performance Navigation */}
      <Header
        currentView={view}
        setView={setView}
        setSelectedServiceId={setSelectedServiceId}
        setActiveIndustryId={setActiveIndustryId}
        setActiveStageIdx={setActiveStageIdx}
      />
      
      {/* Main Page Layout Container */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Sustainable Foot Section */}
      <Footer setView={setView} />
    </div>
  );
}

