import type { Meta, StoryObj } from '@storybook/svelte';
import Charts from './charts.svelte';
import type { ChartsProps } from './charts.types';

const meta = {
	title: 'Components/Charts',
	component: Charts
} satisfies Meta<ChartsProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
