import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Typography from './typography.svelte';
import type { TypographyProps } from './typography.types';

const meta = {
	title: 'Components/Typography',
	component: Typography
=======
import { Typography } from './index.js';
import type { TypographyProps } from './typography.types.js';

const meta = {
	title: 'Components/Typography',
	component: Typography,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<TypographyProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		variant: 'h1'
	}
>>>>>>> main
};
