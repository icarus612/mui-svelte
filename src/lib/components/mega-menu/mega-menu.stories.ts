import type { Meta, StoryObj } from '@storybook/svelte';
import MegaMenu from './mega-menu.svelte';
import type { MegaMenuProps } from './mega-menu.types';

const meta = {
	title: 'Components/MegaMenu',
	component: MegaMenu
} satisfies Meta<MegaMenuProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
