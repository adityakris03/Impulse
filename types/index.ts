export interface Group {
  id: string;
  title: string;
  description: string;
  memberCount: number;
  isJoined: boolean;
  color: string;
}

export interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
  isOwn: boolean;
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
}
