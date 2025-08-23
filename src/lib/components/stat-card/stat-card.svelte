<script lang="ts">
<<<<<<< HEAD
import type { StatCardProps } from './stat-card.types';

let { ...props }: StatCardProps = $props();
=======
	import type { StatCardProps } from './stat-card.types.js';

	let {
	title = undefined,
	value = undefined,
	change = undefined,
	changeLabel = undefined,
	changeType = undefined,
	color = undefined,
	loading = undefined,
	format = undefined,
	trend = undefined,
	trendLabel = undefined,
	cx = undefined,
	onclick = undefined,
	prefix = undefined,
	suffix = undefined,
	icon = undefined,
	footer = undefined
} = $props();
>>>>>>> main
</script>
