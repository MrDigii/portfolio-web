import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Button from '@/components/Button';
import * as Icons from '@/components/base/icons';

const meta = {
    title: 'Buttons/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Button',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        children: 'Button',
    },
};

export const Icon: Story = {
    args: {
        variant: 'icon',
        children: <Icons.Mail />,
    },
};
