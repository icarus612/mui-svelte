import type { Meta, StoryObj } from '@storybook/svelte';
import { Link } from './index.js';
import type { LinkProps } from './link.types.js';
const meta = {
	title: 'Components/Link',
	component: Link,
	tags: ['autodocs']
} satisfies Meta<LinkProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		href: '#'
	}
};
