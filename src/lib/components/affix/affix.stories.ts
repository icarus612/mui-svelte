import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Affix from './affix.svelte';
import type { AffixProps } from './affix.types';

const meta = {
	title: 'Components/Affix',
	component: Affix
} satisfies Meta<AffixProps>;

export default meta;
type Story = StoryObj<typeof meta>;

=======
import { Affix } from './index.js';
import type { AffixProps } from './affix.types.js';
const meta = {
	title: 'Components/Affix',
	component: Affix,
	tags: ['autodocs']
} satisfies Meta<AffixProps>;
export default meta;
type Story = StoryObj<typeof meta>;
>>>>>>> main
export const Default: Story = {
	args: {}
};
