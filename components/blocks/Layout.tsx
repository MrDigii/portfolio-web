'use client';

import { useMousePosition } from '@/lib/useMousePosition';
import { useResize } from '@/lib/useResize';
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
    { className?: string; children?: ReactNode }
>(({ className, children }, ref) => {
    const headerRef = useRef<HTMLElement>(null);
    const { height } = useResize({
        ref: headerRef,
        axis: 'height',
        delay: 100,
    });
    const { x: mouseX, y: mouseY } = useMousePosition({
        axis: 'both',
        delay: 5,
    });

    useImperativeHandle<HTMLElement | null, HTMLElement | null>(
        ref,
        () => headerRef.current
    );

    useEffect(() => {
        if (!height) return;

        const root = document.documentElement;
        root.style.setProperty('--header-height', `${height}px`);
    }, [height]);

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

    return (
        <header ref={headerRef} className={cn('layout__header', className)}>
            <div className="layout__header__bg" />
            <div className="mx-auto w-full max-w-7xl py-6 px-4 text-white md:px-5">
                {children}
            </div>
        </header>
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
    { className?: string; children?: ReactNode }
>(({ className, children }, ref) => {
    const footerRef = useRef<HTMLElement>(null);
    const [isInView, setIsInView] = useState(false);
    const { height } = useResize({
        ref: footerRef,
        axis: 'height',
        delay: 100,
    });

    const { x: mouseX, y: mouseY } = useMousePosition({
        axis: 'both',
        delay: 5,
    });

    useImperativeHandle<HTMLElement | null, HTMLElement | null>(
        ref,
        () => footerRef.current
    );

    useEffect(() => {
        if (!height) return;

        const root = document.documentElement;
        root.style.setProperty('--footer-height', `${height}px`);
    }, [height]);

    useEffect(() => {
        if (!footerRef.current || mouseX === null || mouseY === null) return;

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

    return (
        <footer
            ref={footerRef}
            className={cn('layout__footer', isInView && 'z-30', className)}
        >
            <div className="layout__footer__bg" />
            <div className="mx-auto w-full max-w-7xl py-6 px-4 text-white md:px-5">
                {children}
            </div>
        </footer>
    );
});

Footer.displayName = 'Footer';

export { Footer, Header, Main, Layout as View };
