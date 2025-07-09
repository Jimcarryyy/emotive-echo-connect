
import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number; color: string }>>([]);

  useEffect(() => {
    const colors = ['text-romantic-pink', 'text-warm-coral', 'text-soft-lavender', 'text-sunset-orange'];
    
    const createHeart = () => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
      
      setHearts(prev => [...prev, newHeart]);
      
      // Remove heart after animation completes
      setTimeout(() => {
        setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
      }, 8000);
    };

    const interval = setInterval(createHeart, 3000);
    
    // Create initial hearts
    for (let i = 0; i < 3; i++) {
      setTimeout(createHeart, i * 1000);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map(heart => (
        <Heart
          key={heart.id}
          className={`floating-heart ${heart.color} w-6 h-6`}
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`
          }}
          fill="currentColor"
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
