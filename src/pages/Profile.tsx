
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Edit, Settings, Star, Heart, MessageCircle, MapPin, Briefcase, GraduationCap, Calendar, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Profile = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const userProfile = {
    name: 'Alex Jordan',
    age: 28,
    location: 'San Francisco, CA',
    occupation: 'Product Designer',
    education: 'Stanford University',
    bio: 'Passionate about design, travel, and good coffee. Looking for someone who shares my love for adventure and meaningful conversations. Always up for trying new restaurants or exploring hidden gems in the city.',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=600&fit=crop'
    ],
    interests: ['Photography', 'Hiking', 'Cooking', 'Travel', 'Art', 'Music'],
    preferences: {
      ageRange: [25, 35],
      distance: 25,
      looking: 'Long-term relationship'
    },
    stats: {
      matches: 127,
      likes: 45,
      views: 1240
    },
    verified: true,
    lastActive: '2 hours ago'
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
              <p className="text-muted-foreground">Manage your dating profile and preferences</p>
            </div>
            <Button className="romantic-gradient text-white">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="photos">Photos</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Profile Card */}
                <div className="lg:col-span-2">
                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        <div className="relative">
                          <img
                            src={userProfile.images[0]}
                            alt={userProfile.name}
                            className="w-32 h-32 rounded-2xl object-cover"
                          />
                          {userProfile.verified && (
                            <div className="absolute -top-2 -right-2 bg-romantic-pink text-white rounded-full p-1">
                              <Shield className="w-4 h-4" />
                            </div>
                          )}
                          <Button
                            size="sm"
                            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                          >
                            <Camera className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h2 className="text-2xl font-bold text-foreground">
                              {userProfile.name}, {userProfile.age}
                            </h2>
                            <Badge variant="secondary" className="text-xs">
                              Online {userProfile.lastActive}
                            </Badge>
                          </div>
                          
                          <div className="space-y-2 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {userProfile.location}
                            </div>
                            <div className="flex items-center gap-2">
                              <Briefcase className="w-4 h-4" />
                              {userProfile.occupation}
                            </div>
                            <div className="flex items-center gap-2">
                              <GraduationCap className="w-4 h-4" />
                              {userProfile.education}
                            </div>
                          </div>
                          
                          <p className="text-foreground mb-4">{userProfile.bio}</p>
                          
                          <div className="flex flex-wrap gap-2">
                            {userProfile.interests.map((interest) => (
                              <Badge key={interest} variant="outline">
                                {interest}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Stats Card */}
                <div className="space-y-6">
                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Profile Stats</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Heart className="w-5 h-5 text-romantic-pink" />
                            <span className="text-sm text-muted-foreground">Total Matches</span>
                          </div>
                          <span className="font-semibold text-foreground">{userProfile.stats.matches}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-golden-hour" />
                            <span className="text-sm text-muted-foreground">Likes Received</span>
                          </div>
                          <span className="font-semibold text-foreground">{userProfile.stats.likes}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <MessageCircle className="w-5 h-5 text-soft-lavender" />
                            <span className="text-sm text-muted-foreground">Profile Views</span>
                          </div>
                          <span className="font-semibold text-foreground">{userProfile.stats.views}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start">
                          <Settings className="w-4 h-4 mr-2" />
                          Privacy Settings
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Shield className="w-4 h-4 mr-2" />
                          Verify Profile
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Star className="w-4 h-4 mr-2" />
                          Boost Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="photos" className="space-y-6">
              <Card className="glass-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Photo Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {userProfile.images.map((image, index) => (
                      <motion.div
                        key={index}
                        className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setActiveImageIndex(index)}
                      >
                        <img
                          src={image}
                          alt={`Photo ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {index === 0 && (
                          <div className="absolute top-2 left-2 bg-romantic-pink text-white text-xs px-2 py-1 rounded">
                            Main
                          </div>
                        )}
                      </motion.div>
                    ))}
                    <motion.div
                      className="aspect-square rounded-lg border-2 border-dashed border-muted-foreground/50 flex items-center justify-center cursor-pointer hover:border-romantic-pink transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-center">
                        <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <span className="text-sm text-muted-foreground">Add Photo</span>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferences" className="space-y-6">
              <Card className="glass-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Dating Preferences</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Age Range: {userProfile.preferences.ageRange[0]} - {userProfile.preferences.ageRange[1]}
                      </label>
                      <div className="w-full bg-muted rounded-lg h-2">
                        <div className="bg-romantic-pink h-2 rounded-lg" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Distance: {userProfile.preferences.distance} miles
                      </label>
                      <div className="w-full bg-muted rounded-lg h-2">
                        <div className="bg-romantic-pink h-2 rounded-lg" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Looking for
                      </label>
                      <Badge variant="secondary">{userProfile.preferences.looking}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card className="glass-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Account Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">Show me on LoveConnect</span>
                      <div className="w-12 h-6 bg-romantic-pink rounded-full relative">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">Distance sharing</span>
                      <div className="w-12 h-6 bg-romantic-pink rounded-full relative">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">Push notifications</span>
                      <div className="w-12 h-6 bg-muted rounded-full relative">
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
