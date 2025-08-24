import type { Meta, StoryObj } from '@storybook/svelte';
import { Chip } from './index.js';
import type { ChipProps } from './chip.types.js';
import { html } from 'svelte-htm';
import { AcademicCap } from '$lib/icons';

const meta = {
	title: 'Components/Chip',
	component: Chip,
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: 'select',
			options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning']
		},
		variant: {
			control: 'select',
			options: ['filled', 'outlined']
		},
		size: {
			control: 'select',
			options: ['small', 'medium']
		}
	}
} satisfies Meta<ChipProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Chip'
	}
};

export const Clickable: Story = {
	args: {
		label: 'Clickable Chip',
		clickable: true,
		onclick: () => alert('clicked')
	}
};

export const Deletable: Story = {
	args: {
		label: 'Deletable Chip',
		ondelete: () => alert('deleted')
	}
};

export const WithIcon: Story = {
	args: {
		label: 'Chip with icon',
		icon: html`<${AcademicCap} class="w-4 h-4" />`
	}
};
