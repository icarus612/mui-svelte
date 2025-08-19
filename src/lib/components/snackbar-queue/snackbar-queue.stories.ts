import type { Meta, StoryObj } from '@storybook/svelte';
import SnackbarQueueDemo from './snackbar-queue-demo.svelte';

const meta = {
	title: 'Components/SnackbarQueue',
	component: SnackbarQueueDemo,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `A notification system component that displays alerts/notifications in a stacked queue format. 
				
Perfect for showing success messages, errors, warnings, and info messages to users.

## Features
- Auto-dismissing notifications with configurable duration
- Multiple variants (default, success, warning, error)
- Smooth animations for entry/exit
- Manual dismiss capability
- Queue management - multiple notifications stack automatically

## Usage
Use the \`pushAlert\` function to display notifications from anywhere in your app.`
			}
		}
	}
} satisfies Meta<SnackbarQueueDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
