import { type InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="font-semibold text-sm text-black">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            bg-[#f4f4f4] h-[46px] px-4 rounded-[11px]
            font-normal text-sm text-black placeholder:text-black/40
            border-2 border-transparent
            focus:outline-none focus:border-[#5057ea]/30
            transition-colors duration-200
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
        {error && (
          <span className="text-xs text-red-500 font-medium">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

