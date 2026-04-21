import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { FC, ReactNode } from 'react';

const headingVariants = cva('font-sans font-bold text-foreground', {
    variants: {
        size: {
            'heading-1': 'text-5xl md:text-6xl',
            'heading-2': 'text-4xl md:text-5xl',
            'heading-3': 'text-3xl md:text-4xl',
        },
    },
    defaultVariants: {
        size: 'heading-2',
    },
});

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingSize = 'heading-1' | 'heading-2' | 'heading-3';

const Heading: FC<{
    titleTag?: HeadingTag;
    size?: HeadingSize;
    className?: string;
    children?: ReactNode;
}> = ({ titleTag = 'h2', size = 'heading-2', className, children }) => {
    const HeadingTag = titleTag || 'h2';

    return (
        <HeadingTag className={cn(headingVariants({ size }), className)}>
            {children}
        </HeadingTag>
    );
};

export default Heading;
