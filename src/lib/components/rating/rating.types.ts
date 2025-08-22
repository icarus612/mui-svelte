export type RatingProps = {
	value?: number;
	defaultValue?: number;
	disabled?: boolean;
	emptyLabelText?: string;
	getLabelText?: (value: number) => string;
	highlightSelectedOnly?: boolean;
	max?: number;
	name?: string;
	precision?: number;
	readOnly?: boolean;
	size?: 'small' | 'medium' | 'large';
	class?: string;
};
