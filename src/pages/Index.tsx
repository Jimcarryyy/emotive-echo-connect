
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import DiscoverySection from '../components/DiscoverySection';
import MessagesSection from '../components/MessagesSection';
import Profile from './Profile';
import Notifications from './Notifications';
import Activity from './Activity';
import FloatingHearts from '../components/FloatingHearts';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection />;
      case 'discover':
        return <DiscoverySection />;
      case 'activity':
        return <Activity />;
      case 'notifications':
        return <Notifications />;
      case 'messages':
        return <MessagesSection />;
      case 'profile':
        return <Profile />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingHearts />
      
      <Navigation 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          {renderSection()}
        </motion.main>
      </AnimatePresence>

      {/* Mobile Navigation Padding */}
      <div className="md:hidden h-20"></div>
    </div>
  );
};

export default Index;
