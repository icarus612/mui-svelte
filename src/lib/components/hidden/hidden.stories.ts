import type { Meta, StoryObj } from '@storybook/svelte';
import { Hidden } from './index.js';
import type { HiddenProps } from './hidden.types.js';
const meta = {
	title: 'Components/Hidden',
	component: Hidden,
	tags: ['autodocs']
} satisfies Meta<HiddenProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		mdDown: true
	}
};
