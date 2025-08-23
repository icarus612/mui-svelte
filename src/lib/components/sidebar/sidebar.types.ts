<<<<<<< HEAD
export type SidebarProps = {
	open?: boolean;
=======
import type { Snippet, $bindable } from '$lib/internal/types.js';
export type SidebarProps = {
	open?: $bindable<boolean>;
>>>>>>> main
	variant?: 'permanent' | 'persistent' | 'temporary';
	anchor?: 'left' | 'right';
	width?: number | string;
	collapsible?: boolean;
<<<<<<< HEAD
	collapsed?: boolean;
=======
	collapsed?: $bindable<boolean>;
>>>>>>> main
	collapsedWidth?: number | string;
	breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	backgroundColor?: string;
	elevation?: number;
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onclose?: () => void;
	oncollapse?: (collapsed: boolean) => void;
	children?: Snippet;
	header?: Snippet;
	footer?: Snippet;
>>>>>>> main
};
