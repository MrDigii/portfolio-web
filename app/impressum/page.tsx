import * as Layout from '@/components/blocks/Layout';
import Navigation from '@/components/blocks/Navigation';
import Heading from '@/components/typography/Heading';
import Link from 'next/link';

export default function Impressum() {
    return (
        <Layout.View>
            <Layout.Header className="bg-gray-400 text-black h-120">
                <Navigation
                    title="© Lukas Wochner"
                    items={[
                        { label: 'About', href: '/#about' },
                        { label: 'Projekte', href: '/#projects' },
                        { label: 'Kontakt', href: '/#contact' },
                    ]}
                />
                <div className="text-center mt-28">
                    <Heading
                        size="heading-1"
                        tag="h1"
                        className="mx-auto text-background"
                    >
                        Impressum
                    </Heading>
                </div>
            </Layout.Header>
            <Layout.Main className="relative bg-white h-400">
                <div className="absolute -top-32 left-0 h-32 w-full bg-wave" />

                <div
                    id="contact"
                    className="absolute -bottom-32 left-0 h-32 w-full bg-wave-reverse"
                />
            </Layout.Main>
            <Layout.Footer className="flex flex-col h-123">
                <div className="flex items-center justify-between mt-auto font-sans font-normal text-base text-background">
                    <span>© Lukas Wochner</span>
                    <ul aria-label="Footer navigation" className="flex gap-4">
                        <li>
                            <Link href="/impressum">Impressum</Link>
                        </li>
                        <li>
                            <Link href="/datenschutz">Datenschutz</Link>
                        </li>
                    </ul>
                </div>
            </Layout.Footer>
        </Layout.View>
    );
}
