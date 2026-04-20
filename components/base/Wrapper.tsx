import { cn } from '@/lib/utils';
import { FC } from 'react';

const Wrapper: FC<{
    spacing?: 'default' | 'big';
    className?: string;
    children?: React.ReactNode;
}> = ({ spacing = 'default', className, children }) => {
    return (
        <div
            className={cn(
                'mx-auto w-full max-w-7xl',
                spacing === 'default' && 'px-4 md:px-5',
                spacing === 'big' && 'px-8 md:px-10',
                className
            )}
        >
            {children}
        </div>
    );
};

export default Wrapper;
