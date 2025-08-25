import type { Meta, StoryObj } from '@storybook/svelte';
import { FileUpload } from './index.js';
import type { FileUploadProps } from './file-upload.types.js';

const meta = {
	title: 'Components/FileUpload',
	component: FileUpload,
	tags: ['autodocs']
} satisfies Meta<FileUploadProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
