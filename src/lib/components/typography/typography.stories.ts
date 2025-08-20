import type { Meta, StoryObj } from '@storybook/svelte';
import { Typography } from './index.js';
import type { TypographyProps } from './typography.types.js';

const meta = {
	title: 'Components/Typography',
	component: Typography,
	tags: ['autodocs']
} satisfies Meta<TypographyProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: 'h1'
	}
};
