<script lang="ts">
	import type { ChipProps } from './chip.types.js';

	let {
		clickable = false,
		color,
		disabled = false,
		label = '',
		size,
		variant,
		class: cx = '',
		ondelete,
		onclick,
		avatar,
		icon,
		deleteIcon
	}: ChipProps = $props();

	const chipClasses = $derived(
		[
			'badge',
			color ? `badge-${color}` : '',
			size ? `badge-${size}` : '',
			variant === 'outlined' ? 'badge-outline' : '',
			variant === 'ghost' ? 'badge-ghost' : '',
			variant === 'soft' ? 'badge-soft' : '',
			variant === 'dash' ? 'badge-dash' : '',
			cx
		]
			.join(' ')
			.trim()
	);

	const Tag = clickable || onclick ? 'button' : 'div';
</script>

<svelte:element
	this={Tag}
	class={chipClasses}
	{disabled}
	onclick={onclick}
	role={clickable || onclick ? 'button' : undefined}
>
	{#if avatar}
		{@render avatar()}
	{/if}
	{#if icon}
		{@render icon()}
	{/if}
	{label}
	{#if ondelete}
		<button
			aria-label="delete"
			class="btn btn-ghost btn-xs btn-circle"
			onclick={ondelete}
		>
			{#if deleteIcon}
				{@render deleteIcon()}
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block h-4 w-4 stroke-current"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"
					></path>
				</svg>
			{/if}
		</button>
	{/if}
</svelte:element>
