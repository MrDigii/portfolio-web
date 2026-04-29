import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { FC, ReactNode } from 'react';

const headingVariants = cva('text-foreground', {
    variants: {
        size: {
            'heading-1': 'headline-l',
            'heading-2': 'headline-m',
            'heading-3': 'headline-s',
        },
    },
    defaultVariants: {
        size: 'heading-2',
    },
});

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingSize = 'heading-1' | 'heading-2' | 'heading-3';

const Heading: FC<{
    tag?: HeadingTag;
    size?: HeadingSize;
    className?: string;
    children?: ReactNode;
}> = ({ tag = 'h2', size = 'heading-2', className, children }) => {
    const HeadingTag = tag || 'h2';

    return (
        <HeadingTag className={cn(headingVariants({ size }), className)}>
            {children}
        </HeadingTag>
    );
};

export default Heading;
