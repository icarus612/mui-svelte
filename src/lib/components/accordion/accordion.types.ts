import type { Snippet, $bindable } from '$lib/internal/types.js';
export type AccordionProps = {
	defaultExpanded?: boolean;
	disabled?: boolean;
	disableGutters?: boolean;
	expanded?: $bindable<boolean>;
	square?: boolean;
	cx?: object;
	onchange?: (expanded: boolean) => void;
	children?: Snippet;
	summary?: Snippet;
	details?: Snippet;
};
