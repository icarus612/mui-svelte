import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import RadioGroup from './radio-group.svelte';
import type { RadioGroupProps } from './radio-group.types';

const meta = {
	title: 'Components/RadioGroup',
	component: RadioGroup
=======
import { RadioGroup } from './index.js';
import type { RadioGroupProps } from './radio-group.types.js';

const meta = {
	title: 'Components/RadioGroup',
	component: RadioGroup,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<RadioGroupProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		name: 'story-radio-group'
	}
>>>>>>> main
};
