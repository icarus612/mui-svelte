export type MegaMenuItem = {
	label: string;
	href?: string;
	description?: string;
};

export type MegaMenuColumn = {
	title?: string;
	items: MegaMenuItem[];
};

export type MegaMenuCategory = {
	title: string;
	columns: MegaMenuColumn[];
};

export type MegaMenuProps = {
	items?: MegaMenuCategory[];
	trigger?: 'hover' | 'click';
	open?: boolean;
	fullWidth?: boolean;
	elevation?: number;
	transitionDuration?: number;
	class?: string;
};
