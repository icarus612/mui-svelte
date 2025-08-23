<script lang="ts">
	import Accordion from './accordion.svelte';
	import type { AccordionProps } from './accordion.types';

	type Props = AccordionProps & {
		summaryText?: string;
		detailsText?: string;
	};

	let { summaryText, detailsText, ...rest }: Props = $props();
</script>

{#snippet summary()}
	{summaryText}
{/snippet}

{#snippet details()}
	{detailsText}
{/snippet}

<Accordion {...rest} summary={summary} details={details} />
