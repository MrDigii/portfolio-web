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
    title: 'Lukas Wochner | Portfolio',
    description:
        'Portfolio von Lukas Wochner, einem Softwareentwickler mit Schwerpunkt auf Frontend-Entwicklung und Design.',
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
