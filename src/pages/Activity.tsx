
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity as ActivityIcon, TrendingUp, Users, Heart, MessageCircle, Eye, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Activity = () => {
  const [timeframe, setTimeframe] = useState('week');

  const activityStats = {
    week: {
      profileViews: 87,
      likes: 23,
      matches: 8,
      messages: 45,
      newConnections: 12
    },
    month: {
      profileViews: 342,
      likes: 98,
      matches: 34,
      messages: 189,
      newConnections: 67
    }
  };

  const recentActivity = [
    {
      type: 'match',
      user: 'Emma Watson',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b6c7?w=50&h=50&fit=crop',
      time: '2 hours ago',
      location: 'San Francisco'
    },
    {
      type: 'like',
      user: 'Sophie Chen',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop',
      time: '4 hours ago',
      location: 'Oakland'
    },
    {
      type: 'view',
      user: 'Maya Patel',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=50&h=50&fit=crop',
      time: '6 hours ago',
      location: 'Berkeley'
    },
    {
      type: 'message',
      user: 'Isabella Rodriguez',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=50&h=50&fit=crop',
      time: '1 day ago',
      location: 'San Jose'
    }
  ];

  const popularTimes = [
    { hour: '6 PM', activity: 85 },
    { hour: '7 PM', activity: 92 },
    { hour: '8 PM', activity: 100 },
    { hour: '9 PM', activity: 78 },
    { hour: '10 PM', activity: 65 }
  ];

  const stats = activityStats[timeframe as keyof typeof activityStats];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                <ActivityIcon className="w-8 h-8 text-romantic-pink" />
                Activity Dashboard
              </h1>
              <p className="text-muted-foreground">Track your dating journey and engagement</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant={timeframe === 'week' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTimeframe('week')}
              >
                This Week
              </Button>
              <Button
                variant={timeframe === 'month' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTimeframe('month')}
              >
                This Month
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Card className="glass-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Profile Views</p>
                    <p className="text-2xl font-bold text-foreground">{stats.profileViews}</p>
                  </div>
                  <Eye className="w-8 h-8 text-golden-hour" />
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-500">+12%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Likes Received</p>
                    <p className="text-2xl font-bold text-foreground">{stats.likes}</p>
                  </div>
                  <Heart className="w-8 h-8 text-romantic-pink" />
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-500">+8%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">New Matches</p>
                    <p className="text-2xl font-bold text-foreground">{stats.matches}</p>
                  </div>
                  <Users className="w-8 h-8 text-soft-lavender" />
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-500">+25%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Messages</p>
                    <p className="text-2xl font-bold text-foreground">{stats.messages}</p>
                  </div>
                  <MessageCircle className="w-8 h-8 text-warm-coral" />
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-500">+18%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Connections</p>
                    <p className="text-2xl font-bold text-foreground">{stats.newConnections}</p>
                  </div>
                  <ActivityIcon className="w-8 h-8 text-sunset-orange" />
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-500">+15%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/20 transition-colors"
                  >
                    <img
                      src={activity.image}
                      alt={activity.user}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{activity.user}</span>
                        <Badge variant="outline" className="text-xs">
                          {activity.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {activity.location} • {activity.time}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Popular Times */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Peak Activity Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {popularTimes.map((time, index) => (
                    <div key={time.hour} className="flex items-center gap-3">
                      <span className="text-sm font-medium w-12">{time.hour}</span>
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <motion.div
                          className="bg-romantic-pink h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${time.activity}%` }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-8">{time.activity}%</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-romantic-pink/10 rounded-lg">
                  <p className="text-sm text-foreground">
                    💡 <strong>Tip:</strong> You get the most engagement between 7-9 PM. 
                    Try being active during these hours!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Insights */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Weekly Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-romantic-pink/10">
                  <div className="text-2xl mb-2">🔥</div>
                  <h3 className="font-semibold text-foreground">Hot Streak!</h3>
                  <p className="text-sm text-muted-foreground">
                    You're on a 5-day matching streak
                  </p>
                </div>
                <div className="text-center p-4 rounded-lg bg-golden-hour/10">
                  <div className="text-2xl mb-2">⭐</div>
                  <h3 className="font-semibold text-foreground">Profile Boost</h3>
                  <p className="text-sm text-muted-foreground">
                    Your profile views increased by 40%
                  </p>
                </div>
                <div className="text-center p-4 rounded-lg bg-soft-lavender/10">
                  <div className="text-2xl mb-2">💬</div>
                  <h3 className="font-semibold text-foreground">Great Conversations</h3>
                  <p className="text-sm text-muted-foreground">
                    Average response time: 2 hours
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Activity;
