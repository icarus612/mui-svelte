export type DialogProps = {
	open?: boolean;
	'aria-describedby'?: string;
	'aria-labelledby'?: string;
	disableEscapeKeyDown?: boolean;
	fullScreen?: boolean;
	fullWidth?: boolean;
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
	scroll?: 'body' | 'paper';
	transitionDuration?: number | object;
	class?: string;
};
