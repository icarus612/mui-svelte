import type { Meta, StoryObj } from '@storybook/svelte';
import Affix from './affix.svelte';
import type { AffixProps } from './affix.types';

const meta = {
	title: 'Components/Affix',
	component: Affix
} satisfies Meta<AffixProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
