import type { Meta, StoryObj } from '@storybook/svelte';
import OtpInput from './otp-input.svelte';
import type { OtpInputProps } from './otp-input.types';

const meta = {
	title: 'Components/OtpInput',
	component: OtpInput
} satisfies Meta<OtpInputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
