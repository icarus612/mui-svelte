<script lang="ts">
	import Input from './input.svelte';
	import type { InputProps } from './input.types';

	// Traditional Svelte 4 style props for Storybook compatibility
	export let variant: InputProps['variant'] = undefined;
	export let size: InputProps['size'] = undefined;
	export let disabled: InputProps['disabled'] = false;
	export let placeholder: InputProps['placeholder'] = '';
	export let value: InputProps['value'] = '';
	export let bordered: InputProps['bordered'] = true;
	export let ghost: InputProps['ghost'] = false;
	export let oninput: InputProps['oninput'] = undefined;

	// Additional Storybook compatibility
	let className = '';
	export { className as class };
</script>

<Input
	{variant}
	{size}
	{disabled}
	{placeholder}
	{value}
	{bordered}
	{ghost}
	{oninput}
	class={className}
/>