import type { Meta, StoryObj } from '@storybook/svelte';
import VideoPlayer from './video-player.svelte';
import type { VideoPlayerProps } from './video-player.types';

const meta = {
	title: 'Components/VideoPlayer',
	component: VideoPlayer
} satisfies Meta<VideoPlayerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
