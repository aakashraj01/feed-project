import { useState, useEffect } from 'react';
import type { Post, CreatePostPayload } from '../types';
import { storageService } from '../services/storageService';
import { STORAGE_KEYS, SAMPLE_POSTS } from '../utils/constants';
import { useAuth } from './useAuth';

export const usePosts = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const storedPosts = storageService.get<Post[]>(STORAGE_KEYS.POSTS);
    if (!storedPosts || storedPosts.length === 0) {
      const initialPosts = [...SAMPLE_POSTS] as unknown as Post[];
      storageService.set(STORAGE_KEYS.POSTS, initialPosts);
      setPosts(initialPosts);
    } else {
      setPosts(storedPosts);
    }
  }, []);

  const createPost = (payload: CreatePostPayload): void => {
    if (!user) return;

    const capitalizeUsername = (username: string) => {
      return username.charAt(0).toUpperCase() + username.slice(1);
    };

    const newPost: Post = {
      id: Date.now().toString(),
      userId: user.id,
      username: capitalizeUsername(user.username),
      avatar: user.avatar,
      content: payload.content,
      emoji: payload.emoji,
      timestamp: Date.now(),
      likes: 0,
      comments: 0,
    };

    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    storageService.set(STORAGE_KEYS.POSTS, updatedPosts);
  };

  return {
    posts,
    createPost,
  };
};

