export type MapMarker = {
	position: { lat: number; lng: number };
	title?: string;
};

export type MapProps = {
	center: { lat: number; lng: number };
	zoom: number;
	markers?: MapMarker[];
	height?: number | string;
	width?: number | string;
	apiKey: string;
	libraries?: string[];
	mapType?: 'roadmap' | 'satellite' | 'hybrid' | 'terrain';
	showControls?: boolean;
	showFullscreenControl?: boolean;
	showMapTypeControl?: boolean;
	showRotateControl?: boolean;
	showScaleControl?: boolean;
	showStreetViewControl?: boolean;
	showZoomControl?: boolean;
	gestureHandling?: 'cooperative' | 'greedy' | 'none' | 'auto';
	class?: string;
};
