<script lang="ts">
	import '../app.css';
	import { SnackbarQueue } from '$lib/components';

	let { children } = $props();
</script>

<SnackbarQueue />

{@render children()}