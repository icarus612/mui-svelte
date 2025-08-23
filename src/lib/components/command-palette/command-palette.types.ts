<<<<<<< HEAD
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
=======
import type { Snippet, $bindable } from '$lib/internal/types.js';
export type CommandPaletteProps = {
	open?: $bindable<boolean>;
	commands?: Array<{ id: string; label: string; description?: string; shortcut?: string; action: () => void; category?: string; }>;
>>>>>>> main
	placeholder?: string;
	noResultsText?: string;
	searchKeys?: string[];
	categories?: string[];
	showCategories?: boolean;
	showShortcuts?: boolean;
	maxResults?: number;
	fuzzySearch?: boolean;
	hotKey?: string;
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onclose?: () => void;
	onsearch?: (query: string) => void;
	onselect?: (command: object) => void;
	icon?: Snippet<[object]>;
>>>>>>> main
};
