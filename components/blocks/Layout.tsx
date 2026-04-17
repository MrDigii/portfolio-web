import { cn } from '@/lib/utils';
import { FC, forwardRef, ReactNode } from 'react';

const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
    return children;
};

const Header = forwardRef<
    HTMLElement,
    { className?: string; children?: ReactNode }
>(({ className, children }, ref) => {
    return (
        <header ref={ref} className={cn('layout__header', className)}>
            {children}
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
    return (
        <footer ref={ref} className={cn('layout__footer', className)}>
            {children}
        </footer>
    );
});

Footer.displayName = 'Footer';

export { Footer, Header, Main, Layout as View };
