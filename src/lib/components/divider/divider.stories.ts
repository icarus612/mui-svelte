import type { Meta, StoryObj } from '@storybook/svelte';
import { Divider } from './index.js';
import type { DividerProps } from './divider.types.js';
import { html } from 'svelte-htm';

const meta = {
	title: 'Components/Divider',
	component: Divider,
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: 'select',
			options: ['neutral', 'primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error']
		},
		orientation: {
			control: 'select',
			options: ['horizontal', 'vertical']
		},
		position: {
			control: 'select',
			options: ['start', 'end']
		}
	}
} satisfies Meta<DividerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => ({
		Component: Divider,
		props: args
	})
};

export const WithText: Story = {
	render: (args) => ({
		Component: Divider,
		props: {
			...args,
			children: html`<span>OR</span>`
		}
	})
};
