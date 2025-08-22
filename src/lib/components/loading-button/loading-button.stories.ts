import type { Meta, StoryObj } from '@storybook/svelte';
import { LoadingButton } from './index.js';
import type { LoadingButtonProps } from './loading-button.types.js';
const meta = {
	title: 'Components/LoadingButton',
	component: LoadingButton,
	tags: ['autodocs']
} satisfies Meta<LoadingButtonProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		loading: true
	}
};
