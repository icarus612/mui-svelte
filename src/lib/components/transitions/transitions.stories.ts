import type { Meta, StoryObj } from '@storybook/svelte';
import Transitions from './transitions.svelte';
import type { TransitionsProps } from './transitions.types';

const meta = {
	title: 'Components/Transitions',
	component: Transitions
} satisfies Meta<TransitionsProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
