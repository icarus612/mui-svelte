<<<<<<< HEAD
=======
import type { Snippet, $bindable } from '$lib/internal/types.js';
>>>>>>> main
export type SplitPaneProps = {
	split?: 'vertical' | 'horizontal';
	minSize?: number | string;
	maxSize?: number | string;
	defaultSize?: number | string;
<<<<<<< HEAD
	size?: number | string;
=======
	size?: $bindable<number | string>;
>>>>>>> main
	allowResize?: boolean;
	resizerStyle?: object;
	paneStyle?: object;
	pane1Style?: object;
	pane2Style?: object;
	primary?: 'first' | 'second';
	step?: number;
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onchange?: (size: number | string) => void;
	ondragstarted?: () => void;
	ondragfinished?: (size: number | string) => void;
	pane1?: Snippet;
	pane2?: Snippet;
>>>>>>> main
};
