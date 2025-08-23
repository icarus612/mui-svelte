export type LinkProps = {
	color?:
		| 'inherit'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'error'
		| 'info'
		| 'warning'
		| 'textPrimary'
		| 'textSecondary';
	href?: string;
	target?: string;
	rel?: string;
	underline?: 'always' | 'hover' | 'none';
	variant?:
		| 'body1'
		| 'body2'
		| 'button'
		| 'caption'
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'inherit'
		| 'overline'
		| 'subtitle1'
		| 'subtitle2';
	class?: string;
};
