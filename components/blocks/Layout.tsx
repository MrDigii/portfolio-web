'use client';

import { useMousePosition } from '@/lib/useMousePosition';
import { cn } from '@/lib/utils';
import {
    FC,
    forwardRef,
    ReactNode,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';

const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
    return children;
};

const Header = forwardRef<
    HTMLElement,
    {
        height?: string;
        mobileHeight?: string;
        className?: string;
        children?: ReactNode;
    }
>(({ height = '800px', mobileHeight = '800px', className, children }, ref) => {
    const headerRef = useRef<HTMLElement>(null);
    const { x: mouseX, y: mouseY } = useMousePosition({
        axis: 'both',
        delay: 5,
    });

    useImperativeHandle<HTMLElement | null, HTMLElement | null>(
        ref,
        () => headerRef.current
    );

    useEffect(() => {
        if (!headerRef.current || mouseX === null || mouseY === null) return;

        const xPercent =
            ((mouseX - headerRef.current.offsetLeft) * 100) /
            headerRef.current.offsetWidth;
        const yPercent =
            ((mouseY - headerRef.current.offsetTop) * 100) /
            headerRef.current.offsetHeight;

        const root = document.documentElement;

        if (xPercent <= 100) {
            root.style.setProperty('--header-gradient-x', `${xPercent}%`);
        }

        if (yPercent <= 100) {
            root.style.setProperty('--header-gradient-y', `${yPercent}%`);
        }
    }, [mouseX, mouseY]);

    const css = `
        :root {
            --header-height: ${height};
            --header-height-md: ${mobileHeight};
        }`;

    return (
        <>
            <style>{css}</style>
            <header ref={headerRef} className={cn('layout__header', className)}>
                <div className="layout__header__bg" />
                <div className="mx-auto w-full max-w-7xl py-6 px-4 text-white md:px-5">
                    {children}
                </div>
            </header>
        </>
    );
});

Header.displayName = 'Header';

const Main = forwardRef<
    HTMLElement,
    { className?: string; children?: ReactNode }
>(({ className, children }, ref) => {
    return (
        <main ref={ref} className={cn('layout__main', className)}>
            {children}
        </main>
    );
});

Main.displayName = 'Main';

const Footer = forwardRef<
    HTMLElement,
    {
        heights?: {
            sm?: string;
            md?: string;
            default?: string;
        };
        className?: string;
        children?: ReactNode;
    }
>(
    (
        {
            heights = {
                default: '700px',
                sm: '600px',
                md: '650px',
            },
            className,
            children,
        },
        ref
    ) => {
        const footerRef = useRef<HTMLElement>(null);
        const [isInView, setIsInView] = useState(false);

        const { x: mouseX, y: mouseY } = useMousePosition({
            axis: 'both',
            delay: 5,
        });

        useImperativeHandle<HTMLElement | null, HTMLElement | null>(
            ref,
            () => footerRef.current
        );

        useEffect(() => {
            if (!footerRef.current || mouseX === null || mouseY === null)
                return;

            const xPercent =
                ((mouseX - footerRef.current.offsetLeft) * 100) /
                footerRef.current.offsetWidth;
            const yPercent =
                ((mouseY - footerRef.current.offsetTop) * 100) /
                footerRef.current.offsetHeight;

            const root = document.documentElement;

            if (xPercent <= 100) {
                root.style.setProperty('--footer-gradient-x', `${xPercent}%`);
            }

            if (yPercent <= 100) {
                root.style.setProperty('--footer-gradient-y', `${yPercent}%`);
            }
        }, [mouseX, mouseY]);

        useEffect(() => {
            const updateInViewCalc = () => {
                if (!footerRef.current) return;

                const footerRect = footerRef.current.getBoundingClientRect();
                const maxScrollY =
                    document.documentElement.scrollHeight - window.innerHeight;

                setIsInView(window.scrollY >= maxScrollY - footerRect.height);
            };

            updateInViewCalc();
            document.addEventListener('scroll', updateInViewCalc);

            return () => {
                document.removeEventListener('scroll', updateInViewCalc);
            };
        });

        const css = `
        :root {
            ${heights?.default ? `--footer-height: ${heights.default};` : ''}
            ${heights?.sm ? `--footer-height-sm: ${heights.sm};` : ''}
            ${heights?.md ? `--footer-height-md: ${heights.md};` : ''}
        }`;

        return (
            <>
                <style>{css}</style>
                <footer
                    ref={footerRef}
                    className={cn(
                        'layout__footer',
                        isInView && 'z-30',
                        className
                    )}
                >
                    <div className="layout__footer__bg" />
                    <div className="mx-auto mt-auto w-full max-w-7xl text-white">
                        {children}
                    </div>
                </footer>
            </>
        );
    }
);

Footer.displayName = 'Footer';

export { Footer, Header, Main, Layout as View };
