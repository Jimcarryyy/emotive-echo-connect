
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import DiscoverySection from '../components/DiscoverySection';
import MessagesSection from '../components/MessagesSection';
import FloatingHearts from '../components/FloatingHearts';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection />;
      case 'discover':
        return <DiscoverySection />;
      case 'messages':
        return <MessagesSection />;
      case 'profile':
        return (
          <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Profile Coming Soon</h2>
              <p className="text-muted-foreground">
                Your profile customization features are being crafted with love.
              </p>
            </div>
          </section>
        );
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
