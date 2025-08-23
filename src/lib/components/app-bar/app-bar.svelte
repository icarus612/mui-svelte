<script lang="ts">
<<<<<<< HEAD
import type { AppBarProps } from './app-bar.types';

let { ...props }: AppBarProps = $props();
=======
	import type { AppBarProps } from './app-bar.types.js';
	let {
	color = undefined,
	enableColorOnDark = undefined,
	position = undefined,
	variant = undefined,
	cx = undefined,
	children: childrenSnippet = undefined
} = $props();
>>>>>>> main
</script>
