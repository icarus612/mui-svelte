import type { Meta, StoryObj } from '@storybook/svelte';
import FileUpload from './file-upload.svelte';
import type { FileUploadProps } from './file-upload.types';

const meta = {
	title: 'Components/FileUpload',
	component: FileUpload
} satisfies Meta<FileUploadProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
