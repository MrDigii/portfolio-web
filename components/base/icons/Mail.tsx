import { FC } from 'react';

const Mail: FC<{
    strokeWidth?: string;
    width?: number;
    height?: number;
    className?: string;
}> = ({ strokeWidth = '2', width = 24, height = 24, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden={true}
        className={className}
    >
        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
        <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
);

export default Mail;
