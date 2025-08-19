<script lang="ts">
	import Button from '$lib/components/button/button.svelte';
</script>

<div class="p-8">
	<h1 class="text-2xl font-bold mb-4">Button Test</h1>
	<Button>
		{#snippet children()}
			Test Button
		{/snippet}
	</Button>
</div>