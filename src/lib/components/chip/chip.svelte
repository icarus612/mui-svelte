<script lang="ts">
	import type { ChipProps } from './chip.types.js';
	import { XMark } from '$lib/icons/index.js';

	let {
		clickable = false,
		color = 'default',
		disabled = false,
		label = '',
		size = 'medium',
		variant = 'filled',
		ondelete = undefined,
		onclick = undefined,
		avatar = undefined,
		icon = undefined,
		deleteIcon = undefined,
		class: cx = ''
	}: ChipProps = $props();

	const variants = {
		filled: 'chip-filled',
		outlined: 'chip-outlined'
	};

	const colors = {
		default: 'chip-default',
		primary: 'chip-primary',
		secondary: 'chip-secondary',
		error: 'chip-error',
		info: 'chip-info',
		success: 'chip-success',
		warning: 'chip-warning'
	};

	const sizes = {
		small: 'chip-small',
		medium: 'chip-medium'
	};

	const chipClass = $derived(
		[
			'chip',
			variants[variant],
			colors[color],
			sizes[size],
			clickable ? 'chip-clickable' : '',
			disabled ? 'chip-disabled' : '',
			cx
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div
	class={chipClass}
	on:click={disabled ? undefined : onclick}
	role={clickable ? 'button' : undefined}
	tabindex={clickable && !disabled ? 0 : undefined}
>
	{#if avatar}
		<div class="chip-avatar">
			{@render avatar()}
		</div>
	{:else if icon}
		<div class="chip-icon">
			{@render icon()}
		</div>
	{/if}
	<span class="chip-label">{label}</span>
	{#if ondelete}
		<div
			class="chip-delete"
			on:click|stopPropagation={disabled ? undefined : ondelete}
			role="button"
			tabindex={!disabled ? 0 : undefined}
		>
			{#if deleteIcon}
				{@render deleteIcon()}
			{:else}
				<XMark class="h-4 w-4" />
			{/if}
		</div>
	{/if}
</div>
