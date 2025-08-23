<script lang="ts">
	import type { BadgeProps } from './badge.types.js';

	let {
		badgeContent = '',
		anchorOrigin = { vertical: 'top', horizontal: 'right' },
		color = 'default',
		invisible = false,
		max = 99,
		overlap = 'rectangular',
		showZero = false,
		variant = 'standard',
		class: cx = '',
		children
	}: BadgeProps = $props();

	let badgeClasses = $state('');
	let indicatorClasses = $state('');
	let displayContent: string | number = $state('');
	let isVisible = $state(false);

	$effect(() => {
		badgeClasses = [
			'badge',
			color !== 'default' ? `badge-${color}` : '',
			variant === 'dot' ? 'badge-xs' : '',
			cx
		]
			.join(' ')
			.trim();

		indicatorClasses = [
			'indicator-item',
			anchorOrigin.vertical === 'top' ? 'indicator-top' : '',
			anchorOrigin.vertical === 'bottom' ? 'indicator-bottom' : '',
			anchorOrigin.vertical === 'middle' ? 'indicator-middle' : '',
			anchorOrigin.horizontal === 'left' ? 'indicator-start' : '',
			anchorOrigin.horizontal === 'right' ? 'indicator-end' : '',
			anchorOrigin.horizontal === 'center' ? 'indicator-center' : ''
		]
			.join(' ')
			.trim();

		if (typeof badgeContent === 'number' && badgeContent > max) {
			displayContent = `${max}+`;
		} else {
			displayContent = badgeContent;
		}

		if (invisible) {
			isVisible = false;
		} else if (badgeContent === 0 && !showZero) {
			isVisible = false;
		} else {
			isVisible = true;
		}
	});
</script>

{#if children}
	<div class="indicator">
		{#if isVisible}
			<div class="{indicatorClasses} {badgeClasses}">{displayContent}</div>
		{/if}
		{#if typeof children === 'string'}
			{@html children}
		{:else}
			{@render children()}
		{/if}
	</div>
{:else if isVisible}
	<span class={badgeClasses}>{displayContent}</span>
{/if}
