import * as Layout from '@/components/blocks/Layout';

export default function Home() {
    return (
        <Layout.View>
            <Layout.Header className="bg-gray-400 text-black h-125">
                Header
            </Layout.Header>
            <Layout.Main className="bg-red-500 h-125">Main</Layout.Main>
            <Layout.Footer className="bg-white text-black h-75">
                Footer
            </Layout.Footer>
        </Layout.View>
    );
}
