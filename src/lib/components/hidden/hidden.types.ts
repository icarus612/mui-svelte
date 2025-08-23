<<<<<<< HEAD
=======
import type { Snippet } from '$lib/internal/types.js';
>>>>>>> main
export type HiddenProps = {
	implementation?: 'css' | 'js';
	initialWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	lgDown?: boolean;
	lgUp?: boolean;
	mdDown?: boolean;
	mdUp?: boolean;
	only?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | Array<'xs' | 'sm' | 'md' | 'lg' | 'xl'>;
	smDown?: boolean;
	smUp?: boolean;
	xlDown?: boolean;
	xlUp?: boolean;
	xsDown?: boolean;
	xsUp?: boolean;
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	children?: Snippet;
>>>>>>> main
};
