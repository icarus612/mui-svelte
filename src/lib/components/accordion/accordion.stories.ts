import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Accordion from './accordion.svelte';
import type { AccordionProps } from './accordion.types';

const meta = {
	title: 'Components/Accordion',
	component: Accordion
} satisfies Meta<AccordionProps>;

export default meta;
type Story = StoryObj<typeof meta>;

=======
import { Accordion } from './index.js';
import type { AccordionProps } from './accordion.types.js';
const meta = {
	title: 'Components/Accordion',
	component: Accordion,
	tags: ['autodocs']
} satisfies Meta<AccordionProps>;
export default meta;
type Story = StoryObj<typeof meta>;
>>>>>>> main
export const Default: Story = {
	args: {}
};
