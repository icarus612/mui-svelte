import type { Meta, StoryObj } from '@storybook/svelte';
import { SearchInput } from './index.js';
import type { SearchInputProps } from './search-input.types.js';

const meta = {
	title: 'Components/SearchInput',
	component: SearchInput,
	tags: ['autodocs']
} satisfies Meta<SearchInputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: 'Search...'
	}
};
