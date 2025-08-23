<script lang="ts">
<<<<<<< HEAD
import type { BadgeProps } from './badge.types';

let { ...props }: BadgeProps = $props();
=======
	import type { BadgeProps } from './badge.types.js';

	let {
	badgeContent = undefined,
	anchorOrigin = undefined,
	color = undefined,
	invisible = undefined,
	max = undefined,
	overlap = undefined,
	showZero = undefined,
	variant = undefined,
	cx = undefined,
	children: childrenSnippet = undefined
} = $props();
>>>>>>> main
</script>
