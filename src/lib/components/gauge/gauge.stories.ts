import type { Meta, StoryObj } from '@storybook/svelte';
import Gauge from './gauge.svelte';
import type { GaugeProps } from './gauge.types';

const meta = {
	title: 'Components/Gauge',
	component: Gauge
} satisfies Meta<GaugeProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
