import type { Meta, StoryObj } from '@storybook/svelte';
import { Switch } from './index.js';
import type { SwitchProps } from './switch.types.js';

const meta = {
	title: 'Components/Switch',
	component: Switch,
	tags: ['autodocs']
} satisfies Meta<SwitchProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		checked: false
	}
};
