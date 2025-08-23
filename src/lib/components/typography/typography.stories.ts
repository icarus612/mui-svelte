import type { Meta, StoryObj } from '@storybook/svelte';
import Typography from './typography.svelte';
import type { TypographyProps } from './typography.types';

const meta = {
	title: 'Components/Typography',
	component: Typography
} satisfies Meta<TypographyProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
