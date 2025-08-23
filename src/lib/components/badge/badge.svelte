<script lang="ts">
	import type { BadgeProps } from './badge.types.js';

	let {
		badgeContent = undefined,
		color = 'default',
		invisible = false,
		max = 99,
		showZero = false,
		variant = 'standard',
		cx = undefined,
		children: childrenSnippet = undefined
	} = $props<BadgeProps>();

	const colors = {
		default: '',
		primary: 'badge-primary',
		secondary: 'badge-secondary',
		error: 'badge-error',
		info: 'badge-info',
		success: 'badge-success',
		warning: 'badge-warning'
	};

	const variants = {
		standard: '',
		dot: 'badge-dot'
	};
</script>

{#if invisible}
	{#if childrenSnippet}
		{@render childrenSnippet()}
	{/if}
{:else}
	<div class="indicator">
		{#if childrenSnippet}
			{@render childrenSnippet()}
		{/if}
		<span
			class="indicator-item badge {colors[color]}
			{variants[variant]}"
		>
			{#if variant === 'standard'}
				{#if badgeContent && badgeContent > max}
					{max}+
				{:else if badgeContent === 0 && showZero}
					0
				{:else if badgeContent}
					{badgeContent}
				{/if}
			{/if}
		</span>
	</div>
{/if}
