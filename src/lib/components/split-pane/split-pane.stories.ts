import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import SplitPane from './split-pane.svelte';
import type { SplitPaneProps } from './split-pane.types';

const meta = {
	title: 'Components/SplitPane',
	component: SplitPane
} satisfies Meta<SplitPaneProps>;

export default meta;
type Story = StoryObj<typeof meta>;

=======
import { SplitPane } from './index.js';
import type { SplitPaneProps } from './split-pane.types.js';
const meta = {
	title: 'Components/SplitPane',
	component: SplitPane,
	tags: ['autodocs']
} satisfies Meta<SplitPaneProps>;
export default meta;
type Story = StoryObj<typeof meta>;
>>>>>>> main
export const Default: Story = {
	args: {}
};
