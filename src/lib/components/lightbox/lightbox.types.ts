export type LightboxImage = {
	src: string;
	alt?: string;
	caption?: string;
};

export type LightboxProps = {
	images: LightboxImage[];
	open?: boolean;
	currentIndex?: number;
	showThumbnails?: boolean;
	showFullscreen?: boolean;
	showZoom?: boolean;
	showDownload?: boolean;
	showRotate?: boolean;
	showNav?: boolean;
	showCaption?: boolean;
	enableKeyboardNav?: boolean;
	enableMouseZoom?: boolean;
	enableSwipe?: boolean;
	swipeThreshold?: number;
	doubleClickZoom?: number;
	wheelZoom?: number;
	pinchZoom?: boolean;
	class?: string;
};
