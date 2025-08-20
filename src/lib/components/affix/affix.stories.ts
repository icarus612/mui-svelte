import type { Meta, StoryObj } from '@storybook/svelte';
import { Affix } from './index.js';
import type { AffixProps } from './affix.types.js';
const meta = {
	title: 'Components/Affix',
	component: Affix,
	tags: ['autodocs']
} satisfies Meta<AffixProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {}
};
