import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'hover' | 'feature';
  padding?: 'sm' | 'md' | 'lg';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'md', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          "rounded-lg bg-white",
          // Variant styles
          variant === 'default' && "border border-gray-200 shadow-sm",
          variant === 'hover' && "border border-gray-200 shadow-sm hover:shadow-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer",
          variant === 'feature' && "bg-gray-50 border-none",
          // Padding styles
          padding === 'sm' && "p-6",
          padding === 'md' && "p-8",
          padding === 'lg' && "p-12",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
