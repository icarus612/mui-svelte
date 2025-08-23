<script lang="ts">
	import type { AvatarProps } from './avatar.types.js';

	let {
		alt = '',
		sizes = '',
		src = '',
		srcSet = '',
		variant = 'circular',
		class: cx = '',
		children
	}: AvatarProps = $props();

	const variantClass = $derived(
		variant === 'rounded'
			? 'rounded-xl'
			: variant === 'circular'
			? 'rounded-full'
			: ''
	);
</script>

<div class="avatar {cx}" class:placeholder={!src}>
	{#if src}
		<div class="w-24 {variantClass}">
			<img {src} {alt} {sizes} {srcSet} />
		</div>
	{:else}
		<div class="w-24 bg-neutral text-neutral-content {variantClass}">
			{#if children}
				{#if typeof children === 'string'}
					<span class="text-3xl">{children}</span>
				{:else}
					{@render children()}
				{/if}
			{/if}
		</div>
	{/if}
</div>
