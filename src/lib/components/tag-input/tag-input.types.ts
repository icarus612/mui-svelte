export type TagInputProps = {
	value?: string[];
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
	class?: string;
};
