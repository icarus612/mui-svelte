import type { Meta, StoryObj } from '@storybook/svelte';
import { MegaMenu } from './index.js';
import type { MegaMenuProps } from './mega-menu.types.js';
const meta = {
	title: 'Components/MegaMenu',
	component: MegaMenu,
	tags: ['autodocs']
} satisfies Meta<MegaMenuProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {}
};
