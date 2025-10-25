import type { Post } from '../../../types';
import { PostCard } from './PostCard';

interface FeedListProps {
  posts: Post[];
}

export const FeedList = ({ posts }: FeedListProps) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-black/40 font-medium">No posts yet. Be the first to share something!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

