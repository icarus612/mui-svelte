<script lang="ts">
	import type { NumberInputProps } from './number-input.types.js';

	let {
	value = undefined,
	defaultValue = undefined,
	min = undefined,
	max = undefined,
	step = undefined,
	precision = undefined,
	disabled = undefined,
	readOnly = undefined,
	required = undefined,
	error = undefined,
	helperText = undefined,
	placeholder = undefined,
	thousandSeparator = undefined,
	decimalSeparator = undefined,
	allowNegative = undefined,
	allowLeadingZeros = undefined,
	showControls = undefined,
	controlsPosition = undefined,
	size = undefined,
	variant = undefined,
	fullWidth = undefined,
	cx = undefined,
	onchange = undefined,
	prefix = undefined,
	suffix = undefined
} = $props();
</script>
