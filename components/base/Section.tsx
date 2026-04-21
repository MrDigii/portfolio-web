import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';

export type BgMode = 'light' | 'medium';

const Section: FC<{
    addSeperation?: boolean;
    background?: BgMode;
    children?: ReactNode;
}> = ({ addSeperation, background = 'light', children }) => {
    return (
        <section
            data-bg-ident={background}
            className={cn(
                'bg-background',
                addSeperation && 'section-spacing',
                background === 'medium' && 'bg-medium'
            )}
        >
            {children}
        </section>
    );
};

export default Section;
