<script lang="ts">
	import type { CardProps } from './card.types';

	let {
		bordered,
		dashed,
		imageFull,
		side,
		size,
		class: cx,
		children,
		figure,
		title,
		actions
	}: CardProps = $props();

	const cardClass = $derived(
		[
			'card',
			bordered ? 'card-border' : '',
			dashed ? 'card-dash' : '',
			imageFull ? 'image-full' : '',
			side ? 'card-side' : '',
			size ? `card-${size}` : '',
			cx
		]
			.join(' ')
			.trim()
	);
</script>

<div class={cardClass}>
	{#if figure}
		<figure>
			{#if typeof figure === 'string'}
				{@html figure}
			{:else}
				{@render figure()}
			{/if}
		</figure>
	{/if}
	<div class="card-body">
		{#if title}
			<h2 class="card-title">
				{#if typeof title === 'string'}
					{title}
				{:else}
					{@render title()}
				{/if}
			</h2>
		{/if}
		{#if typeof children === 'string'}
			<p>{children}</p>
		{:else}
			{@render children()}
		{/if}
		{#if actions}
			<div class="card-actions">
				{#if typeof actions === 'string'}
					{@html actions}
				{:else}
					{@render actions()}
				{/if}
			</div>
		{/if}
	</div>
</div>
