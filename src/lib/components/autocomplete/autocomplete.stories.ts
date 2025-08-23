import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Autocomplete from './autocomplete.svelte';
import type { AutocompleteProps } from './autocomplete.types';

const meta = {
	title: 'Components/Autocomplete',
	component: Autocomplete
} satisfies Meta<AutocompleteProps>;
=======
import { Autocomplete } from './index.js';
import type { AutocompleteProps } from './autocomplete.types.js';

const meta = {
	title: 'Components/Autocomplete',
	component: Autocomplete,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: {
				type: 'select',
				options: ['small', 'medium']
			}
		}
	}
} satisfies Meta<AutocompleteProps<any>>;
>>>>>>> main

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		options: ['The Shawshank Redemption', 'The Godfather', 'The Dark Knight', '12 Angry Men'],
		inputValue: ''
	}
>>>>>>> main
};
