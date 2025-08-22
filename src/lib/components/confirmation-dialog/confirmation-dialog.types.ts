import type { $bindable } from '$lib/internal/types.js';
export type ConfirmationDialogProps = {
	open?: $bindable<boolean>;
	title?: string;
	message?: string;
	confirmText?: string;
	cancelText?: string;
	confirmColor?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
	confirmVariant?: 'text' | 'outlined' | 'contained';
	cancelColor?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
	cancelVariant?: 'text' | 'outlined' | 'contained';
	showCancel?: boolean;
	loading?: boolean;
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	cx?: object;
	onconfirm?: () => void;
	oncancel?: () => void;
};
