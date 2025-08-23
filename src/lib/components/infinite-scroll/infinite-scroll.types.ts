export type InfiniteScrollProps = {
	dataLength: number;
	hasMore: boolean;
	endMessage?: string;
	scrollThreshold?: number | string;
	inverse?: boolean;
	hasChildren?: boolean;
	pullDownToRefresh?: boolean;
	pullDownToRefreshThreshold?: number;
	initialScrollY?: number;
	height?: number | string;
	class?: string;
};
