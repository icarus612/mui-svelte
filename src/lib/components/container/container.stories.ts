import type { Meta, StoryObj } from '@storybook/svelte';
import { Container } from './index.js';
import type { ContainerProps } from './container.types.js';
const meta = {
	title: 'Components/Container',
	component: Container,
	tags: ['autodocs']
} satisfies Meta<ContainerProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		maxWidth: 'md'
	}
};
