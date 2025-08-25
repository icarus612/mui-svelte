import type { Meta, StoryObj } from '@storybook/svelte';
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

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		options: ['The Shawshank Redemption', 'The Godfather', 'The Dark Knight', '12 Angry Men'],
		inputValue: ''
	}
};
