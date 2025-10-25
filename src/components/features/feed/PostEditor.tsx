import { useState, useRef } from 'react';
import { Icon } from '../../common/Icon';
import { Toast } from '../../common/Toast';
import { useAuth } from '../../../hooks/useAuth';
import { useToast } from '../../../hooks/useToast';

interface PostEditorProps {
  onPublish: (content: string, emoji?: string) => void;
  onAuthRequired: () => void;
}

export const PostEditor = ({ onPublish, onAuthRequired }: PostEditorProps) => {
  const { isAuthenticated } = useAuth();
  const { toast, showToast, hideToast } = useToast();
  const [content, setContent] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState<string>('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [activeFormats, setActiveFormats] = useState<Set<string>>(new Set(['bold']));
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const emojis = ['😊', '🥴', '🤞', '💀', '❤️', '🔥', '👍', '😂', '🎉', '✨'];

  const handleFeatureNotImplemented = () => {
    showToast('Function not implemented');
  };

  const toggleFormat = (format: string) => {
    setActiveFormats((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(format)) {
        newSet.delete(format);
      } else {
        newSet.add(format);
      }
      return newSet;
    });
    handleFeatureNotImplemented();
  };

  const handleTextareaClick = () => {
    if (!isAuthenticated) {
      onAuthRequired();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      onAuthRequired();
      return;
    }

    if (!content.trim()) return;

    onPublish(content, selectedEmoji);
    setContent('');
    setSelectedEmoji('');
  };

  const handleEmojiClick = () => {
    if (!isAuthenticated) {
      onAuthRequired();
      return;
    }
    setShowEmojiPicker(!showEmojiPicker);
  };

  const selectEmoji = (emoji: string) => {
    setSelectedEmoji(emoji);
    setShowEmojiPicker(false);
  };

  return (
    <>
      {toast.isVisible && (
        <Toast message={toast.message} onClose={hideToast} />
      )}
      <div className="bg-black/[0.03] rounded-[21px] p-2">
        <div className="bg-white border border-black/[0.13] rounded-[18px] h-[210px] flex flex-col">
        {/* Toolbar */}
        <div className="flex-shrink-0 px-[9px] py-[9px] flex items-center justify-between gap-[9px]">
          <div className="bg-black/[0.03] rounded-[10px] h-[40px] flex items-center px-[10px] gap-[16px]">
            <div className="bg-white rounded-[7px] shadow-[0px_1px_7px_0px_rgba(0,0,0,0.09)] px-3 h-[32px] flex items-center gap-1.5">
              <span className="font-medium text-xs text-black/80">Paragraph</span>
              <Icon name="chevron-down" size={10} />
            </div>

            <div className="flex items-center gap-[6px]">
              <button 
                onClick={() => toggleFormat('bold')}
                className={`rounded-[7px] p-2 transition-all ${activeFormats.has('bold') ? 'bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]' : 'hover:bg-white/50'}`}
                aria-label="Bold"
              >
                <Icon name="bold" size={14} />
              </button>
              <button 
                onClick={() => toggleFormat('italic')}
                className={`rounded-[7px] p-1.5 transition-all ${activeFormats.has('italic') ? 'bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]' : 'hover:bg-white/50'}`}
                aria-label="Italic"
              >
                <Icon name="italic" size={14} />
              </button>
              <button 
                onClick={() => toggleFormat('underline')}
                className={`rounded-[7px] p-1.5 transition-all ${activeFormats.has('underline') ? 'bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]' : 'hover:bg-white/50'}`}
                aria-label="Underline"
              >
                <Icon name="underline" size={14} />
              </button>
            </div>

            <div className="h-[32px] w-[1px] bg-black/10" />

            <div className="flex items-center gap-[6px]">
              <button 
                onClick={() => toggleFormat('unordered-list')}
                className={`rounded-[7px] p-1.5 transition-all ${activeFormats.has('unordered-list') ? 'bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]' : 'hover:bg-white/50'}`}
                aria-label="Unordered list"
              >
                <Icon name="list-unordered" size={14} />
              </button>
              <button 
                onClick={() => toggleFormat('ordered-list')}
                className={`rounded-[7px] p-1.5 transition-all ${activeFormats.has('ordered-list') ? 'bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]' : 'hover:bg-white/50'}`}
                aria-label="Ordered list"
              >
                <Icon name="list-ordered" size={14} />
              </button>
            </div>

            <div className="h-[32px] w-[1px] bg-black/10" />

            <div className="flex items-center gap-[6px]">
              <button 
                onClick={() => toggleFormat('quote')}
                className={`rounded-[7px] p-1.5 transition-all ${activeFormats.has('quote') ? 'bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]' : 'hover:bg-white/50'}`}
                aria-label="Quote"
              >
                <Icon name="quote" size={14} />
              </button>
              <button 
                onClick={() => toggleFormat('code')}
                className={`rounded-[7px] p-1.5 transition-all ${activeFormats.has('code') ? 'bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]' : 'hover:bg-white/50'}`}
                aria-label="Code"
              >
                <Icon name="code" size={14} />
              </button>
            </div>
          </div>

          <button 
            onClick={handleFeatureNotImplemented}
            className="flex-shrink-0 w-[40px] h-[40px] bg-red-500/15 hover:bg-red-500/20 rounded-[10px] flex items-center justify-center transition-colors"
            aria-label="Delete"
          >
            <Icon name="trash" size={16} />
          </button>
        </div>

        {/* Content Area */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
          <div className="flex-1 relative px-[9px]">
            <div className="absolute left-[9px] top-0 flex items-center">
              <button
                type="button"
                onClick={handleEmojiClick}
                className="p-2 hover:bg-black/5 rounded-lg transition-colors"
                aria-label="Add emoji"
              >
                <Icon name="emoji" size={18} />
              </button>
            </div>

            {showEmojiPicker && (
              <div className="absolute left-[9px] top-12 bg-white rounded-lg shadow-lg border border-black/10 p-3 z-10 emoji-picker">
                <div className="grid grid-cols-5 gap-2">
                  {emojis.map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => selectEmoji(emoji)}
                      className="text-2xl hover:scale-110 transition-transform"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onClick={handleTextareaClick}
              onFocus={handleTextareaClick}
              placeholder="How are you feeling today?"
              className="w-full h-full pl-[45px] pr-4 pt-2 font-medium text-sm text-black placeholder:text-black/40 resize-none outline-none bg-transparent"
            />

            {selectedEmoji && (
              <div className="absolute right-[13px] top-2 text-2xl bg-white rounded-lg shadow-sm px-2 py-1">
                {selectedEmoji}
              </div>
            )}
          </div>

          {/* Bottom Actions */}
          <div className="flex-shrink-0 border-t border-black/10 h-[50px] px-[9px] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={!isAuthenticated ? onAuthRequired : handleFeatureNotImplemented}
                className="w-[30px] h-[30px] bg-black/[0.06] hover:bg-black/10 rounded-[10px] flex items-center justify-center transition-colors"
                aria-label="Add attachment"
              >
                <Icon name="plus" size={18} />
              </button>
              <button
                type="button"
                onClick={!isAuthenticated ? onAuthRequired : handleFeatureNotImplemented}
                className="w-[30px] h-[30px] hover:bg-black/[0.06] rounded-[10px] flex items-center justify-center transition-colors"
                aria-label="Add voice"
              >
                <Icon name="mic" size={18} />
              </button>
              <button
                type="button"
                onClick={!isAuthenticated ? onAuthRequired : handleFeatureNotImplemented}
                className="w-[30px] h-[30px] hover:bg-black/[0.06] rounded-[10px] flex items-center justify-center transition-colors"
                aria-label="Add video"
              >
                <Icon name="video" size={18} />
              </button>
            </div>

            <button
              type="submit"
              disabled={!content.trim() || !isAuthenticated}
              className="flex items-center justify-center disabled:opacity-40 hover:opacity-70 transition-opacity"
              aria-label="Publish"
            >
              <Icon name="send" size={24} />
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};
