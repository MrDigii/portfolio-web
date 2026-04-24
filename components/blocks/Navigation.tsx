'use client';

import { isValidArray } from '@/lib/arrays';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC, SyntheticEvent } from 'react';

export interface NavItem {
    label: string;
    href: string;
    isExternal?: boolean;
}

const Navigation: FC<{
    title?: string;
    items?: NavItem[];
    className?: string;
}> = ({ title, items, className }) => {
    const handleNavItemClick = (ev: SyntheticEvent<HTMLAnchorElement>) => {
        const target = ev.currentTarget;
        const href = target.getAttribute('href');

        if (href && href.startsWith('#')) {
            ev.preventDefault();

            const section = document.querySelector(href);
            section?.scrollIntoView({ behavior: 'smooth' });

            // add hash to url
            history.pushState(null, '', href);
        }
    };

    return (
        <nav className={cn('flex space-between', className)}>
            {title && (
                <span className="font-sans font-normal text-base">{title}</span>
            )}
            {isValidArray(items, false) && (
                <ul
                    aria-label="main navigation"
                    className="flex gap-4 items-center ml-auto"
                >
                    {items?.map((item, i) => (
                        <li key={i}>
                            <Link
                                href={item.href}
                                target={item.isExternal ? '_blank' : undefined}
                                rel={
                                    item.isExternal
                                        ? 'noopener noreferrer'
                                        : undefined
                                }
                                onClick={handleNavItemClick}
                                className={cn(
                                    'font-normal text-base uppercase py-1 border-b-2 border-b-transparent outline-none transition-colors',
                                    'hover:border-b-secondary focus-visible:border-b-secondary'
                                )}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navigation;
