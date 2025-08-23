export type EmptyStateProps = {
	title?: string;
	description?: string;
	image?: string;
	imageWidth?: number | string;
	imageHeight?: number | string;
	actionText?: string;
	iconColor?: string;
	variant?: 'default' | 'error' | 'empty' | 'search';
	class?: string;
};
