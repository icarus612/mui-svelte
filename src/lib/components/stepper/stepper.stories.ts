import type { Meta, StoryObj } from '@storybook/svelte';
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
};
