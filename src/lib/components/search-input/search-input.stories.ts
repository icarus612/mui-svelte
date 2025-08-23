import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import SearchInput from './search-input.svelte';
import type { SearchInputProps } from './search-input.types';

const meta = {
	title: 'Components/SearchInput',
	component: SearchInput
=======
import { SearchInput } from './index.js';
import type { SearchInputProps } from './search-input.types.js';

const meta = {
	title: 'Components/SearchInput',
	component: SearchInput,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<SearchInputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		placeholder: 'Search...'
	}
>>>>>>> main
};
