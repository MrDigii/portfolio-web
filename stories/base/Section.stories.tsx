import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Section from '@/components/base/Section';

const meta = {
    title: 'Base/Section',
    component: Section,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <div className="bg-gray-200">content</div>,
    },
};

export const Seperation: Story = {
    args: {
        addSeperation: true,
        children: <div className="bg-gray-200">content</div>,
    },
};

export const MediumBackground: Story = {
    args: {
        addSeperation: true,
        background: 'medium',
        children: <div className="bg-gray-200">content</div>,
    },
};
