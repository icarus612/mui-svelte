import type { Meta, StoryObj } from '@storybook/svelte';
import { PasswordStrengthIndicator } from './index.js';
import type { PasswordStrengthIndicatorProps } from './password-strength-indicator.types.js';

const meta = {
	title: 'Components/PasswordStrengthIndicator',
	component: PasswordStrengthIndicator,
	tags: ['autodocs']
} satisfies Meta<PasswordStrengthIndicatorProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		password: 'password123'
	}
};
