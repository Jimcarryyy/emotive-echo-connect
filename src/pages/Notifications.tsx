
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Star, Eye, Gift, Bell, BellOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Notifications = () => {
  const [notifications] = useState([
    {
      id: 1,
      type: 'match',
      user: { name: 'Emma Watson', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b6c7?w=100&h=100&fit=crop' },
      message: 'You have a new match!',
      time: '2 minutes ago',
      unread: true
    },
    {
      id: 2,
      type: 'like',
      user: { name: 'Sophie Chen', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
      message: 'Liked your profile',
      time: '1 hour ago',
      unread: true
    },
    {
      id: 3,
      type: 'message',
      user: { name: 'Isabella Rodriguez', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop' },
      message: 'Hey! How was your weekend?',
      time: '3 hours ago',
      unread: false
    },
    {
      id: 4,
      type: 'view',
      user: { name: 'Maya Patel', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop' },
      message: 'Viewed your profile',
      time: '5 hours ago',
      unread: false
    },
    {
      id: 5,
      type: 'super_like',
      user: { name: 'Ana Silva', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop' },
      message: 'Super liked you!',
      time: '1 day ago',
      unread: false
    }
  ]);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'match':
        return <Heart className="w-5 h-5 text-romantic-pink" fill="currentColor" />;
      case 'like':
        return <Heart className="w-5 h-5 text-romantic-pink" />;
      case 'message':
        return <MessageCircle className="w-5 h-5 text-soft-lavender" />;
      case 'view':
        return <Eye className="w-5 h-5 text-golden-hour" />;
      case 'super_like':
        return <Star className="w-5 h-5 text-sunset-orange" fill="currentColor" />;
      default:
        return <Bell className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getNotificationBg = (type: string) => {
    switch (type) {
      case 'match':
        return 'bg-romantic-pink/10 border-romantic-pink/20';
      case 'like':
        return 'bg-romantic-pink/10 border-romantic-pink/20';
      case 'message':
        return 'bg-soft-lavender/10 border-soft-lavender/20';
      case 'view':
        return 'bg-golden-hour/10 border-golden-hour/20';
      case 'super_like':
        return 'bg-sunset-orange/10 border-sunset-orange/20';
      default:
        return 'bg-muted/10 border-muted/20';
    }
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                <Bell className="w-8 h-8 text-romantic-pink" />
                Notifications
                {unreadCount > 0 && (
                  <Badge className="bg-romantic-pink text-white">
                    {unreadCount} new
                  </Badge>
                )}
              </h1>
              <p className="text-muted-foreground">Stay updated with your dating activity</p>
            </div>
            <Button variant="outline">
              <BellOff className="w-4 h-4 mr-2" />
              Mark All Read
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="matches">Matches</TabsTrigger>
              <TabsTrigger value="likes">Likes</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="views">Views</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {notifications.map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`glass-card cursor-pointer hover:shadow-lg transition-all duration-300 ${
                    notification.unread ? 'ring-2 ring-romantic-pink/20' : ''
                  }`}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <img
                            src={notification.user.image}
                            alt={notification.user.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className={`absolute -bottom-1 -right-1 p-1 rounded-full border-2 border-background ${getNotificationBg(notification.type)}`}>
                            {getNotificationIcon(notification.type)}
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-foreground truncate">
                              {notification.user.name}
                            </h3>
                            <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                              {notification.time}
                            </span>
                          </div>
                          <p className="text-muted-foreground text-sm mt-1">
                            {notification.message}
                          </p>
                          {notification.unread && (
                            <div className="w-2 h-2 bg-romantic-pink rounded-full mt-2"></div>
                          )}
                        </div>

                        {notification.type === 'match' && (
                          <Button size="sm" className="romantic-gradient text-white">
                            Say Hi!
                          </Button>
                        )}
                        {notification.type === 'message' && (
                          <Button size="sm" variant="outline">
                            Reply
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="matches" className="space-y-4">
              {notifications.filter(n => n.type === 'match').map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card cursor-pointer hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={notification.user.image}
                          alt={notification.user.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground text-lg">
                            🎉 It's a Match with {notification.user.name}!
                          </h3>
                          <p className="text-muted-foreground">
                            You both liked each other. Start a conversation now!
                          </p>
                        </div>
                        <Button className="romantic-gradient text-white">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Chat Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="likes" className="space-y-4">
              {notifications.filter(n => n.type === 'like' || n.type === 'super_like').map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card cursor-pointer hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={notification.user.image}
                          alt={notification.user.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">
                            {notification.user.name}
                          </h3>
                          <p className="text-muted-foreground">{notification.message}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="text-muted-foreground">
                            Pass
                          </Button>
                          <Button size="sm" className="romantic-gradient text-white">
                            <Heart className="w-4 h-4 mr-1" />
                            Like Back
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="messages" className="space-y-4">
              {notifications.filter(n => n.type === 'message').map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card cursor-pointer hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={notification.user.image}
                          alt={notification.user.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">
                            {notification.user.name}
                          </h3>
                          <p className="text-muted-foreground">{notification.message}</p>
                        </div>
                        <Button size="sm" className="romantic-gradient text-white">
                          Reply
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="views" className="space-y-4">
              {notifications.filter(n => n.type === 'view').map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card cursor-pointer hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={notification.user.image}
                          alt={notification.user.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">
                            {notification.user.name}
                          </h3>
                          <p className="text-muted-foreground">{notification.message}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          View Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Notifications;
