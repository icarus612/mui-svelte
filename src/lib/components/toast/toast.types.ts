<<<<<<< HEAD
=======
import type { Snippet } from '$lib/internal/types.js';
>>>>>>> main
export type ToastProps = {
	message?: string;
	type?: 'success' | 'error' | 'warning' | 'info' | 'default';
	duration?: number;
	position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
	dismissible?: boolean;
	pauseOnHover?: boolean;
	draggable?: boolean;
	draggablePercent?: number;
	progressBar?: boolean;
	progressBarColor?: string;
	id?: string;
	transition?: 'slide' | 'zoom' | 'fade' | 'flip';
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onclose?: () => void;
	action?: Snippet;
	icon?: Snippet;
>>>>>>> main
};
