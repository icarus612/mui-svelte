import type { Snippet, $bindable } from '$lib/internal/types.js';
export type SidebarProps = {
	open?: $bindable<boolean>;
	variant?: 'permanent' | 'persistent' | 'temporary';
	anchor?: 'left' | 'right';
	width?: number | string;
	collapsible?: boolean;
	collapsed?: $bindable<boolean>;
	collapsedWidth?: number | string;
	breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	backgroundColor?: string;
	elevation?: number;
	cx?: object;
	onclose?: () => void;
	oncollapse?: (collapsed: boolean) => void;
	children?: Snippet;
	header?: Snippet;
	footer?: Snippet;
};
