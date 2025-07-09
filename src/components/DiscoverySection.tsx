
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';
import { Sparkles, Filter, MapPin, Sliders } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Mock profile data with more profiles
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
    verified: true,
    distance: 2.5
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
    verified: true,
    distance: 1.8
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
    verified: false,
    distance: 3.2
  },
  {
    id: '4',
    name: 'Maya',
    age: 25,
    location: 'Seattle, WA',
    occupation: 'Data Scientist',
    education: 'University of Washington',
    images: [
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=400&h=600&fit=crop'
    ],
    bio: 'Tech lover with a passion for outdoor adventures. Always learning something new!',
    interests: ['Technology', 'Hiking', 'Data', 'Books', 'Gaming'],
    verified: true,
    distance: 5.1
  },
  {
    id: '5',
    name: 'Ana',
    age: 29,
    location: 'Austin, TX',
    occupation: 'Photographer',
    education: 'University of Texas',
    images: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=400&h=600&fit=crop'
    ],
    bio: 'Capturing life through my lens. Love music festivals, art, and spontaneous adventures.',
    interests: ['Photography', 'Music', 'Art', 'Travel', 'Dogs'],
    verified: true,
    distance: 4.7
  }
];

const DiscoverySection: React.FC = () => {
  const [profiles, setProfiles] = useState(mockProfiles);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    distance: 10,
    ageRange: [22, 35],
    verifiedOnly: false
  });

  const handleSwipe = (direction: 'left' | 'right', profileId: string) => {
    console.log(`Swiped ${direction} on profile ${profileId}`);
    
    if (direction === 'right') {
      // Show match animation or toast
      console.log('Potential match!');
    }
    
    // Remove the swiped profile and move to next
    setTimeout(() => {
      setProfiles(prev => prev.filter(p => p.id !== profileId));
    }, 300);
  };

  const filteredProfiles = profiles.filter(profile => {
    if (filters.verifiedOnly && !profile.verified) return false;
    if (profile.distance > filters.distance) return false;
    if (profile.age < filters.ageRange[0] || profile.age > filters.ageRange[1]) return false;
    return true;
  });

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
          <p className="text-muted-foreground mb-4">
            Swipe right to like, left to pass. Find your perfect match!
          </p>
          
          {/* Filter Controls */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {filteredProfiles.length} profiles nearby
              </span>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6"
            >
              <Card className="glass-card">
                <CardContent className="p-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Distance: {filters.distance} miles
                    </label>
                    <div className="w-full bg-muted rounded-lg h-2">
                      <div 
                        className="bg-romantic-pink h-2 rounded-lg transition-all duration-300" 
                        style={{ width: `${(filters.distance / 25) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Age: {filters.ageRange[0]} - {filters.ageRange[1]}
                    </label>
                    <div className="w-full bg-muted rounded-lg h-2">
                      <div className="bg-romantic-pink h-2 rounded-lg" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Verified profiles only</span>
                    <Button
                      variant={filters.verifiedOnly ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilters(prev => ({ ...prev, verifiedOnly: !prev.verifiedOnly }))}
                    >
                      {filters.verifiedOnly ? 'On' : 'Off'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>

        {/* Card Stack */}
        <div className="relative h-[600px]">
          {filteredProfiles.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-3xl h-full flex items-center justify-center text-center p-8"
            >
              <div>
                <Sparkles className="w-16 h-16 text-romantic-pink mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">No more profiles!</h3>
                <p className="text-muted-foreground mb-4">
                  {profiles.length === 0 
                    ? "Check back later for more matches." 
                    : "Try adjusting your filters to see more profiles."
                  }
                </p>
                {profiles.length > 0 && (
                  <Button 
                    onClick={() => setFilters({ distance: 25, ageRange: [18, 50], verifiedOnly: false })}
                    className="romantic-gradient text-white"
                  >
                    Reset Filters
                  </Button>
                )}
              </div>
            </motion.div>
          ) : (
            filteredProfiles.slice(0, 3).map((profile, index) => (
              <div
                key={profile.id}
                className="absolute inset-0"
                style={{
                  zIndex: filteredProfiles.length - index,
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
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-foreground">
                          {profile.name}, {profile.age}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {profile.distance}mi
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">{profile.occupation}</p>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 mt-8"
        >
          <Button variant="outline" size="lg" className="rounded-full w-16 h-16">
            ❌
          </Button>
          <Button variant="outline" size="lg" className="rounded-full w-16 h-16">
            ⭐
          </Button>
          <Button size="lg" className="romantic-gradient text-white rounded-full w-16 h-16">
            ❤️
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscoverySection;
