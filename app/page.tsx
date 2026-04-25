import Intro from '@/components/sections/Intro';
import * as Layout from '@/components/blocks/Layout';
import Navigation from '@/components/blocks/Navigation';
import TwoUp from '@/components/sections/TwoUp';
import Skills from '@/components/sections/Skills';
import Gallery from '@/components/sections/Gallery';
import Link from 'next/link';

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
            <Layout.Main className="relative bg-white">
                <div className="absolute -top-32 left-0 h-32 w-full bg-wave" />
                <TwoUp
                    id="about"
                    text="Helping brands to stand out in the digital era. Togethcer we will set the new status quo. No nonsense, always on the currting edge."
                    aside="The combination of my passion for design, code & interaction positions me in a unique place in the web design world."
                    className="pt-0 md:pt-10"
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
                    tools={[
                        {
                            logo: {
                                src: '/images/tools/MobX.svg',
                                alt: 'MobX Logo',
                                width: 60,
                                height: 60,
                            },
                            name: 'MobX',
                        },
                        {
                            logo: {
                                src: '/images/tools/HTML.svg',
                                alt: 'HTML5 Logo',
                                width: 60,
                                height: 60,
                            },
                            name: 'HTML5',
                        },
                        {
                            logo: {
                                src: '/images/tools/Grunt.svg',
                                alt: 'Grunt Logo',
                                width: 45,
                                height: 60,
                            },
                            name: 'Grunt',
                        },
                        {
                            logo: {
                                src: '/images/tools/Nodejs.svg',
                                alt: 'Node.js Logo',
                                width: 60,
                                height: 60,
                            },
                            name: 'Node.js',
                        },
                        {
                            logo: {
                                src: '/images/tools/Expressjs.svg',
                                alt: 'Express.js Logo',
                                width: 60,
                                height: 60,
                            },
                            name: 'Express.js',
                        },
                        {
                            logo: {
                                src: '/images/tools/GraphQL.svg',
                                alt: 'GraphQL Logo',
                                width: 60,
                                height: 60,
                            },
                            name: 'GraphQL',
                        },
                        {
                            logo: {
                                src: '/images/tools/PHP.svg',
                                alt: 'PHP Logo',
                                width: 60,
                                height: 60,
                            },
                            name: 'PHP',
                        },
                        {
                            logo: {
                                src: '/images/tools/ModX.svg',
                                alt: 'ModX Logo',
                                width: 60,
                                height: 60,
                            },
                            name: 'ModX',
                        },
                        {
                            logo: {
                                src: '/images/tools/Wordpress.svg',
                                alt: 'Wordpress Logo',
                                width: 60,
                                height: 60,
                            },
                            name: 'Wordpress',
                        },
                        {
                            logo: {
                                src: '/images/tools/PayloadCMS.svg',
                                alt: 'Payload CMS Logo',
                                width: 60,
                                height: 60,
                            },
                            name: 'Payload CMS',
                        },
                        {
                            logo: {
                                src: '/images/tools/PostgreSQL.svg',
                                alt: 'PostgreSQL Logo',
                                width: 60,
                                height: 60,
                            },
                            name: 'PostgreSQL',
                        },
                        {
                            logo: {
                                src: '/images/tools/Github.svg',
                                alt: 'Github Logo',
                                width: 60,
                                height: 60,
                            },
                            name: 'Github',
                        },
                        {
                            logo: {
                                src: '/images/tools/Typescript.svg',
                                alt: 'Typescript Logo',
                                width: 60,
                                height: 60,
                            },
                            name: 'Typescript',
                        },
                        {
                            logo: {
                                src: '/images/tools/Nextjs.svg',
                                alt: 'Next.js Logo',
                                width: 60,
                                height: 60,
                            },
                            name: 'Next.js',
                        },
                        {
                            logo: {
                                src: '/images/tools/Javascript.svg',
                                alt: 'Javascript Logo',
                                width: 60,
                                height: 60,
                            },
                            name: 'Javascript',
                        },
                        {
                            logo: {
                                src: '/images/tools/Tailwind.svg',
                                alt: 'Tailwind CSS Logo',
                                width: 60,
                                height: 60,
                            },
                            name: 'Tailwind CSS',
                        },
                        {
                            logo: {
                                src: '/images/tools/CSS.svg',
                                alt: 'CSS Logo',
                                width: 60,
                                height: 60,
                            },
                            name: 'CSS',
                        },
                        {
                            logo: {
                                src: '/images/tools/Sass.svg',
                                alt: 'Sass Logo',
                                width: 60,
                                height: 60,
                            },
                            name: 'Sass',
                        },
                        {
                            logo: {
                                src: '/images/tools/Reactjs.svg',
                                alt: 'React.js Logo',
                                width: 60,
                                height: 60,
                            },
                            name: 'React.js',
                        },
                        {
                            logo: {
                                src: '/images/tools/Redux.svg',
                                alt: 'Redux Logo',
                                width: 60,
                                height: 60,
                            },
                            name: 'Redux',
                        },
                    ]}
                />
                <Gallery
                    id="projects"
                    title="Mein Portfolio"
                    rows={[
                        {
                            format: 'largerLeft',
                            items: [
                                {
                                    src: '/images/projects/output-stadt_ueberlingen.png',
                                    width: 800,
                                    height: 600,
                                    alt: 'Web & Dienstleistungsportal Stadt Überlingen',
                                    description:
                                        'Web & Dienstleistungsportal <b class="external-link">Stadt Überlingen</b>',
                                    link: {
                                        href: 'https://www.ueberlingen.de/',
                                        isExternal: true,
                                    },
                                },
                                {
                                    src: '/images/projects/case_owlyAPP.png',
                                    width: 800,
                                    height: 600,
                                    alt: 'Project Management SaaS Anwendung Owly',
                                    description:
                                        'Project Management SaaS Anwendung <b class="external-link">Owly</b>',
                                    link: {
                                        href: 'https://owlyapp.com/',
                                        isExternal: true,
                                    },
                                },
                            ],
                        },
                        {
                            format: 'largerRight',
                            items: [
                                {
                                    src: '/images/projects/leibold_mockup.png',
                                    width: 800,
                                    height: 600,
                                    alt: 'TANKCloud SaaS Entwicklung Leibold',
                                    description:
                                        'TANKCloud SaaS Entwicklung <b class="external-link">Leibold</b>',
                                    link: {
                                        href: 'https://www.leibold-tankdaten.de/produkt-tanktouch-mit-tankcloud/',
                                        isExternal: true,
                                    },
                                },
                                {
                                    src: '/images/projects/output_PIZ vhotel.png',
                                    width: 800,
                                    height: 600,
                                    alt: 'Online-Plattform für verantwortungsvolles Gastgeben PIZ & Montafon Tourismus',
                                    description:
                                        'Online-Plattform für verantwortungsvolles Gastgeben <b class="external-link">PIZ & Montafon Tourismus</b>',
                                    link: {
                                        href: 'https://www.piz-vhotel.at/',
                                        isExternal: true,
                                    },
                                },
                            ],
                        },
                        {
                            format: 'landscape',
                            items: [
                                {
                                    src: '/images/projects/output_Publify_Web.jpg',
                                    width: 800,
                                    height: 600,
                                    alt: 'Publify - News-Platform für Vereine & Kommunen',
                                    description:
                                        'News-Platform für Vereine & Kommunen <b class="external-link">Publify</b>',
                                    link: {
                                        href: 'https://www.publify.io/',
                                        isExternal: true,
                                    },
                                },
                            ],
                        },
                        {
                            format: 'largerLeft',
                            items: [
                                {
                                    src: '/videos/KeepTheClockGoingReel.mp4',
                                    width: 800,
                                    height: 600,
                                    alt: 'Video content',
                                    type: 'video',
                                    description:
                                        'Interaktive Installation - Keep the Clock Going <b>Hochschule Furtwangen</b>',
                                },
                                {
                                    src: '/images/projects/output_Leitwerk Time app_2.png',
                                    width: 800,
                                    height: 600,
                                    alt: 'Timetrack-App für Leitwerk Consulting',
                                    description:
                                        'Timetrack-App <b class="external-link">Leitwerk Consulting</b>',
                                    link: {
                                        href: 'https://timer.leitwerk-consulting.com/',
                                        isExternal: true,
                                    },
                                },
                            ],
                        },
                    ]}
                    className="pb-0 md:pb-10"
                />
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
