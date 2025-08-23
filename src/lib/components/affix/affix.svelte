<script lang="ts">
<<<<<<< HEAD
import type { AffixProps } from './affix.types';

let { ...props }: AffixProps = $props();
=======
	import type { AffixProps } from './affix.types.js';
	let {
	offsetTop = undefined,
	offsetBottom = undefined,
	position = 'top',
	target = undefined,
	zIndex = undefined,
	cx = undefined,
	onchange = undefined,
	onpin = undefined,
	onunpin = undefined,
	children: childrenSnippet = undefined
} = $props();
>>>>>>> main
</script>
