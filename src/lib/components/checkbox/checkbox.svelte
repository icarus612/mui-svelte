<script lang="ts">
	import type { CheckboxProps } from './checkbox.types.js';

	let {
		checked = false,
		defaultChecked = false,
		disabled = false,
		indeterminate = false,
		color,
		size,
		required = false,
		value,
		id,
		name,
		class: cx = '',
		onchange
	}: CheckboxProps = $props();

	let isChecked = $state(checked || defaultChecked);
	let checkboxEl: HTMLInputElement;

	$effect(() => {
		if (checkboxEl) {
			checkboxEl.indeterminate = indeterminate;
		}
	});

	$effect(() => {
		isChecked = checked;
	});

	function handleChange(e: Event) {
		const target = e.target as HTMLInputElement;
		isChecked = target.checked;
		if (onchange) {
			onchange(isChecked);
		}
		checked = isChecked;
	}

	const checkboxClasses = $derived(
		[
			'checkbox',
			color ? `checkbox-${color}` : '',
			size ? `checkbox-${size}` : '',
			cx
		]
			.join(' ')
			.trim()
	);
</script>

<input
	bind:this={checkboxEl}
	type="checkbox"
	class={checkboxClasses}
	{id}
	{name}
	{value}
	{disabled}
	{required}
	checked={isChecked}
	onchange={handleChange}
/>
