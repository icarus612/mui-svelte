import type { Meta, StoryObj } from '@storybook/svelte';
import { OtpInput } from './index.js';
import type { OtpInputProps } from './otp-input.types.js';

const meta = {
	title: 'Components/OtpInput',
	component: OtpInput,
	tags: ['autodocs']
} satisfies Meta<OtpInputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		length: 6
	}
};
