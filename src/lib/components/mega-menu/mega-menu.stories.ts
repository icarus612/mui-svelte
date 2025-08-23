import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import MegaMenu from './mega-menu.svelte';
import type { MegaMenuProps } from './mega-menu.types';

const meta = {
	title: 'Components/MegaMenu',
	component: MegaMenu
} satisfies Meta<MegaMenuProps>;

export default meta;
type Story = StoryObj<typeof meta>;

=======
import { MegaMenu } from './index.js';
import type { MegaMenuProps } from './mega-menu.types.js';
const meta = {
	title: 'Components/MegaMenu',
	component: MegaMenu,
	tags: ['autodocs']
} satisfies Meta<MegaMenuProps>;
export default meta;
type Story = StoryObj<typeof meta>;
>>>>>>> main
export const Default: Story = {
	args: {}
};
