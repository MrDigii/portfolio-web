import Wrapper from '@/components/base/Wrapper';
import BottomNavigation from '@/components/blocks/BottomNavigation';
import * as Layout from '@/components/blocks/Layout';
import Navigation from '@/components/blocks/Navigation';
import Heading from '@/components/typography/Heading';

export default function Impressum() {
    return (
        <Layout.View>
            <Layout.Header height="500px">
                <Navigation
                    title="© Lukas Wochner"
                    items={[
                        { label: 'About', href: '/#about' },
                        { label: 'Projekte', href: '/#projects' },
                        { label: 'Kontakt', href: '/#contact' },
                    ]}
                />
                <div className="mx-auto w-full max-w-7xl py-6 text-center mt-30">
                    <Heading size="heading-1" tag="h1" className="text-white">
                        Impressum
                    </Heading>
                </div>
            </Layout.Header>
            <Layout.Main className="relative bg-white">
                <div className="absolute -top-32 left-0 h-32 w-full bg-wave" />
                <Wrapper spacing="big" className="font-sans text-lg">
                    <section>
                        <h2>Angaben gemäß § 5 DDG</h2>
                        <p>
                            [Vorname Nachname]
                            <br />
                            [Straße Hausnummer]
                            <br />
                            [PLZ Ort]
                        </p>
                    </section>

                    <section>
                        <h2>Kontakt</h2>
                        <p>
                            Telefon: [Deine Telefonnummer]
                            <br />
                            E-Mail:{' '}
                            <a href="mailto:[Deine E-Mail]">
                                [Deine E-Mail-Adresse]
                            </a>
                        </p>
                    </section>

                    <section>
                        <h2>Umsatzsteuer-ID</h2>
                        <p>
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                            Umsatzsteuergesetz:
                            <br />
                            [Deine USt-IdNr., falls vorhanden]
                        </p>
                    </section>

                    <section>
                        <h2>Redaktionell verantwortlich</h2>
                        <p>
                            [Vorname Nachname]
                            <br />
                            [Straße Hausnummer]
                            <br />
                            [PLZ Ort]
                        </p>
                    </section>

                    <section>
                        <h2>EU-Streitschlichtung</h2>
                        <p>
                            Die Europäische Kommission stellt eine Plattform zur
                            Online-Streitbeilegung (OS) bereit:
                            <a
                                href="https://ec.europa.eu/consumers/odr/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://ec.europa.eu/consumers/odr/
                            </a>
                            .<br />
                            Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        </p>
                    </section>

                    <section>
                        <h2>
                            Verbraucher­streit­beilegung/Universal­schlichtungs­stelle
                        </h2>
                        <p>
                            Wir sind nicht bereit oder verpflichtet, an
                            Streitbeilegungsverfahren vor einer
                            Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>
                </Wrapper>

                <div
                    id="contact"
                    className="absolute -bottom-32 left-0 h-32 w-full bg-wave-reverse"
                />
            </Layout.Main>
            <Layout.Footer className="flex flex-col">
                <BottomNavigation
                    title="© Lukas Wochner"
                    links={[
                        { href: '/impressum', label: 'Impressum' },
                        { href: '/datenschutz', label: 'Datenschutz' },
                    ]}
                    className="mt-auto"
                />
            </Layout.Footer>
        </Layout.View>
    );
}
