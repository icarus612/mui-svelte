import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Breadcrumbs from './breadcrumbs.svelte';
import type { BreadcrumbsProps } from './breadcrumbs.types';

const meta = {
	title: 'Components/Breadcrumbs',
	component: Breadcrumbs
} satisfies Meta<BreadcrumbsProps>;

export default meta;
type Story = StoryObj<typeof meta>;

=======
import { Breadcrumbs } from './index.js';
import type { BreadcrumbsProps } from './breadcrumbs.types.js';
const meta = {
	title: 'Components/Breadcrumbs',
	component: Breadcrumbs,
	tags: ['autodocs']
} satisfies Meta<BreadcrumbsProps>;
export default meta;
type Story = StoryObj<typeof meta>;
>>>>>>> main
export const Default: Story = {
	args: {}
};
