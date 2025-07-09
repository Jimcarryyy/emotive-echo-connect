
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';
import { Sparkles } from 'lucide-react';

// Mock profile data
const mockProfiles = [
  {
    id: '1',
    name: 'Emma',
    age: 28,
    location: 'New York, NY',
    occupation: 'Software Engineer',
    education: 'Stanford University',
    images: [
      'https://images.unsplash.com/photo-1494790108755-2616b612b6c7?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop'
    ],
    bio: 'Love hiking, coffee, and building cool apps. Looking for someone to explore the city with!',
    interests: ['Technology', 'Hiking', 'Coffee', 'Travel', 'Photography'],
    verified: true
  },
  {
    id: '2',
    name: 'Sophia',
    age: 26,
    location: 'Los Angeles, CA',
    occupation: 'Graphic Designer',
    education: 'UCLA',
    images: [
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=600&fit=crop'
    ],
    bio: 'Artist at heart, always looking for inspiration. Love museums, galleries, and good conversations.',
    interests: ['Art', 'Design', 'Museums', 'Yoga', 'Cooking'],
    verified: true
  },
  {
    id: '3',
    name: 'Isabella',
    age: 30,
    location: 'Chicago, IL',
    occupation: 'Marketing Manager',
    education: 'Northwestern University',
    images: [
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop'
    ],
    bio: 'Fitness enthusiast and foodie. Always up for trying new restaurants and activities!',
    interests: ['Fitness', 'Food', 'Running', 'Wine', 'Books'],
    verified: false
  }
];

const DiscoverySection: React.FC = () => {
  const [profiles, setProfiles] = useState(mockProfiles);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction: 'left' | 'right', profileId: string) => {
    console.log(`Swiped ${direction} on profile ${profileId}`);
    
    // Remove the swiped profile and move to next
    setTimeout(() => {
      setProfiles(prev => prev.filter(p => p.id !== profileId));
    }, 300);
  };

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-romantic-pink mr-2" />
            <h2 className="text-3xl font-bold text-foreground">Discover</h2>
          </div>
          <p className="text-muted-foreground">
            Swipe right to like, left to pass. Find your perfect match!
          </p>
        </motion.div>

        {/* Card Stack */}
        <div className="relative h-[600px]">
          {profiles.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-3xl h-full flex items-center justify-center text-center p-8"
            >
              <div>
                <Sparkles className="w-16 h-16 text-romantic-pink mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">No more profiles!</h3>
                <p className="text-muted-foreground">Check back later for more matches.</p>
              </div>
            </motion.div>
          ) : (
            profiles.slice(0, 3).map((profile, index) => (
              <div
                key={profile.id}
                className="absolute inset-0"
                style={{
                  zIndex: profiles.length - index,
                  transform: `scale(${1 - index * 0.05}) translateY(${index * 8}px)`
                }}
              >
                {index === 0 ? (
                  <ProfileCard
                    profile={profile}
                    onSwipe={handleSwipe}
                  />
                ) : (
                  <div className="glass-card rounded-3xl h-full opacity-50 pointer-events-none">
                    <img
                      src={profile.images[0]}
                      alt={profile.name}
                      className="w-full h-2/3 object-cover rounded-t-3xl"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground">
                        {profile.name}, {profile.age}
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;
