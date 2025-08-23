import type { Snippet } from '$lib/internal/types.js';

export type AppBarColor = 'default' | 'inherit' | 'primary' | 'secondary' | 'transparent';
export type AppBarPosition = 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
export type AppBarVariant = 'elevation' | 'outlined';

export type AppBarProps = {
	color?: AppBarColor;
	enableColorOnDark?: boolean;
	position?: AppBarPosition;
	variant?: AppBarVariant;
	class?: string;
	children?: Snippet | string;
};
