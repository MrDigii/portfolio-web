import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';

export type BgMode = 'light' | 'medium';

const Section: FC<{
    addSeperation?: boolean;
    background?: BgMode;
    children?: ReactNode;
    className?: string;
}> = ({ addSeperation, background = 'light', children, className }) => {
    return (
        <section
            data-bg-ident={background}
            className={cn(
                'bg-background',
                addSeperation && 'section-spacing',
                background === 'medium' && 'bg-medium',
                className
            )}
        >
            {children}
        </section>
    );
};

export default Section;
