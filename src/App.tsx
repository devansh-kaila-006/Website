/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import ApproachView from './components/ApproachView';
import IndustriesView from './components/IndustriesView';
import ImpactView from './components/ImpactView';
import ContactView from './components/ContactView';

export default function App() {
  const [view, setView] = useState('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const renderActiveView = () => {
    switch (view) {
      case 'home':
        return <HomeView setView={setView} setSelectedServiceId={setSelectedServiceId} />;
      case 'about':
        return <AboutView setView={setView} />;
      case 'services':
        return (
          <ServicesView
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
            setView={setView}
          />
        );
      case 'approach':
        return <ApproachView setView={setView} />;
      case 'industries':
        return (
          <IndustriesView
            setView={setView}
            setSelectedServiceId={setSelectedServiceId}
          />
        );
      case 'impact':
        return <ImpactView setView={setView} />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView setView={setView} setSelectedServiceId={setSelectedServiceId} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col antialiased">
      {/* Sticky High-performance Navigation */}
      <Header currentView={view} setView={setView} />
      
      {/* Main Page Layout Container */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Sustainable Foot Section */}
      <Footer setView={setView} />
    </div>
  );
}

