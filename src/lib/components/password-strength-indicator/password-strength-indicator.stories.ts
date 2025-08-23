import type { Meta, StoryObj } from '@storybook/svelte';
import PasswordStrengthIndicator from './password-strength-indicator.svelte';
import type { PasswordStrengthIndicatorProps } from './password-strength-indicator.types';

const meta = {
	title: 'Components/PasswordStrengthIndicator',
	component: PasswordStrengthIndicator
} satisfies Meta<PasswordStrengthIndicatorProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
