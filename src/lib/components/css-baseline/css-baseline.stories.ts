import type { Meta, StoryObj } from '@storybook/svelte';
import CssBaseline from './css-baseline.svelte';
import type { CssBaselineProps } from './css-baseline.types';

const meta = {
	title: 'Components/CssBaseline',
	component: CssBaseline
} satisfies Meta<CssBaselineProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
