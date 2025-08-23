export type Command = {
	id: string;
	label: string;
	description?: string;
	shortcut?: string;
	action: () => void;
	category?: string;
};

export type CommandPaletteProps = {
	open?: boolean;
	commands?: Command[];
	placeholder?: string;
	noResultsText?: string;
	searchKeys?: string[];
	categories?: string[];
	showCategories?: boolean;
	showShortcuts?: boolean;
	maxResults?: number;
	fuzzySearch?: boolean;
	hotKey?: string;
	class?: string;
};
