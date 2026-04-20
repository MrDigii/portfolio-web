import { cn } from '@/lib/utils';
import { FC } from 'react';

const DashedTextbox: FC<{ className?: string; text?: string }> = ({
    className,
    text,
}) => {
    return (
        <div className={cn('relative inline-flex items-center', className)}>
            <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full -z-1"
            >
                <rect
                    width="100%"
                    height="100%"
                    fill="#D9D9D9"
                    fillOpacity="0.09"
                    stroke="#505199"
                    strokeWidth={2}
                    strokeDasharray="9 9"
                />
            </svg>
            <p className="inline-block py-1.5 px-3 font-mono text-xl md:text-2xl">
                {text}
            </p>
        </div>
    );
};

export default DashedTextbox;
