import type { Meta, StoryObj } from '@storybook/svelte';
import NoSsr from './no-ssr.svelte';
import type { NoSsrProps } from './no-ssr.types';

const meta = {
	title: 'Components/NoSsr',
	component: NoSsr
} satisfies Meta<NoSsrProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
