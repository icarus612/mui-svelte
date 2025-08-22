import type { Meta, StoryObj } from '@storybook/svelte';
import { RadioGroup } from './index.js';
import type { RadioGroupProps } from './radio-group.types.js';

const meta = {
	title: 'Components/RadioGroup',
	component: RadioGroup,
	tags: ['autodocs']
} satisfies Meta<RadioGroupProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: 'story-radio-group'
	}
};
