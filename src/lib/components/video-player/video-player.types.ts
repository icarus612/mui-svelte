export type VideoSource = {
	src: string;
	type: string;
};

export type VideoPlayerProps = {
	src: string | VideoSource[];
	poster?: string;
	autoplay?: boolean;
	controls?: boolean;
	loop?: boolean;
	muted?: boolean;
	preload?: 'auto' | 'metadata' | 'none';
	volume?: number;
	playbackRate?: number;
	currentTime?: number;
	duration?: number;
	width?: number | string;
	height?: number | string;
	playsInline?: boolean;
	crossOrigin?: 'anonymous' | 'use-credentials';
	controlsList?: string;
	disablePictureInPicture?: boolean;
	disableRemotePlayback?: boolean;
	class?: string;
};
