import type { Post } from '../../../types';
import { Icon } from '../../common/Icon';
import { Toast } from '../../common/Toast';
import { useToast } from '../../../hooks/useToast';

interface PostCardProps {
  post: Post;
}

const getTimeAgo = (timestamp: number): string => {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  
  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min${minutes > 1 ? 's' : ''} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days > 1 ? 's' : ''} ago`;
};

export const PostCard = ({ post }: PostCardProps) => {
  const { toast, showToast, hideToast } = useToast();

  const handleFeatureNotImplemented = () => {
    showToast('Function not implemented');
  };

  return (
    <>
      {toast.isVisible && (
        <Toast message={toast.message} onClose={hideToast} />
      )}
      <div className="post-card bg-black/[0.03] rounded-[21px] p-[7px]">
      <div className="bg-white border border-black/[0.13] rounded-[18px] p-[13px] mb-[7px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)]">
        <div className="flex gap-[13px]">
          {/* Avatar */}
          <div className="flex-shrink-0">
            {post.emoji ? (
              <>
                <div className="w-[37px] h-[37px] rounded-[7px] bg-[#f6f6f6] flex items-center justify-center mb-[8px] overflow-hidden">
                  {post.avatar && (
                    post.avatar.startsWith('/') || post.avatar.startsWith('http') ? (
                      <img 
                        src={post.avatar} 
                        alt={post.username}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-xl">{post.avatar}</span>
                    )
                  )}
                </div>
                
                {/* Emoji badge below avatar */}
                <div className="w-[30px] h-[30px] rounded-full bg-[#f2f2f2] flex items-center justify-center ml-[4px]">
                  <span className="text-lg">{post.emoji}</span>
                </div>
              </>
            ) : (
              <div className="w-[37px] h-[37px] rounded-[7px] bg-[#f6f6f6] flex items-center justify-center overflow-hidden">
                {post.avatar && (
                  post.avatar.startsWith('/') || post.avatar.startsWith('http') ? (
                    <img 
                      src={post.avatar} 
                      alt={post.username}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xl">{post.avatar}</span>
                  )
                )}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="mb-[10px]">
              <h3 className="font-semibold text-[13px] text-black leading-normal">
                {post.username}
              </h3>
              <p className="font-medium text-xs text-black/[0.37] leading-normal">
                {getTimeAgo(post.timestamp)}
              </p>
            </div>

            <p className="font-medium text-sm text-black/[0.83] leading-[21px]">
              {post.content}
            </p>
          </div>
        </div>
      </div>

      {/* Action buttons inside the gray background */}
      <div className="flex items-center gap-[20px] pl-[13px]">
        <button 
          onClick={handleFeatureNotImplemented}
          className="hover:opacity-60 transition-opacity"
          aria-label="Like"
        >
          <Icon name="heart" size={16} className="text-black" />
        </button>
        <button 
          onClick={handleFeatureNotImplemented}
          className="hover:opacity-60 transition-opacity"
          aria-label="Comment"
        >
          <Icon name="comment" size={15} className="text-black" />
        </button>
        <button 
          onClick={handleFeatureNotImplemented}
          className="hover:opacity-60 transition-opacity"
          aria-label="Share"
        >
          <Icon name="share" size={15} className="text-black" />
        </button>
      </div>
    </div>
    </>
  );
};
