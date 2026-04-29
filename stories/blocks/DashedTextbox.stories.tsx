import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import DashedTextbox from '@/components/blocks/DashedTextbox';

const meta = {
    title: 'Blocks/DashedTextbox',
    component: DashedTextbox,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof DashedTextbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'This is a dashed textbox',
    },
};
