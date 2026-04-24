import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Gallery from '@/components/sections/Gallery';

const meta = {
    title: 'Sections/Gallery',
    component: Gallery,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Portfolio',
        rows: [
            {
                format: 'landscape',
                items: [
                    {
                        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center',
                        width: 800,
                        height: 600,
                        alt: 'Landscape image 1',
                    },
                ],
            },
            {
                format: 'largerLeft',
                items: [
                    {
                        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center',
                        width: 800,
                        height: 600,
                        alt: 'Landscape image 1',
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center',
                        width: 800,
                        height: 600,
                        alt: 'Landscape image 1',
                    },
                ],
            },
            {
                format: 'largerRight',
                items: [
                    {
                        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center',
                        width: 800,
                        height: 600,
                        alt: 'Landscape image 1',
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center',
                        width: 800,
                        height: 600,
                        alt: 'Landscape image 1',
                    },
                ],
            },
        ],
    },
};

export const WithDescription: Story = {
    args: {
        title: 'Portfolio',
        rows: [
            {
                format: 'landscape',
                items: [
                    {
                        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center',
                        width: 800,
                        height: 600,
                        alt: 'Landscape image 1',
                        description:
                            '<b>Content Produkt Shooting</b><br /> Follow Food',
                    },
                ],
            },
            {
                format: 'largerLeft',
                items: [
                    {
                        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center',
                        width: 800,
                        height: 600,
                        alt: 'Landscape image 1',
                        description:
                            '<b>Content Produkt Shooting</b><br /> Follow Food',
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center',
                        width: 800,
                        height: 600,
                        alt: 'Landscape image 1',
                        description:
                            '<b>Content Produkt Shooting</b><br /> Follow Food',
                    },
                ],
            },
            {
                format: 'largerRight',
                items: [
                    {
                        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center',
                        width: 800,
                        height: 600,
                        alt: 'Landscape image 1',
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center',
                        width: 800,
                        height: 600,
                        alt: 'Landscape image 1',
                    },
                ],
            },
        ],
    },
};

export const WithLinks: Story = {
    args: {
        title: 'Portfolio',
        rows: [
            {
                format: 'landscape',
                items: [
                    {
                        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center',
                        width: 800,
                        height: 600,
                        alt: 'Landscape image 1',
                        description:
                            '<b>Content Produkt Shooting</b><br /> Follow Food',
                        link: {
                            href: 'https://www.followfood.com',
                            isExternal: true,
                        },
                    },
                ],
            },
            {
                format: 'largerLeft',
                items: [
                    {
                        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center',
                        width: 800,
                        height: 600,
                        alt: 'Landscape image 1',
                        description:
                            '<b>Content Produkt Shooting</b><br /> Follow Food',
                        link: {
                            href: 'https://www.followfood.com',
                            isExternal: true,
                        },
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center',
                        width: 800,
                        height: 600,
                        alt: 'Landscape image 1',
                        description:
                            '<b>Content Produkt Shooting</b><br /> Follow Food',
                        link: {
                            href: 'https://www.followfood.com',
                            isExternal: true,
                        },
                    },
                ],
            },
            {
                format: 'largerRight',
                items: [
                    {
                        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center',
                        width: 800,
                        height: 600,
                        alt: 'Landscape image 1',
                        link: {
                            href: 'https://www.followfood.com',
                            isExternal: true,
                        },
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center',
                        width: 800,
                        height: 600,
                        alt: 'Landscape image 1',
                        link: {
                            href: 'https://www.followfood.com',
                            isExternal: true,
                        },
                    },
                ],
            },
        ],
    },
};

export const WithVideo: Story = {
    args: {
        title: 'Portfolio',
        rows: [
            {
                format: 'landscape',
                items: [
                    {
                        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center',
                        width: 800,
                        height: 600,
                        alt: 'Landscape image 1',
                        description:
                            '<b>Content Produkt Shooting</b><br /> Follow Food',
                    },
                ],
            },
            {
                format: 'largerLeft',
                items: [
                    {
                        src: '/videos/KeepTheClockGoingReel.mp4',
                        width: 800,
                        height: 600,
                        alt: 'Video content',
                        type: 'video',
                        description:
                            '<b>Content Produkt Shooting</b><br /> Follow Food',
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center',
                        width: 800,
                        height: 600,
                        alt: 'Landscape image 1',
                        description:
                            '<b>Content Produkt Shooting</b><br /> Follow Food',
                    },
                ],
            },
            {
                format: 'largerRight',
                items: [
                    {
                        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center',
                        width: 800,
                        height: 600,
                        alt: 'Landscape image 1',
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center',
                        width: 800,
                        height: 600,
                        alt: 'Landscape image 1',
                    },
                ],
            },
        ],
    },
};
