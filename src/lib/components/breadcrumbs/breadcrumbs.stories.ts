import type { Meta, StoryObj } from '@storybook/svelte';
import Breadcrumbs from './breadcrumbs.svelte';
import type { BreadcrumbsProps } from './breadcrumbs.types';

const meta = {
	title: 'Components/Breadcrumbs',
	component: Breadcrumbs
} satisfies Meta<BreadcrumbsProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
