import Wrapper from '@/components/base/Wrapper';
import BottomNavigation from '@/components/blocks/BottomNavigation';
import * as Layout from '@/components/blocks/Layout';
import Navigation from '@/components/blocks/Navigation';
import Heading from '@/components/typography/Heading';
import * as Icons from '@/components/base/icons';
import Contact from '@/components/sections/Contact';
import Button from '@/components/Button';
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
    title: 'Impressum | Lukas Wochner',
    description:
        'Erfahrener und vielseitiger Webentwickler mit Fokus auf React.js, Next.js und der Full-Stack-Entwicklung komplexer SaaS-Anwendungen.',
};

export default function Impressum() {
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
                <Layout.Header heights={{ default: '500px' }}>
                    <Navigation
                        title="© Lukas Wochner"
                        items={[
                            { label: 'About', href: '/#about' },
                            { label: 'Projekte', href: '/#projects' },
                            { label: 'Kontakt', href: '/#contact' },
                        ]}
                    />
                    <div className="mx-auto w-full max-w-7xl py-6 text-center mt-30">
                        <Heading
                            size="heading-1"
                            tag="h1"
                            className="text-white break-all"
                        >
                            Impressum
                        </Heading>
                    </div>
                </Layout.Header>
                <Layout.Main className="relative bg-white min-h-[600px]">
                    <div className="absolute -top-32 left-0 h-32 w-full bg-wave" />
                    <Wrapper className="font-sans text-xl">
                        <div className="max-w-200">
                            <p>
                                Lukas Wochner
                                <br />
                                Bahnhofstraße 38
                                <br />
                                78532 Tuttlingen
                                <br />
                                <a href="mailto:job@wochner.me">
                                    job@wochner.me
                                </a>
                            </p>

                            <p>
                                <strong>Redaktionell verantwortlich</strong>
                                <br />
                                <span>Lukas Wochner</span>
                            </p>

                            <h3>EU-Streitschlichtung</h3>
                            <p>
                                <span>
                                    Die Europäische Kommission stellt eine
                                    Plattform zur Online-Streitbeilegung (OS)
                                    bereit:
                                </span>{' '}
                                <a
                                    href="https://ec.europa.eu/consumers/odr/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://ec.europa.eu/consumers/odr/
                                </a>
                                .<br />
                                <span>
                                    Unsere E-Mail-Adresse finden Sie oben im
                                    Impressum.
                                </span>
                            </p>

                            <h3>
                                {' '}
                                Verbraucher­streit­beilegung /
                                Universal­schlichtungs­stelle
                            </h3>
                            <p>
                                <span>
                                    Wir sind nicht bereit oder verpflichtet, an
                                    Streitbeilegungsverfahren vor einer
                                    Verbraucherschlichtungsstelle teilzunehmen.
                                </span>
                            </p>
                        </div>
                    </Wrapper>

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
