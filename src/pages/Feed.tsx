import { useState } from 'react';
import { PostEditor } from '../components/features/feed/PostEditor';
import { FeedList } from '../components/features/feed/FeedList';
import { SignInModal } from '../components/features/auth/SignInModal';
import { SignUpModal } from '../components/features/auth/SignUpModal';
import { usePosts } from '../hooks/usePosts';
import { useAuth } from '../hooks/useAuth';

export const Feed = () => {
  const { posts, createPost } = usePosts();
  const { isAuthenticated } = useAuth();
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handlePublish = (content: string, emoji?: string) => {
    if (!isAuthenticated) {
      setShowSignInModal(true);
      return;
    }
    createPost({ content, emoji });
  };

  const handleAuthRequired = () => {
    setShowSignInModal(true);
  };

  const handleSwitchToSignUp = () => {
    setShowSignInModal(false);
    setShowSignUpModal(true);
  };

  const handleSwitchToSignIn = () => {
    setShowSignUpModal(false);
    setShowSignInModal(true);
  };

  return (
    <div className="max-w-[568px] mx-auto px-4 py-16">
      <div className="space-y-6">
        <PostEditor onPublish={handlePublish} onAuthRequired={handleAuthRequired} />
        <FeedList posts={posts} />
      </div>

      <SignInModal 
        isOpen={showSignInModal} 
        onClose={() => setShowSignInModal(false)}
        onSwitchToSignUp={handleSwitchToSignUp}
      />
      <SignUpModal 
        isOpen={showSignUpModal} 
        onClose={() => setShowSignUpModal(false)}
        onSwitchToSignIn={handleSwitchToSignIn}
      />
    </div>
  );
};

