import type { Meta, StoryObj } from '@storybook/svelte';
import SplitPane from './split-pane.svelte';
import type { SplitPaneProps } from './split-pane.types';

const meta = {
	title: 'Components/SplitPane',
	component: SplitPane
} satisfies Meta<SplitPaneProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
