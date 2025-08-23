export type TabsProps = {
	allowScrollButtonsMobile?: boolean;
	'aria-label'?: string;
	'aria-labelledby'?: string;
	centered?: boolean;
	indicatorColor?: 'primary' | 'secondary';
	orientation?: 'horizontal' | 'vertical';
	scrollButtons?: 'auto' | false | true;
	selectionFollowsFocus?: boolean;
	textColor?: 'inherit' | 'primary' | 'secondary';
	value?: any;
	variant?: 'fullWidth' | 'scrollable' | 'standard';
	visibleScrollbar?: boolean;
	class?: string;
};
