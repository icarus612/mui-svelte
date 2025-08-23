<script lang="ts">
	import Dialog from './dialog.svelte';
	import type { DialogProps } from './dialog.types';

	let { open = false, ...rest }: DialogProps = $props();
</script>

<Dialog bind:open {...rest} />
