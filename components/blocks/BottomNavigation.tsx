import { isValidArray } from '@/lib/arrays';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC } from 'react';

const BottomNavigation: FC<{
    title?: string;
    links?: Array<{ href: string; label: string; isExternal?: boolean }>;
    className?: string;
}> = ({ title, links, className }) => {
    return (
        <div
            className={cn(
                'flex items-center justify-between font-sans font-normal text-base text-background',
                className
            )}
        >
            {title && <span>{title}</span>}
            {isValidArray(links, false) && (
                <ul aria-label="Fußzeilen Navigation" className="flex gap-4">
                    {links?.map((link, i) => (
                        <li key={i}>
                            <Link
                                href={link.href}
                                target={link.isExternal ? '_blank' : undefined}
                                rel={
                                    link.isExternal
                                        ? 'noopener noreferrer'
                                        : undefined
                                }
                                className="hover:underline outline-none focus-visible:outline-1 focus-visible:outline-dashed focus-visible:outline-offset-2"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BottomNavigation;
