import type { Snippet } from '$lib/internal/types.js';
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
	cx?: object;
	onclose?: () => void;
	action?: Snippet;
	icon?: Snippet;
};
