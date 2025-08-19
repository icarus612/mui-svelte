<script lang="ts">
	import SnackbarQueue from './snackbar-queue.svelte';
	import { pushAlert } from './snackbar.store.svelte';
	import Button from '../button/button.svelte';
</script>

<div class="p-8">
	<h1 class="text-2xl font-bold mb-4">SnackbarQueue Demo</h1>
	<div class="flex gap-4">
		<Button onclick={() => pushAlert({ title: 'Info', content: 'This is an info message.' })}>
			Info
		</Button>
		<Button variant="success" onclick={() => pushAlert({ title: 'Success', content: 'This is a success message.', variant: 'success' })}>
			Success
		</Button>
		<Button variant="warning" onclick={() => pushAlert({ title: 'Warning', content: 'This is a warning message.', variant: 'warning' })}>
			Warning
		</Button>
		<Button variant="error" onclick={() => pushAlert({ title: 'Error', content: 'This is an error message.', variant: 'error' })}>
			Error
		</Button>
	</div>
</div>

<SnackbarQueue />