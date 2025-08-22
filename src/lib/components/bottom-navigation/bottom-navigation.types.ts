import type { Snippet, $bindable } from '$lib/internal/types.js';
export type BottomNavigationProps = {
	showLabels?: boolean;
	value?: $bindable<any>;
	cx?: object;
	onchange?: (value: any) => void;
	children?: Snippet;
};
