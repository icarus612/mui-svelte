<script lang="ts">
	import { Button } from '$lib/components';
	import { pushAlert } from '$lib/components';
</script>

<div class="p-8">
	<h1 class="text-2xl font-bold mb-4">MUI Svelte</h1>
	<p class="mb-4">This is a demo page for the component library.</p>
	<Button
		variant="primary"
		onclick={() => pushAlert({ title: 'Hello!', content: 'This is a snackbar from the main page.' })}
	>
		{#snippet children()}
			Show Snackbar
		{/snippet}
	</Button>
</div>
