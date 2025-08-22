export type TransferListProps = {
	left: any[];
	right: any[];
	titles?: [string, string];
	breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	disabled?: boolean;
	filterPlaceholder?: string;
	filterValue?: string;
	searchable?: boolean;
	selectAllLabel?: string;
	showSelectAll?: boolean;
	class?: string;
};
