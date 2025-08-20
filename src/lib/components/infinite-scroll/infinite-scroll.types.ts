import type { Snippet } from '$lib/internal/types.js';

export type InfiniteScrollProps = {
	dataLength?: number;
	hasMore?: boolean;
	endMessage?: string;
	scrollThreshold?: number | string;
	inverse?: boolean;
	hasChildren?: boolean;
	pullDownToRefresh?: boolean;
	pullDownToRefreshThreshold?: number;
	initialScrollY?: number;
	height?: number | string;
	cx?: object;
	onnext?: () => void;
	onscroll?: (event: UIEvent) => void;
	onrefresh?: () => void;
	children?: Snippet;
	loader?: Snippet;
	endMessageSnippet?: Snippet;
	pullDownContent?: Snippet;
	releaseContent?: Snippet;
};
