import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';

const buttonVariants = cva(
    'inline-flex items-center gap-2 border-none font-mono rounded-lg pointer cursor-pointer transition-[filter] hover:brightness-110',
    {
        variants: {
            variant: {
                primary:
                    'bg-primary text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                icon: 'bg-transparent !p-2 hover:bg-white/30 hover:backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
            },
            size: {
                small: 'text-lg py-1 px-3',
                default: 'text-xl py-2 px-3',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'default',
        },
    }
);

const Button = forwardRef<
    HTMLAnchorElement,
    React.ComponentProps<'a'> & {
        variant?: 'primary' | 'icon';
        size?: 'small' | 'default';
    }
>(({ variant, size, children, className, ...rest }, ref) => {
    return (
        <a
            ref={ref}
            {...rest}
            className={cn(buttonVariants({ variant, size }), className)}
        >
            {children}
        </a>
    );
});

Button.displayName = 'Button';

export default Button;
