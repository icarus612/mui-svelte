<script lang="ts">
	import type { AccordionProps } from './accordion.types.js';
	import { v4 as uuid } from 'uuid';

	let {
		defaultExpanded = false,
		disabled = false,
		disableGutters = false,
		expanded = undefined,
		square = false,
		class: cx = '',
		onchange,
		children,
		summary,
		details
	} = $props();

	const id = uuid();
	let isExpanded = $state(expanded !== undefined ? expanded : defaultExpanded);

	$effect(() => {
		if (expanded !== undefined) {
			isExpanded = expanded;
		}
	});

	function handleChange(e: Event) {
		const target = e.target as HTMLInputElement;
		isExpanded = target.checked;
		if (onchange) {
			onchange(isExpanded);
		}
		if (expanded !== undefined) {
			expanded = isExpanded;
		}
	}
</script>

<div class:collapse-open={isExpanded} class="collapse collapse-arrow {cx}" class:rounded-box={!square} class:border-0={disableGutters}>
	<input id={id} type="checkbox" checked={isExpanded} onchange={handleChange} {disabled} class="peer" />
	<label for={id} class="collapse-title text-xl font-medium peer-disabled:cursor-not-allowed">
		{#if summary}
			{@render summary()}
		{/if}
	</label>
	<div class="collapse-content">
		{#if children}
			{@render children()}
		{:else if details}
			{@render details()}
		{/if}
	</div>
</div>
