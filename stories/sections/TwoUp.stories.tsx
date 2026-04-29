import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import TwoUp from '@/components/sections/TwoUp';

const meta = {
    title: 'Sections/TwoUp',
    component: TwoUp,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof TwoUp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Helping brands to stand out in the digital era. Togethcer we will set the new status quo. No nonsense, always on the currting edge.',
        aside: 'The combination of my passion for design, code & interaction positions me in a unique place in the web design world.',
    },
};

export const WithBackground: Story = {
    args: {
        text: "Helping brands to stand out in the digital era. Togethcer we will set the new status quo. No nonsense, always on the currting edge.",
        aside: "The combination of my passion for design, code & interaction positions me in a unique place in the web design world.",
        background: "medium"
    }
};
