import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  // Base styles - apply to all buttons
  "inline-flex items-center justify-center rounded-sm font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary CTA - Orange, high contrast
        primary: "bg-[#FF6B35] text-white hover:bg-[#E65F2F] hover:shadow-[0_6px_16px_-4px_rgba(255,107,53,0.4)] hover:-translate-y-0.5 focus-visible:ring-[#FF6B35]",

        // Secondary - Blue outline, fills on hover
        secondary: "border-2 border-[#025082] text-[#025082] bg-transparent hover:bg-[#025082] hover:text-white hover:shadow-md focus-visible:ring-[#025082]",

        // Ghost - Minimal, text only
        ghost: "text-[#025082] hover:text-[#FF6B35] hover:underline underline-offset-4",

        // Dark - For use on dark backgrounds
        dark: "bg-white text-[#025082] hover:bg-gray-50 hover:shadow-lg focus-visible:ring-white",
      },
      size: {
        sm: "px-6 py-2 text-sm",
        md: "px-8 py-3 text-base",
        lg: "px-10 py-4 text-lg",
        xl: "px-12 py-5 text-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
