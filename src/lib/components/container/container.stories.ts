import type { Meta, StoryObj } from '@storybook/svelte';
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
};
