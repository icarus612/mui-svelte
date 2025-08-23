<<<<<<< HEAD
=======
import type { Snippet, $bindable } from '$lib/internal/types.js';
>>>>>>> main
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
<<<<<<< HEAD
	value?: any;
	variant?: 'fullWidth' | 'scrollable' | 'standard';
	visibleScrollbar?: boolean;
	class?: string;
=======
	value?: $bindable<any>;
	variant?: 'fullWidth' | 'scrollable' | 'standard';
	visibleScrollbar?: boolean;
	cx?: object;
	onchange?: (value: any) => void;
	children?: Snippet;
>>>>>>> main
};
