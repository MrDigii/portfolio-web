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
                <Layout.Header className="text-white h-270">
                    Header
                </Layout.Header>
                <Layout.Main className="bg-red-500 h-400">Main</Layout.Main>
                <Layout.Footer className="text-white h-123">
                    Footer
                </Layout.Footer>
            </>
        ),
    },
};
