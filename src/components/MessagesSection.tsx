
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Heart, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'match';
  timestamp: Date;
}

interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: Date;
  unread: number;
  online: boolean;
}

const mockChats: Chat[] = [
  {
    id: '1',
    name: 'Emma',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b6c7?w=100&h=100&fit=crop',
    lastMessage: 'Hey! How was your weekend?',
    timestamp: new Date(),
    unread: 2,
    online: true
  },
  {
    id: '2',
    name: 'Sophia',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    lastMessage: 'That restaurant looks amazing!',
    timestamp: new Date(Date.now() - 3600000),
    unread: 0,
    online: false
  }
];

const mockMessages: Message[] = [
  {
    id: '1',
    text: 'Hey there! I loved your profile picture at the beach!',
    sender: 'match',
    timestamp: new Date(Date.now() - 7200000)
  },
  {
    id: '2',
    text: 'Thank you! That was from my trip to Malibu last month. Do you like the beach too?',
    sender: 'user',
    timestamp: new Date(Date.now() - 7000000)
  },
  {
    id: '3',
    text: 'Absolutely! I go surfing there pretty often. Maybe we could go together sometime?',
    sender: 'match',
    timestamp: new Date(Date.now() - 6800000)
  }
];

const MessagesSection: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState(mockMessages);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = diff / (1000 * 60 * 60);
    
    if (hours < 1) return 'now';
    if (hours < 24) return `${Math.floor(hours)}h`;
    return `${Math.floor(hours / 24)}d`;
  };

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-romantic-pink mr-2" />
            <h2 className="text-3xl font-bold text-foreground">Messages</h2>
          </div>
          <p className="text-muted-foreground">
            Connect with your matches and start meaningful conversations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[700px]">
          {/* Chat List */}
          <div className="glass-card rounded-2xl p-6">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search conversations..."
                  className="pl-10 bg-white/50 dark:bg-white/10"
                />
              </div>
            </div>

            <div className="space-y-3">
              {mockChats.map((chat) => (
                <motion.div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat.id)}
                  className={`p-4 rounded-xl cursor-pointer transition-colors ${
                    selectedChat === chat.id
                      ? 'bg-romantic-pink/20'
                      : 'hover:bg-white/20 dark:hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={chat.avatar}
                        alt={chat.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {chat.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-foreground truncate">{chat.name}</h3>
                        <span className="text-xs text-muted-foreground">
                          {formatTime(chat.timestamp)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {chat.lastMessage}
                      </p>
                    </div>
                    
                    {chat.unread > 0 && (
                      <div className="w-5 h-5 bg-romantic-pink rounded-full flex items-center justify-center">
                        <span className="text-xs text-white">{chat.unread}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="lg:col-span-2 glass-card rounded-2xl flex flex-col">
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="p-6 border-b border-white/20">
                  <div className="flex items-center space-x-3">
                    <img
                      src={mockChats.find(c => c.id === selectedChat)?.avatar}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {mockChats.find(c => c.id === selectedChat)?.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">Online now</p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 p-6 overflow-y-auto">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                            message.sender === 'user'
                              ? 'bg-romantic-pink text-white rounded-br-sm'
                              : 'bg-white/20 dark:bg-white/10 text-foreground rounded-bl-sm'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p className={`text-xs mt-1 ${
                            message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
                          }`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Message Input */}
                <div className="p-6 border-t border-white/20">
                  <div className="flex space-x-3">
                    <Input
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 bg-white/50 dark:bg-white/10"
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button
                      onClick={handleSendMessage}
                      size="icon"
                      className="romantic-gradient text-white"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-center p-8">
                <div>
                  <Heart className="w-16 h-16 text-romantic-pink mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Select a conversation
                  </h3>
                  <p className="text-muted-foreground">
                    Choose a chat from the sidebar to start messaging
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagesSection;
