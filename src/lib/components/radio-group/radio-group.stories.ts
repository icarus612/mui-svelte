import type { Meta, StoryObj } from '@storybook/svelte';
import RadioGroup from './radio-group.svelte';
import type { RadioGroupProps } from './radio-group.types';

const meta = {
	title: 'Components/RadioGroup',
	component: RadioGroup
} satisfies Meta<RadioGroupProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
