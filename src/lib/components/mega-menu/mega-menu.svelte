<script lang="ts">
<<<<<<< HEAD
import type { MegaMenuProps } from './mega-menu.types';

let { ...props }: MegaMenuProps = $props();
=======
	import type { MegaMenuProps } from './mega-menu.types.js';
	let {
	items = undefined,
	trigger = undefined,
	open = undefined,
	fullWidth = undefined,
	elevation = undefined,
	transitionDuration = undefined,
	cx = undefined,
	onopen = undefined,
	onclose = undefined,
	onitemclick = undefined,
	icon = undefined
} = $props();
>>>>>>> main
</script>
