import Wrapper from '@/components/base/Wrapper';
import BottomNavigation from '@/components/blocks/BottomNavigation';
import * as Layout from '@/components/blocks/Layout';
import Navigation from '@/components/blocks/Navigation';
import Heading from '@/components/typography/Heading';
import * as Icons from '@/components/base/icons';
import Contact from '@/components/sections/Contact';
import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Datenschutz | Lukas Wochner',
    description:
        'Erfahrener und vielseitiger Webentwickler mit Fokus auf React.js, Next.js und der Full-Stack-Entwicklung komplexer SaaS-Anwendungen.',
};

export default function Datenschutz() {
    return (
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
                        Datenschutzerklärung
                    </Heading>
                </div>
            </Layout.Header>
            <Layout.Main className="relative bg-white">
                <div className="absolute -top-32 left-0 h-32 w-full bg-wave" />
                <Wrapper className="font-sans text-xl">
                    <div className="max-w-200">
                        <h3>Name und Kontaktdaten des Verantwortlichen</h3>
                        <p>
                            <span>
                                Verantwortlich für die Datenverarbeitung auf
                                dieser Website ist:
                            </span>
                            <br />
                            <br />
                            Lukas Wochner
                            <br />
                            Bahnhofstraße 38
                            <br />
                            78532 Tuttlingen
                            <br />
                            <a href="mailto:job@wochner.me">job@wochner.me</a>
                            <br />
                        </p>
                        <h3>Ihre Rechte als betroffene Person</h3>
                        <p>
                            Sie haben jederzeit folgende Rechte in Bezug auf
                            Ihre von uns verarbeiteten personenbezogenen Daten:
                        </p>
                        <ul>
                            <li>
                                Auskunft (Art. 15 DSGVO): Sie können Auskunft
                                über die von uns verarbeiteten Daten verlangen.
                            </li>
                            <li>
                                Berichtigung (Art. 16 DSGVO): Sie können die
                                Berichtigung unrichtiger Daten verlangen.
                            </li>
                            <li>
                                Löschung (Art. 17 DSGVO): Sie können die
                                Löschung Ihrer Daten verlangen, sofern keine
                                gesetzlichen Aufbewahrungspflichten
                                entgegenstehen.
                            </li>
                            <li>
                                Einschränkung der Verarbeitung (Art. 18 DSGVO):
                                Sie können die Einschränkung der Verarbeitung
                                Ihrer Daten verlangen.
                            </li>
                            <li>
                                Widerspruch (Art. 21 DSGVO): Sie haben das
                                Recht, aus Gründen, die sich aus Ihrer
                                besonderen Situation ergeben, jederzeit gegen
                                die Verarbeitung Sie betreffender
                                personenbezogener Daten, die aufgrund von Art. 6
                                Abs. 1 lit. f DSGVO erfolgt, Widerspruch
                                einzulegen.
                            </li>
                            <li>
                                Datenübertragbarkeit (Art. 20 DSGVO): Sie haben
                                das Recht, Daten, die wir automatisiert
                                verarbeiten, an sich oder an einen Dritten in
                                einem gängigen, maschinenlesbaren Format
                                aushändigen zu lassen.
                            </li>
                            <li>
                                Beschwerderecht (Art. 77 DSGVO): Sie haben das
                                Recht, sich bei einer Aufsichtsbehörde zu
                                beschweren, wenn Sie der Ansicht sind, dass die
                                Verarbeitung Ihrer personenbezogenen Daten nicht
                                rechtmäßig erfolgt. Die für uns zuständige
                                Aufsichtsbehörde ist der
                                Landesdatenschutzbeauftragte des Bundeslandes,
                                in dem unser Unternehmen seinen Sitz hat.
                            </li>
                        </ul>
                        <h3>
                            Daten
                            <wbr />
                            verarbeitungs
                            <wbr />
                            aktivitäten
                        </h3>
                        <p>
                            <br />
                            <strong>
                                1) Bereitstellung der Website und Hosting{' '}
                            </strong>
                        </p>

                        <p>
                            Wir nutzen externe Dienstleister für das Hosting und
                            die Auslieferung unserer Website. Beim Aufruf
                            unserer Website werden systembedingt Daten
                            (sogenannte Server-Log-Dateien) an die Server
                            übermittelt und dort temporär gespeichert. Hierzu
                            zählen:
                        </p>
                        <ul>
                            <li>IP-Adresse des zugreifenden Geräts</li>
                            <li>Datum und Uhrzeit des Zugriffs</li>
                            <li>Browsertyp und Betriebssystem</li>
                            <li>Referrer URL</li>
                        </ul>
                        <p>
                            Zweck: Die Verarbeitung dient der Gewährleistung
                            eines störungsfreien Aufbaus der Website, der
                            Funktionalität und der Sicherheit des Angebots.
                        </p>
                        <p>Dienstleister:</p>
                        <ul>
                            <li>
                                Contabo GmbH (Hosting): Welfenstraße 22, 81541
                                München, Germany
                            </li>
                        </ul>
                        <h3>Keine Verwendung von Cookies (TDDDG-Hinweis)</h3>
                        <p>
                            Wir nutzen keinerlei Cookies oder vergleichbare
                            Technologien, die Informationen auf der
                            Endeinrichtung der Nutzer speichern oder auslesen (§
                            25 TDDDG).
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
                                        <Icons.Github width={30} height={30} />
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
    );
}
