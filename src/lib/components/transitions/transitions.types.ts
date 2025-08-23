export type TransitionsProps = {
	in: boolean;
	appear?: boolean;
	easing?: string | object;
	style?: object;
	timeout?: number | object | 'auto';
	// Slide specific
	direction?: 'down' | 'left' | 'right' | 'up';
	// Collapse specific
	collapsedSize?: string | number;
	orientation?: 'horizontal' | 'vertical';
};
