import type { Meta, StoryObj } from '@storybook/svelte';
import Accordion from './accordion.svelte';
import type { AccordionProps } from './accordion.types';

const meta = {
	title: 'Components/Accordion',
	component: Accordion
} satisfies Meta<AccordionProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
