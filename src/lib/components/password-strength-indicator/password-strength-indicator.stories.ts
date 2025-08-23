import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import PasswordStrengthIndicator from './password-strength-indicator.svelte';
import type { PasswordStrengthIndicatorProps } from './password-strength-indicator.types';

const meta = {
	title: 'Components/PasswordStrengthIndicator',
	component: PasswordStrengthIndicator
=======
import { PasswordStrengthIndicator } from './index.js';
import type { PasswordStrengthIndicatorProps } from './password-strength-indicator.types.js';

const meta = {
	title: 'Components/PasswordStrengthIndicator',
	component: PasswordStrengthIndicator,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<PasswordStrengthIndicatorProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		password: 'password123'
	}
>>>>>>> main
};
