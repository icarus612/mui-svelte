<<<<<<< HEAD
export type DialogProps = {
	open?: boolean;
=======
import type { Snippet, $bindable } from '$lib/internal/types.js';
export type DialogProps = {
	open?: $bindable<boolean>;
>>>>>>> main
	'aria-describedby'?: string;
	'aria-labelledby'?: string;
	disableEscapeKeyDown?: boolean;
	fullScreen?: boolean;
	fullWidth?: boolean;
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
	scroll?: 'body' | 'paper';
	transitionDuration?: number | object;
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onclose?: (reason: string) => void;
	onbackdropclick?: (event: MouseEvent) => void;
	children?: Snippet;
>>>>>>> main
};
