import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Intro from '@/components/sections/Intro';

const meta = {
    title: 'Sections/Intro',
    component: Intro,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Intro>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: '<span class="text-gradient">Hey,</span> <br /> I am Lukas',
        avatar: {
            src: '/images/lukas-portrait.jpg',
            alt: 'Lukas Avatar',
        },
    },
};

export const WithSubtitle: Story = {
    args: {
        title: '<span class="text-gradient">Hey,</span> <br /> I am Lukas',
        subtitle: 'I am a web developer',
        avatar: {
            src: '/images/lukas-portrait.jpg',
            alt: 'Lukas Avatar',
        },
    },
};

export const Inverted: Story = {
    args: {
        isInverted: true,
        title: '<span class="text-gradient">Hey,</span> <br /> I am Lukas',
        subtitle: 'I am a web developer',
        avatar: {
            src: '/images/lukas-portrait.jpg',
            alt: 'Lukas Avatar',
        },
    },
};
