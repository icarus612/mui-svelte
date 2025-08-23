export type SplitPaneProps = {
	split?: 'vertical' | 'horizontal';
	minSize?: number | string;
	maxSize?: number | string;
	defaultSize?: number | string;
	size?: number | string;
	allowResize?: boolean;
	resizerStyle?: object;
	paneStyle?: object;
	pane1Style?: object;
	pane2Style?: object;
	primary?: 'first' | 'second';
	step?: number;
	class?: string;
};
