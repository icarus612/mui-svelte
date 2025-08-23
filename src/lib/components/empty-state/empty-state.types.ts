<<<<<<< HEAD
=======
import type { Snippet } from '$lib/internal/types.js';

>>>>>>> main
export type EmptyStateProps = {
	title?: string;
	description?: string;
	image?: string;
	imageWidth?: number | string;
	imageHeight?: number | string;
	actionText?: string;
	iconColor?: string;
	variant?: 'default' | 'error' | 'empty' | 'search';
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onaction?: () => void;
	icon?: Snippet;
	action?: Snippet;
>>>>>>> main
};
