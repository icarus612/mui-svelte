<script lang="ts">
	import Icon from './icon.svelte';
	import type { IconProps } from './icon.types';
	
	let { ...props }: IconProps = $props();
</script>

<Icon {...props} />