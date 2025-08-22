import type { Meta, StoryObj } from '@storybook/svelte';
import { SplitPane } from './index.js';
import type { SplitPaneProps } from './split-pane.types.js';
const meta = {
	title: 'Components/SplitPane',
	component: SplitPane,
	tags: ['autodocs']
} satisfies Meta<SplitPaneProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {}
};
