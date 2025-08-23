import type { Snippet } from '$lib/internal/types.js';

export type BottomNavigationProps = {
	showLabels?: boolean;
	class?: string;
	children?: Snippet | string;
};
