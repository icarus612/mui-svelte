import type { Meta, StoryObj } from '@storybook/svelte';
import Fab from './fab.svelte';
import type { FabProps } from './fab.types';

const meta = {
	title: 'Components/FAB',
	component: Fab
} satisfies Meta<FabProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
