<script lang="ts">
<<<<<<< HEAD
import type { ColorPickerProps } from './color-picker.types';

let { ...props }: ColorPickerProps = $props();
=======
	import type { ColorPickerProps } from './color-picker.types.js';

	let {
	value = undefined,
	defaultValue = undefined,
	format = undefined,
	disabled = undefined,
	showAlpha = undefined,
	showPreview = undefined,
	presets = undefined,
	placement = undefined,
	showInput = undefined,
	showPalette = undefined,
	paletteColors = undefined,
	width = undefined,
	cx = undefined,
	onchange = undefined,
	onopen = undefined,
	onclose = undefined
} = $props();
>>>>>>> main
</script>
