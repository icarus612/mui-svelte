import type { Meta, StoryObj } from '@storybook/svelte';
import { Breadcrumbs } from './index.js';
import type { BreadcrumbsProps } from './breadcrumbs.types.js';
const meta = {
	title: 'Components/Breadcrumbs',
	component: Breadcrumbs,
	tags: ['autodocs']
} satisfies Meta<BreadcrumbsProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {}
};
