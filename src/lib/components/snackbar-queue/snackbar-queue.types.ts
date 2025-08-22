export type SnackbarVariant = 'info' | 'success' | 'warning' | 'error';

export type SnackbarItem = {
	id: string;
	title: string;
	content?: string;
	variant: SnackbarVariant;
	autoHide?: number; // duration in ms
};

export type SnackbarQueueProps = {
	class?: string;
};
