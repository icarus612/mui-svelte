import type { Snippet } from '$lib/internal/types.js';

export type ListProps = {
	dense?: boolean;
	disablePadding?: boolean;
	subheader?: string;
	cx?: object;
	children?: Snippet;
	subheaderSnippet?: Snippet;
};
