import BottomNavigation from '@/components/blocks/BottomNavigation';
import * as Layout from '@/components/blocks/Layout';
import Navigation from '@/components/blocks/Navigation';
import Button from '@/components/Button';
import Contact from '@/components/sections/Contact';
import Gallery from '@/components/sections/Gallery';
import Intro from '@/components/sections/Intro';
import Skills from '@/components/sections/Skills';
import TwoUp from '@/components/sections/TwoUp';
import * as Icons from '@/components/base/icons';
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
    title: 'Home | Lukas Wochner',
    description:
        'Erfahrener und vielseitiger Webentwickler mit Fokus auf React.js, Next.js und der Full-Stack-Entwicklung komplexer SaaS-Anwendungen.',
};

export default function Home() {
    return (
        <>
            <Head>
                <link
                    rel="preload"
                    as="image"
                    href="/images/wave.svg"
                    fetchPriority="high"
                />
                <link
                    rel="preload"
                    as="image"
                    href="/images/wave-reverse.svg"
                    fetchPriority="high"
                />
            </Head>
            <Layout.View>
                <Layout.Header>
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
                        text="Ich entwickle digitale Erlebnisse, die nicht nur visuell, sondern auch technisch überzeugen. Immer am Zahn der Zeit."
                        aside="Als kreativer Medieninformatiker und erfahrener Webentwickler schlage ich die Brücke zwischen Informatik und Design. "
                        className="pt-0 md:pt-10"
                    />
                    <Skills
                        background="medium"
                        title="Darin bin ich gut..."
                        items={[
                            {
                                title: 'Webentwicklung',
                                text: 'Ob Onepager, Unternehmensseite oder mehrsprachige Stadt- / Tourismuswebsite, als erfahrener Webentwickler habe ich immer die passenden Lösungen für dich parat.',
                            },
                            {
                                title: 'SaaS Entwicklung',
                                text: 'Der Umstieg von Anwendungen in die Cloud bringt viele Chancen, aber auch technische Herausforderungen mit sich. Als langjähriger Entwickler in mehreren interaktiven und kollaborativen SaaS-Anwendungen weiß ich, worauf es ankommt.',
                            },
                            {
                                title: 'Kommunikation',
                                text: 'Gute Produkte lassen sich nur mit einem gut funktionierenden Team realisieren.  Agile Prozesse und Projektplanung sind genauso wichtig wie Selbstverantwortung und Kommunikation auf Augenhöhe.',
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
                <Layout.Footer className="flex flex-col">
                    <Contact
                        isInverted
                        text='<span class="text-gradient">Interesse?</span> <br />Kontaktiere mich'
                        aside={{
                            text: `Habe ich dein Interesse geweckt? Dann zögere nicht, mich zu kontaktieren. Ich freue mich darauf, von dir zu hören und gemeinsam spannende Projekte anzugehen!`,
                            actions: (
                                <ul
                                    aria-label="Kontaktmöglichkeiten"
                                    className="flex items-center flex-wrap"
                                >
                                    <li>
                                        <Button
                                            aria-label="E-Mail"
                                            href="mailto:job@wochner.me"
                                        >
                                            <Icons.Mail />
                                            <span>E-Mail</span>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            variant="icon"
                                            aria-label="Github Profil"
                                            href="https://github.com/MrDigii"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-2"
                                        >
                                            <Icons.Github
                                                width={30}
                                                height={30}
                                            />
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            variant="icon"
                                            aria-label="LinkedIn Profil"
                                            href="https://www.linkedin.com/in/lukas-wochner-a60874230/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-1"
                                        >
                                            <Icons.LinkedIn
                                                width={30}
                                                height={30}
                                            />
                                        </Button>
                                    </li>
                                </ul>
                            ),
                        }}
                        className="mt-auto mb-8 md:mb-28"
                    />
                    <BottomNavigation
                        title="© Lukas Wochner"
                        links={[
                            { href: '/impressum', label: 'Impressum' },
                            { href: '/datenschutz', label: 'Datenschutz' },
                        ]}
                        className="mt-auto py-6 px-4 md:px-5"
                    />
                </Layout.Footer>
            </Layout.View>
        </>
    );
}
