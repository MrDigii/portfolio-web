import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Wrapper from '@/components/base/Wrapper';

const meta = {
    title: 'Base/Wrapper',
    component: Wrapper,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Wrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <div className="bg-gray-200">content</div>,
    },
};

export const BigSpacing: Story = {
    args: {
        spacing: 'big',
        children: <div className="bg-gray-200">content</div>,
    },
};
