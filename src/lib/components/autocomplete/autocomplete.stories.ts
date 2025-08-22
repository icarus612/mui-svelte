import type { Meta, StoryObj } from '@storybook/svelte';
import Autocomplete from './autocomplete.svelte';
import type { AutocompleteProps } from './autocomplete.types';

const meta = {
	title: 'Components/Autocomplete',
	component: Autocomplete
} satisfies Meta<AutocompleteProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
