<script lang="ts">
	import type { AvatarProps } from './avatar.types';

	let {
		shape = 'rounded-full',
		size = 'w-24',
		presence,
		placeholder = false,
		class: cx,
		src,
		alt,
		text,
		ring = false
	}: AvatarProps = $props();

	const avatarClass = $derived(
		['avatar', presence ? `avatar-${presence}` : '', placeholder ? 'placeholder' : '', cx]
			.join(' ')
			.trim()
	);

	const imageClass = $derived(
		[size, shape, ring ? 'ring-primary ring-offset-base-100 ring ring-offset-2' : '']
			.join(' ')
			.trim()
	);
</script>

<div class={avatarClass}>
	<div class={imageClass}>
		{#if placeholder}
			<div class="bg-neutral text-neutral-content">
				<span class="text-3xl">{text}</span>
			</div>
		{:else}
			<img {src} {alt} />
		{/if}
	</div>
</div>
