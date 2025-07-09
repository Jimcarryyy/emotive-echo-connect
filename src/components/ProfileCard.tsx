
import React, { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { Heart, X, Star, MapPin, Briefcase, GraduationCap } from 'lucide-react';

interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  occupation: string;
  education: string;
  images: string[];
  bio: string;
  interests: string[];
  verified: boolean;
}

interface ProfileCardProps {
  profile: Profile;
  onSwipe: (direction: 'left' | 'right', profileId: string) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onSwipe }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState<'left' | 'right' | null>(null);

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 100;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (Math.abs(velocity) >= 500 || Math.abs(offset) >= threshold) {
      const direction = offset > 0 ? 'right' : 'left';
      setExitDirection(direction);
      setTimeout(() => onSwipe(direction, profile.id), 200);
    }
  };

  const handleAction = (action: 'like' | 'pass' | 'superlike') => {
    if (action === 'like') {
      setExitDirection('right');
      setTimeout(() => onSwipe('right', profile.id), 200);
    } else if (action === 'pass') {
      setExitDirection('left');
      setTimeout(() => onSwipe('left', profile.id), 200);
    }
  };

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      animate={
        exitDirection
          ? {
              x: exitDirection === 'right' ? 300 : -300,
              rotate: exitDirection === 'right' ? 10 : -10,
              opacity: 0
            }
          : { x: 0, rotate: 0, opacity: 1 }
      }
      transition={{ duration: 0.3 }}
      whileDrag={{ rotate: 5 }}
    >
      <div className="glass-card rounded-3xl overflow-hidden h-full shadow-2xl">
        {/* Image Section */}
        <div className="relative h-2/3 overflow-hidden">
          <img
            src={profile.images[currentImageIndex]}
            alt={`${profile.name}`}
            className="w-full h-full object-cover"
          />
          
          {/* Image Navigation Dots */}
          <div className="absolute top-4 left-4 right-4 flex space-x-2">
            {profile.images.map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 rounded-full ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Verified Badge */}
          {profile.verified && (
            <div className="absolute top-4 right-4 bg-blue-500 rounded-full p-2">
              <Star className="w-4 h-4 text-white" fill="currentColor" />
            </div>
          )}

          {/* Click zones for image navigation */}
          <div className="absolute inset-0 flex">
            <div
              className="w-1/2 h-full"
              onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
            />
            <div
              className="w-1/2 h-full"
              onClick={() => setCurrentImageIndex(Math.min(profile.images.length - 1, currentImageIndex + 1))}
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="p-6 h-1/3 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">
                {profile.name}, {profile.age}
              </h2>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">{profile.location}</span>
              </div>
              
              <div className="flex items-center text-muted-foreground">
                <Briefcase className="w-4 h-4 mr-2" />
                <span className="text-sm">{profile.occupation}</span>
              </div>
              
              <div className="flex items-center text-muted-foreground">
                <GraduationCap className="w-4 h-4 mr-2" />
                <span className="text-sm">{profile.education}</span>
              </div>
            </div>

            {/* Interests */}
            <div className="flex flex-wrap gap-2">
              {profile.interests.slice(0, 3).map((interest, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-romantic-pink/20 text-romantic-pink rounded-full text-xs"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mt-4">
            <motion.button
              onClick={() => handleAction('pass')}
              className="w-14 h-14 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 hover:bg-red-500/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>
            
            <motion.button
              onClick={() => handleAction('superlike')}
              className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 hover:bg-blue-500/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Star className="w-6 h-6" />
            </motion.button>
            
            <motion.button
              onClick={() => handleAction('like')}
              className="w-14 h-14 rounded-full bg-romantic-pink/20 flex items-center justify-center text-romantic-pink hover:bg-romantic-pink/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
