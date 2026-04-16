import { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
    return children;
};

const Header: FC<{ className?: string; children?: ReactNode }> = ({
    className,
    children,
}) => {
    return (
        <header className={cn('layout__header', className)}>{children}</header>
    );
};

const Main: FC<{ className?: string; children?: ReactNode }> = ({
    className,
    children,
}) => {
    return <main className={cn('layout__main', className)}>{children}</main>;
};

const Footer: FC<{ className?: string; children?: ReactNode }> = ({
    className,
    children,
}) => {
    return (
        <footer className={cn('layout__footer', className)}>{children}</footer>
    );
};

export { Layout as View, Main, Header, Footer };
