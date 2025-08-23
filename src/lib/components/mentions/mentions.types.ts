export type MentionSuggestion = {
	id: string;
	display: string;
};

export type MentionsProps = {
	value?: string;
	suggestions?: MentionSuggestion[];
	trigger?: string | string[];
	markup?: string;
	displayTransform?: (id: string, display: string) => string;
	regex?: RegExp;
	appendSpaceOnAdd?: boolean;
	allowSpaceInQuery?: boolean;
	allowSuggestionsAboveCursor?: boolean;
	forceSuggestionsAboveCursor?: boolean;
	placeholder?: string;
	disabled?: boolean;
	readOnly?: boolean;
	class?: string;
};
