import type { Snippet, $bindable } from '$lib/internal/types.js';
export type StepperProps = {
	activeStep?: $bindable<number>;
	alternativeLabel?: boolean;
	nonLinear?: boolean;
	orientation?: 'horizontal' | 'vertical';
	cx?: object;
	children?: Snippet;
	connector?: Snippet;
};
