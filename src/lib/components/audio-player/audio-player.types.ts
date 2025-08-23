export type AudioSource = {
	src: string;
	type: string;
};

export type AudioPlayerProps = {
	src: string | AudioSource[];
	autoplay?: boolean;
	controls?: boolean;
	loop?: boolean;
	muted?: boolean;
	preload?: 'auto' | 'metadata' | 'none';
	volume?: number;
	playbackRate?: number;
	currentTime?: number;
	duration?: number;
	crossOrigin?: 'anonymous' | 'use-credentials';
	mediaGroup?: string;
	disableRemotePlayback?: boolean;
	showPlaybackRate?: boolean;
	showVolumeControl?: boolean;
	showTimeDisplay?: boolean;
	showProgressBar?: boolean;
	class?: string;
};
