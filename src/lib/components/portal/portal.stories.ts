import type { Meta, StoryObj } from '@storybook/svelte';
import Portal from './portal.svelte';
import type { PortalProps } from './portal.types';

const meta = {
	title: 'Components/Portal',
	component: Portal
} satisfies Meta<PortalProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
