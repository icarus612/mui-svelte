import type { Meta, StoryObj } from '@storybook/svelte';
import IconWrapper from './icon-wrapper.svelte';

const meta = {
	title: 'Components/Icon',
	component: IconWrapper,
	tags: ['autodocs'],
	argTypes: {
		icon: {
			control: 'text',
			description: 'The name of the icon to display.',
		},
		class: {
			control: 'text',
			description: 'CSS classes to apply to the icon.',
		}
	},
	args: {
		icon: 'academic-cap'
	} satisfies Record<string, any>
} satisfies Meta;

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
