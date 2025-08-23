import type { Meta, StoryObj } from '@storybook/svelte';
import Mentions from './mentions.svelte';
import type { MentionsProps } from './mentions.types';

const meta = {
	title: 'Components/Mentions',
	component: Mentions
} satisfies Meta<MentionsProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
