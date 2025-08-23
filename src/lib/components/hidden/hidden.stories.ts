import type { Meta, StoryObj } from '@storybook/svelte';
import Hidden from './hidden.svelte';
import type { HiddenProps } from './hidden.types';

const meta = {
	title: 'Components/Hidden',
	component: Hidden
} satisfies Meta<HiddenProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
