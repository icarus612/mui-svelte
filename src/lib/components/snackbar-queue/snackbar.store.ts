import { v4 as uuidv4 } from 'uuid';
import type { Snackbar, SnackbarVariant } from './snackbar-queue.types';

export const snackbarQueue = $state<Snackbar[]>([]);

type PushAlertOptions = {
	title: string;
	content?: string;
	variant?: SnackbarVariant;
	autoHide?: number;
};

export function pushAlert(options: PushAlertOptions) {
	const id = uuidv4();
	const newSnackbar: Snackbar = {
		id,
		title: options.title,
		content: options.content,
		variant: options.variant || 'info',
		autoHide: options.autoHide === 0 ? undefined : options.autoHide || 5000
	};
	snackbarQueue.push(newSnackbar);

	if (newSnackbar.autoHide) {
		setTimeout(() => {
			popAlert(id);
		}, newSnackbar.autoHide);
	}
}

export function popAlert(id: string) {
	const index = snackbarQueue.findIndex((s) => s.id === id);
	if (index > -1) {
		snackbarQueue.splice(index, 1);
	}
}
