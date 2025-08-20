import type { Snippet } from '$lib/internal/types.js';
export type BreadcrumbsProps = {
	'aria-label'?: string;
	expandText?: string;
	itemsAfterCollapse?: number;
	itemsBeforeCollapse?: number;
	maxItems?: number;
	separator?: string;
	cx?: object;
	children?: Snippet;
	separatorSnippet?: Snippet;
};
