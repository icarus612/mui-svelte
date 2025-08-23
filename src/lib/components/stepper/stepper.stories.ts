import type { Meta, StoryObj } from '@storybook/svelte';
import Stepper from './stepper.svelte';
import type { StepperProps } from './stepper.types';

const meta = {
	title: 'Components/Stepper',
	component: Stepper
} satisfies Meta<StepperProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
