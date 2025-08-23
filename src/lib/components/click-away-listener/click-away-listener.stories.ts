import type { Meta, StoryObj } from '@storybook/svelte';
import ClickAwayListener from './click-away-listener.svelte';
import type { ClickAwayListenerProps } from './click-away-listener.types';

const meta = {
	title: 'Components/ClickAwayListener',
	component: ClickAwayListener
} satisfies Meta<ClickAwayListenerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
