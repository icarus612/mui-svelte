import type { Snippet, $bindable } from '$lib/internal/types.js';

export type TransferListProps = {
	left?: $bindable<Array<any>>;
	right?: $bindable<Array<any>>;
	titles?: [string, string];
	breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	disabled?: boolean;
	filterPlaceholder?: string;
	filterValue?: $bindable<string>;
	searchable?: boolean;
	selectAllLabel?: string;
	showSelectAll?: boolean;
	cx?: object;
	onchange?: (left: Array<any>, right: Array<any>) => void;
	onfilterchange?: (value: string, list: 'left' | 'right') => void;
	item?: Snippet<[any]>;
	list?: Snippet<[Array<any>]>;
};
