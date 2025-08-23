import type { Meta, StoryObj } from '@storybook/svelte';
import Modal from './modal.svelte';
import type { ModalProps } from './modal.types';

const meta = {
	title: 'Components/Modal',
	component: Modal
} satisfies Meta<ModalProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
