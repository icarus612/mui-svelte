import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
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
=======
import { Stepper } from './index.js';
import type { StepperProps } from './stepper.types.js';
const meta = {
	title: 'Components/Stepper',
	component: Stepper,
	tags: ['autodocs']
} satisfies Meta<StepperProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		activeStep: 0
	}
>>>>>>> main
};
