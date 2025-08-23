export type VirtualListProps = {
	items: any[];
	itemHeight: number | ((index: number) => number);
	height: number;
	width?: number | string;
	overscan?: number;
	scrollDirection?: 'vertical' | 'horizontal';
	scrollOffset?: number;
	scrollToIndex?: number;
	scrollToAlignment?: 'auto' | 'smart' | 'center' | 'end' | 'start';
	estimatedItemSize?: number;
	getItemKey?: (item: any, index: number) => string;
	class?: string;
};
