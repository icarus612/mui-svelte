import type { Meta, StoryObj } from '@storybook/svelte';
import SearchInput from './search-input.svelte';
import type { SearchInputProps } from './search-input.types';

const meta = {
	title: 'Components/SearchInput',
	component: SearchInput
} satisfies Meta<SearchInputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
