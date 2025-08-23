export type AffixProps = {
	offsetTop?: number;
	offsetBottom?: number;
	position?: 'top' | 'bottom';
	target?: () => Window | HTMLElement;
	zIndex?: number;
	class?: string;
};
