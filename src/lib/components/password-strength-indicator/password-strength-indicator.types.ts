export type PasswordStrengthIndicatorProps = {
	password?: string;
	minLength?: number;
	requirements?: Array<{
		regex: RegExp;
		message: string;
		points: number;
	}>;
	strengthLevels?: Array<{
		label: string;
		color: string;
		minScore: number;
	}>;
	showStrengthBar?: boolean;
	showRequirements?: boolean;
	showScore?: boolean;
	barHeight?: number;
	class?: string;
};
