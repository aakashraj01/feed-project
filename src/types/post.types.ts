export interface Post {
  id: string;
  userId: string;
  username: string;
  avatar?: string;
  content: string;
  emoji?: string;
  timestamp: number;
  likes: number;
  comments: number;
}

export interface CreatePostPayload {
  content: string;
  emoji?: string;
}

