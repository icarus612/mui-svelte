export type ClickAwayListenerProps = {
	disableReactTree?: boolean;
	mouseEvent?: 'onClick' | 'onMouseDown' | 'onMouseUp' | 'onPointerDown' | 'onPointerUp' | false;
	touchEvent?: 'onTouchEnd' | 'onTouchStart' | false;
};
