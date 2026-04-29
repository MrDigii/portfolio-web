import type { Metadata } from 'next';
import { Fira_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
    variable: '--font-space-grotesk',
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});

const firaMono = Fira_Mono({
    variable: '--font-fira-mono',
    subsets: ['latin'],
    weight: ['400'],
});

export const metadata: Metadata = {
    title: 'Lukas Wochner',
    description:
        'Erfahrener und vielseitiger Webentwickler mit Fokus auf React.js, Next.js und der Full-Stack-Entwicklung komplexer SaaS-Anwendungen.',
    openGraph: {
        title: 'Lukas Wochner',
        description:
            'Erfahrener und vielseitiger Webentwickler mit Fokus auf React.js, Next.js und der Full-Stack-Entwicklung komplexer SaaS-Anwendungen.',
        url: 'https://wochner.me',
        siteName: 'Portfolio von Lukas Wochner',
        locale: 'de_DE',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="de"
            className={`${spaceGrotesk.variable} ${firaMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
