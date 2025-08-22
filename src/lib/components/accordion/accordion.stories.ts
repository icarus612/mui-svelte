import type { Meta, StoryObj } from '@storybook/svelte';
import { Accordion } from './index.js';
import type { AccordionProps } from './accordion.types.js';
const meta = {
	title: 'Components/Accordion',
	component: Accordion,
	tags: ['autodocs']
} satisfies Meta<AccordionProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {}
};
