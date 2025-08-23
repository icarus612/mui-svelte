import type { Meta, StoryObj } from '@storybook/svelte';
import AudioPlayer from './audio-player.svelte';
import type { AudioPlayerProps } from './audio-player.types';

const meta = {
	title: 'Components/AudioPlayer',
	component: AudioPlayer
} satisfies Meta<AudioPlayerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
