import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Switch from './switch.svelte';
import type { SwitchProps } from './switch.types';

const meta = {
	title: 'Components/Switch',
	component: Switch
=======
import { Switch } from './index.js';
import type { SwitchProps } from './switch.types.js';

const meta = {
	title: 'Components/Switch',
	component: Switch,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<SwitchProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		checked: false
	}
>>>>>>> main
};
