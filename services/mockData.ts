import { Group, Message } from "@/types";

export const mockGroups: Group[] = [
  {
    id: "1",
    title: "Productivity Masters",
    description:
      "Share tips, tools, and techniques for maximizing productivity",
    memberCount: 1247,
    isJoined: false,
    color: "#FF6B6B",
  },
  {
    id: "2",
    title: "Creative Coders",
    description: "Discuss innovative coding approaches and creative solutions",
    memberCount: 892,
    isJoined: true,
    color: "#4ECDC4",
  },
  {
    id: "3",
    title: "Mindful Developers",
    description: "Balance work and wellness in the tech industry",
    memberCount: 567,
    isJoined: false,
    color: "#45B7D1",
  },
  {
    id: "4",
    title: "Startup Founders",
    description: "Connect with fellow entrepreneurs and share startup insights",
    memberCount: 2341,
    isJoined: false,
    color: "#96CEB4",
  },
  {
    id: "5",
    title: "Remote Work Pros",
    description: "Master the art of remote work and distributed teams",
    memberCount: 1567,
    isJoined: true,
    color: "#FFEAA7",
  },
];

export const mockMessages: Record<string, Message[]> = {
  "1": [
    {
      id: "1",
      text: "Hey everyone! What productivity tools are you using these days?",
      sender: "Sarah Chen",
      timestamp: new Date(Date.now() - 3600000),
      isOwn: false,
    },
    {
      id: "2",
      text: "I've been loving Notion for project management and Forest for focus time!",
      sender: "You",
      timestamp: new Date(Date.now() - 1800000),
      isOwn: true,
    },
    {
      id: "3",
      text: "Forest is amazing! I also use RescueTime to track where my time goes.",
      sender: "Mike Johnson",
      timestamp: new Date(Date.now() - 900000),
      isOwn: false,
    },
    {
      id: "4",
      text: "Has anyone tried the Pomodoro technique with Forest?",
      sender: "Alex Rivera",
      timestamp: new Date(Date.now() - 300000),
      isOwn: false,
    },
  ],
  "2": [
    {
      id: "1",
      text: "What's your favorite design pattern for React components?",
      sender: "Emma Wilson",
      timestamp: new Date(Date.now() - 2400000),
      isOwn: false,
    },
    {
      id: "2",
      text: "I love the compound component pattern for complex UIs!",
      sender: "You",
      timestamp: new Date(Date.now() - 1200000),
      isOwn: true,
    },
  ],
  "3": [
    {
      id: "1",
      text: "How do you maintain work-life balance in tech?",
      sender: "David Kim",
      timestamp: new Date(Date.now() - 1800000),
      isOwn: false,
    },
  ],
  "4": [
    {
      id: "1",
      text: "What's the biggest challenge you faced when starting your company?",
      sender: "Lisa Park",
      timestamp: new Date(Date.now() - 3000000),
      isOwn: false,
    },
  ],
  "5": [
    {
      id: "1",
      text: "Best practices for managing remote teams?",
      sender: "Tom Anderson",
      timestamp: new Date(Date.now() - 1500000),
      isOwn: false,
    },
    {
      id: "2",
      text: "Daily standups and clear communication channels are key!",
      sender: "You",
      timestamp: new Date(Date.now() - 600000),
      isOwn: true,
    },
  ],
};

export const getGroupById = (id: string): Group | undefined => {
  return mockGroups.find((group) => group.id === id);
};

export const getMessagesByGroupId = (groupId: string): Message[] => {
  return mockMessages[groupId] || [];
};
