
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Users', value: '500K+' },
    { icon: Heart, label: 'Matches Made', value: '2M+' },
    { icon: Sparkles, label: 'Success Stories', value: '50K+' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 romantic-gradient opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Headline */}
          <div className="space-y-4">
            <motion.h1
              className="text-5xl md:text-7xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-romantic-pink via-warm-coral to-soft-lavender bg-clip-text text-transparent">
                Find Your
              </span>
              <br />
              <span className="text-foreground">Perfect Match</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Connect with meaningful relationships through our intelligent matching system. 
              Your journey to love starts here.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="romantic-gradient text-white border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Start Your Journey
              <Heart className="ml-2 w-5 h-5" fill="currentColor" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card px-8 py-4 text-lg font-semibold rounded-full border-2 hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card p-6 rounded-2xl text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <stat.icon className="w-12 h-12 text-romantic-pink mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-romantic-pink/20 blur-xl"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-soft-lavender/20 blur-xl"
        animate={{
          y: [20, -20, 20],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default HeroSection;
