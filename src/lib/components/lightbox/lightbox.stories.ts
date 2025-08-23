import type { Meta, StoryObj } from '@storybook/svelte';
import Lightbox from './lightbox.svelte';
import type { LightboxProps } from './lightbox.types';

const meta = {
	title: 'Components/Lightbox',
	component: Lightbox
} satisfies Meta<LightboxProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
