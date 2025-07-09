
import React, { useState, useEffect } from 'react';
import { Heart, User, MessageCircle, Search, Settings, Sun, Moon, Bell, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Heart },
    { id: 'discover', label: 'Discover', icon: Search },
    { id: 'activity', label: 'Activity', icon: Activity },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-card shadow-lg backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="w-8 h-8 text-romantic-pink" fill="currentColor" />
            <span className="text-2xl font-bold bg-gradient-to-r from-romantic-pink to-warm-coral bg-clip-text text-transparent">
              LoveConnect
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(({ id, label, icon: Icon }) => (
              <motion.button
                key={id}
                onClick={() => onSectionChange(id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-colors relative ${
                  activeSection === id
                    ? 'bg-romantic-pink text-white'
                    : 'text-foreground hover:text-romantic-pink'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{label}</span>
                {(id === 'notifications' || id === 'messages') && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-romantic-pink rounded-full border-2 border-background"></div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full glass-card hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-romantic-pink" />
            ) : (
              <Sun className="w-5 h-5 text-golden-hour" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 glass-card border-t">
        <div className="flex items-center justify-around py-2">
          {navItems.map(({ id, label, icon: Icon }) => (
            <motion.button
              key={id}
              onClick={() => onSectionChange(id)}
              className={`flex flex-col items-center space-y-1 p-2 relative ${
                activeSection === id
                  ? 'text-romantic-pink'
                  : 'text-muted-foreground'
              }`}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs">{label}</span>
              {(id === 'notifications' || id === 'messages') && (
                <div className="absolute top-1 right-1 w-2 h-2 bg-romantic-pink rounded-full"></div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
