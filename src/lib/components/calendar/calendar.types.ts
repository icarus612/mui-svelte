<<<<<<< HEAD
export type CalendarProps = {
	value?: Date | null;
	defaultValue?: Date;
	views?: ('year' | 'month' | 'day')[];
=======
import type { Snippet, $bindable } from '$lib/internal/types.js';

export type CalendarProps = {
	value?: $bindable<Date | null>;
	defaultValue?: Date;
	views?: Array<'year' | 'month' | 'day'>;
>>>>>>> main
	openTo?: 'year' | 'month' | 'day';
	disabled?: boolean;
	readOnly?: boolean;
	minDate?: Date;
	maxDate?: Date;
	shouldDisableDate?: (date: Date) => boolean;
	shouldDisableMonth?: (date: Date) => boolean;
	shouldDisableYear?: (date: Date) => boolean;
	disableFuture?: boolean;
	disableHighlightToday?: boolean;
	disablePast?: boolean;
	displayWeekNumber?: boolean;
	fixedWeekNumber?: number;
<<<<<<< HEAD
	focusedView?: 'year' | 'month' | 'day';
=======
	focusedView?: $bindable<'year' | 'month' | 'day'>;
>>>>>>> main
	loading?: boolean;
	monthsPerRow?: 3 | 4;
	reduceAnimations?: boolean;
	showDaysOutsideCurrentMonth?: boolean;
	timezone?: string;
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onchange?: (date: Date) => void;
	onmonthchange?: (month: Date) => void;
	onviewchange?: (view: string) => void;
	onyearchange?: (year: number) => void;
	onfocusedviewchange?: (view: string) => void;
	loadingSnippet?: Snippet;
>>>>>>> main
};
