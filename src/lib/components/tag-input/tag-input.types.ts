import type { Snippet, $bindable } from '$lib/internal/types.js';

export type TagInputProps = {
	value?: $bindable<string[]>;
	defaultValue?: string[];
	placeholder?: string;
	disabled?: boolean;
	readOnly?: boolean;
	maxTags?: number;
	allowDuplicates?: boolean;
	separator?: string | string[];
	validate?: (tag: string) => boolean;
	transform?: (tag: string) => string;
	suggestions?: string[];
	clearable?: boolean;
	cx?: object;
	onchange?: (tags: string[]) => void;
	onadd?: (tag: string) => void;
	ondelete?: (tag: string, index: number) => void;
	oninputchange?: (value: string) => void;
	tag?: Snippet<[string, number]>;
};
