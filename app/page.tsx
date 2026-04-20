import Intro from '@/components/sections/Intro';
import * as Layout from '@/components/blocks/Layout';
import Navigation from '@/components/blocks/Navigation';

export default function Home() {
    return (
        <Layout.View>
            <Layout.Header className="bg-gray-400 text-black h-200">
                <Navigation
                    title="© Lukas Wochner"
                    items={[
                        { label: 'About', href: '#about' },
                        { label: 'Projekte', href: '#projects' },
                        { label: 'Kontakt', href: '#contact' },
                    ]}
                />
                <Intro
                    isInverted
                    title='<span class="text-gradient">Hey,</span> <br />ich bin Lukas'
                    subtitle="<WEB DEVELOPER />"
                    avatar={{
                        src: '/images/lukas-portrait.jpg',
                        alt: 'Lukas Wochner',
                    }}
                    className="mt-20 md:mt-40"
                />
            </Layout.Header>
            <Layout.Main className="relative bg-white h-400">
                <div className="absolute -top-32 left-0 h-32 w-full bg-wave" />
                <div className="absolute -bottom-32 left-0 h-32 w-full bg-wave-reverse" />
            </Layout.Main>
            <Layout.Footer className="bg-red-500 text-black h-123">
                Footer
            </Layout.Footer>
        </Layout.View>
    );
}
