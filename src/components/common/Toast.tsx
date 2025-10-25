import { useEffect } from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

export const Toast = ({ message, onClose, duration = 3000 }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed top-6 right-6 z-50 toast-notification">
      <div className="bg-white rounded-[15px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)] border border-black/10 px-6 py-4 min-w-[280px] max-w-[400px]">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-[20px] h-[20px] rounded-full bg-[#5057ea]/10 flex items-center justify-center mt-0.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0ZM6 10.5C3.51472 10.5 1.5 8.48528 1.5 6C1.5 3.51472 3.51472 1.5 6 1.5C8.48528 1.5 10.5 3.51472 10.5 6C10.5 8.48528 8.48528 10.5 6 10.5Z" fill="#5057ea"/>
              <path d="M5.25 5.25H6.75V8.25H5.25V5.25ZM5.25 3.75H6.75V5.25H5.25V3.75Z" fill="#5057ea"/>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm text-black leading-relaxed">
              {message}
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-[18px] h-[18px] flex items-center justify-center text-black/40 hover:text-black/60 transition-colors"
            aria-label="Close"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1L1 9M1 1L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

