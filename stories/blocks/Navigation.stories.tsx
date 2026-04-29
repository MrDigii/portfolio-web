import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Navigation from '@/components/blocks/Navigation';

const meta = {
    title: 'Blocks/Navigation',
    component: Navigation,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: '© Lukas Wochner',
        items: [
            { label: 'About', href: '#about' },
            { label: 'Projekte', href: '#projects' },
            { label: 'Kontakt', href: '#contact' },
        ],
    },
};
