'use client';

import { isValidArray } from '@/lib/arrays';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC, SyntheticEvent, useEffect, useId, useRef, useState } from 'react';
import * as Icons from '../base/icons';

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
    const flyoutId = useId();
    const [isOpen, setIsOpen] = useState(false);
    const flyoutRef = useRef<HTMLUListElement>(null);

    const handleNavItemClick = (ev: SyntheticEvent<HTMLAnchorElement>) => {
        const target = ev.currentTarget;
        const href = target.getAttribute('href');

        // if has hash and link is on same site, scroll to section
        const isOnSameSite =
            target.origin === window.location.origin &&
            target.pathname === window.location.pathname;

        if (href && href.startsWith('#') && isOnSameSite) {
            ev.preventDefault();

            const section = document.querySelector(href);
            section?.scrollIntoView({ behavior: 'smooth' });

            // add hash to url
            history.pushState(null, '', href);
        }

        setIsOpen(false);
    };

    useEffect(() => {
        if (!flyoutRef.current) return;

        const handleClick = (ev: MouseEvent) => {
            if (
                isOpen &&
                flyoutRef.current &&
                !flyoutRef.current.contains(ev.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    });

    return (
        <nav className={cn('flex space-between relative', className)}>
            {title && (
                <span className="font-sans font-normal text-base pt-1 md:p-0">
                    {title}
                </span>
            )}
            {isValidArray(items, false) && (
                <ul
                    id={flyoutId}
                    ref={flyoutRef}
                    aria-label="Hauptnavigation"
                    className={cn(
                        'absolute top-12.5 right-0 flex flex-col gap-4 items-center ml-auto bg-secondary/30 px-0 py-3 transition-opacity',
                        'rounded-lg backdrop-blur-sm z-10 w-50 border border-secondary/50',
                        'md:relative md:flex-row md:bg-transparent md:p-1 md:w-auto md:top-auto md:border-none',
                        !isOpen &&
                            'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto'
                    )}
                >
                    {items?.map((item, i) => (
                        <li key={i} className="w-full text-start">
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
                                    'block font-normal text-lg md:text-base uppercase px-6 py-1 w-full border-b-2 border-b-transparent outline-none transition-colors',
                                    'md:px-0 md:hover:border-b-secondary md:focus-visible:border-b-secondary'
                                )}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <button
                aria-label="Toggle Hauptnavigation"
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-controls={flyoutId}
                onClick={() => setIsOpen((prev) => !prev)}
                className="ml-auto cursor-pointer md:hidden"
            >
                <Icons.Menu width={40} height={40} />
            </button>
        </nav>
    );
};

export default Navigation;
