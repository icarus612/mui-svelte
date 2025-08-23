import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import OtpInput from './otp-input.svelte';
import type { OtpInputProps } from './otp-input.types';

const meta = {
	title: 'Components/OtpInput',
	component: OtpInput
=======
import { OtpInput } from './index.js';
import type { OtpInputProps } from './otp-input.types.js';

const meta = {
	title: 'Components/OtpInput',
	component: OtpInput,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<OtpInputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		length: 6
	}
>>>>>>> main
};
