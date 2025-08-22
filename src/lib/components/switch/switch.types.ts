export type SwitchProps = {
	checked?: boolean;
	defaultChecked?: boolean;
	disabled?: boolean;
	color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
	edge?: 'start' | 'end' | false;
	size?: 'small' | 'medium';
	id?: string;
	required?: boolean;
	value?: any;
	disableRipple?: boolean;
	class?: string;
};
