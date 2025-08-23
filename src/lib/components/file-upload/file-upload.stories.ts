import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import FileUpload from './file-upload.svelte';
import type { FileUploadProps } from './file-upload.types';

const meta = {
	title: 'Components/FileUpload',
	component: FileUpload
=======
import { FileUpload } from './index.js';
import type { FileUploadProps } from './file-upload.types.js';

const meta = {
	title: 'Components/FileUpload',
	component: FileUpload,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<FileUploadProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
