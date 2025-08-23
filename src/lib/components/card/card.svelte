<script lang="ts">
	import type { CardProps } from './card.types.js';

	let {
		bordered = false,
		imageFull = false,
		side = false,
		size = 'md',
		class: cx = '',
		children
	}: CardProps = $props();

	const cardClass = $derived(
		[
			'card',
			bordered ? 'card-bordered' : '',
			imageFull ? 'image-full' : '',
			side ? 'card-side' : '',
			size ? `card-${size}` : '',
			cx
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class={cardClass}>
	{@render children()}
</div>
