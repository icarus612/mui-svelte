<<<<<<< HEAD
=======
import type { Snippet, $bindable } from '$lib/internal/types.js';
>>>>>>> main
export type AccordionProps = {
	defaultExpanded?: boolean;
	disabled?: boolean;
	disableGutters?: boolean;
<<<<<<< HEAD
	expanded?: boolean;
	square?: boolean;
	class?: string;
=======
	expanded?: $bindable<boolean>;
	square?: boolean;
	cx?: object;
	onchange?: (expanded: boolean) => void;
	children?: Snippet;
	summary?: Snippet;
	details?: Snippet;
>>>>>>> main
};
