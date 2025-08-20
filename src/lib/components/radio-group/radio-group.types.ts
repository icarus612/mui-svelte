import type { Snippet, $bindable } from '$lib/internal/types.js';

export type RadioGroupProps = {
	value?: $bindable<any>;
	defaultValue?: any;
	name?: string;
	row?: boolean;
	cx?: object;
	onchange?: (value: any) => void;
	children?: Snippet;
};
