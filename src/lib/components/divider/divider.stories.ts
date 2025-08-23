import type { Meta, StoryObj } from '@storybook/svelte';
import Divider from './divider.svelte';
import type { DividerProps } from './divider.types';

const meta = {
	title: 'Components/Divider',
	component: Divider
} satisfies Meta<DividerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
