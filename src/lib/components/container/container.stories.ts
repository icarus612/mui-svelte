import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Container from './container.svelte';
import type { ContainerProps } from './container.types';

const meta = {
	title: 'Components/Container',
	component: Container
} satisfies Meta<ContainerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
=======
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
>>>>>>> main
};
