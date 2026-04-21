import Intro from '@/components/sections/Intro';
import * as Layout from '@/components/blocks/Layout';
import Navigation from '@/components/blocks/Navigation';
import TwoUp from '@/components/sections/TwoUp';
import Skills from '@/components/sections/Skills';

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
                <TwoUp
                    text="Helping brands to stand out in the digital era. Togethcer we will set the new status quo. No nonsense, always on the currting edge."
                    aside="The combination of my passion for design, code & interaction positions me in a unique place in the web design world."
                    className="pt-0 md:pt-12"
                />
                <Skills
                    background="medium"
                    title="Darin bin ich gut..."
                    items={[
                        {
                            title: 'Webentwicklung',
                            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
                        },
                        {
                            title: 'SaaS Entwicklung',
                            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
                        },
                        {
                            title: 'Kommunikation',
                            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
                        },
                    ]}
                />
                <div className="absolute -bottom-32 left-0 h-32 w-full bg-wave-reverse" />
            </Layout.Main>
            <Layout.Footer className="bg-red-500 text-black h-123">
                Footer
            </Layout.Footer>
        </Layout.View>
    );
}
