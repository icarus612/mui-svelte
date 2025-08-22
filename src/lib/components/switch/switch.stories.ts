import type { Meta, StoryObj } from '@storybook/svelte';
import Switch from './switch.svelte';
import type { SwitchProps } from './switch.types';

const meta = {
	title: 'Components/Switch',
	component: Switch
} satisfies Meta<SwitchProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
