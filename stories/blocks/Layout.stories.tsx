import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import * as Layout from '@/components/blocks/Layout';

const meta = {
    title: 'Blocks/Layout',
    component: Layout.View,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Layout.View>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <Layout.Header className="bg-gray-400 text-black h-125">
                    Header
                </Layout.Header>
                <Layout.Main className="bg-red-500 h-125">Main</Layout.Main>
                <Layout.Footer className="bg-white text-black h-75">
                    Footer
                </Layout.Footer>
            </>
        ),
    },
};
