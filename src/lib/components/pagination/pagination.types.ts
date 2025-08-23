export type PaginationProps = {
	boundaryCount?: number;
	color?: 'primary' | 'secondary' | 'standard';
	count?: number;
	defaultPage?: number;
	disabled?: boolean;
	getItemAriaLabel?: (type: string, page: number, selected: boolean) => string;
	hideNextButton?: boolean;
	hidePrevButton?: boolean;
	page?: number;
	shape?: 'circular' | 'rounded';
	showFirstButton?: boolean;
	showLastButton?: boolean;
	siblingCount?: number;
	size?: 'small' | 'medium' | 'large';
	variant?: 'outlined' | 'text';
	class?: string;
};
