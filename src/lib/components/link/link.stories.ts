import type { Meta, StoryObj } from '@storybook/svelte';
import Link from './link.svelte';
import type { LinkProps } from './link.types';

const meta = {
	title: 'Components/Link',
	component: Link
} satisfies Meta<LinkProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
