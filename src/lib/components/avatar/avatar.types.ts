export type AvatarShape = 'rounded' | 'rounded-xl' | 'rounded-full';
export type AvatarPresence = 'online' | 'offline';

export type AvatarProps = {
	shape?: AvatarShape;
	size?: string;
	presence?: AvatarPresence;
	placeholder?: boolean;
	class?: string;
	src?: string;
	alt?: string;
	text?: string;
	ring?: boolean;
};
