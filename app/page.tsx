import * as Layout from '@/components/blocks/Layout';
import Navigation from '@/components/blocks/Navigation';

export default function Home() {
    return (
        <Layout.View>
            <Layout.Header className="bg-gray-400 text-black h-270">
                <Navigation
                    title="© Lukas Wochner"
                    items={[
                        { label: 'About', href: '#about' },
                        { label: 'Projekte', href: '#projects' },
                        { label: 'Kontakt', href: '#contact' },
                    ]}
                />
            </Layout.Header>
            <Layout.Main className="bg-white h-400">Main</Layout.Main>
            <Layout.Footer className="bg-red-500 text-black h-75">
                Footer
            </Layout.Footer>
        </Layout.View>
    );
}
