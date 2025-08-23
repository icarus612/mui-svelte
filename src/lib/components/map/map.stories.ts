import type { Meta, StoryObj } from '@storybook/svelte';
import Map from './map.svelte';
import type { MapProps } from './map.types';

const meta = {
	title: 'Components/Map',
	component: Map
} satisfies Meta<MapProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
