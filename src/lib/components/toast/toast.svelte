<script lang="ts">
<<<<<<< HEAD
import type { ToastProps } from './toast.types';

let { ...props }: ToastProps = $props();
=======
	import type { ToastProps } from './toast.types.js';
	let {
	message = undefined,
	type = undefined,
	duration = undefined,
	position = undefined,
	dismissible = undefined,
	pauseOnHover = undefined,
	draggable = undefined,
	draggablePercent = undefined,
	progressBar = undefined,
	progressBarColor = undefined,
	id = undefined,
	transition = undefined,
	cx = undefined,
	onclose = undefined,
	action = undefined,
	icon = undefined
} = $props();
>>>>>>> main
</script>
