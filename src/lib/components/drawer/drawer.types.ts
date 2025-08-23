<<<<<<< HEAD
=======
import type { Snippet, $bindable } from '$lib/internal/types.js';
>>>>>>> main
export type DrawerProps = {
	anchor?: 'bottom' | 'left' | 'right' | 'top';
	elevation?: number;
	hideBackdrop?: boolean;
<<<<<<< HEAD
	open?: boolean;
	transitionDuration?: number | object;
	variant?: 'permanent' | 'persistent' | 'temporary';
	class?: string;
=======
	open?: $bindable<boolean>;
	transitionDuration?: number | object;
	variant?: 'permanent' | 'persistent' | 'temporary';
	cx?: object;
	onclose?: () => void;
	children?: Snippet;
>>>>>>> main
};
