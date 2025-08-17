import type { Meta, StoryObj } from '@storybook/svelte';
import Icon from './icon.svelte';

const meta = {
	title: 'Components/Icon',
	component: Icon,
	tags: ['autodocs'],
	argTypes: {
		icon: {
			control: 'text',
			description: 'The name of the icon to display.',
		}
	}
} satisfies Meta<Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		icon: 'academic-cap'
	}
};

export const Styled: Story = {
	args: {
		icon: 'academic-cap',
		class: 'w-12 h-12 text-blue-500'
	}
};

export const AnotherIcon: Story = {
	args: {
		icon: 'adjustments-horizontal'
	}
};
