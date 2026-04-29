import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';

export type BgMode = 'light' | 'medium';

const Section: FC<{
    id?: string;
    addSeperation?: boolean;
    background?: BgMode;
    children?: ReactNode;
    className?: string;
}> = ({ id, addSeperation, background = 'light', children, className }) => {
    return (
        <section
            id={id}
            data-bg-ident={background}
            className={cn(
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
