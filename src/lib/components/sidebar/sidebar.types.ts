export type SidebarProps = {
	open?: boolean;
	variant?: 'permanent' | 'persistent' | 'temporary';
	anchor?: 'left' | 'right';
	width?: number | string;
	collapsible?: boolean;
	collapsed?: boolean;
	collapsedWidth?: number | string;
	breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	backgroundColor?: string;
	elevation?: number;
	class?: string;
};
