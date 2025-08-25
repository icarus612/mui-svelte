# Input Component

A versatile input component that supports various styles and sizes based on DaisyUI.

## Props

- `variant?: InputVariant`: The visual style of the input. Can be `'primary'`, `'secondary'`, `'accent'`, `'info'`, `'success'`, `'warning'`, `'error'`, or `'neutral'`.
- `size?: InputSize`: The size of the input. Can be `'lg'`, `'md'`, `'sm'`, or `'xs'`.
- `disabled?: boolean`: If `true`, the input will be disabled.
- `placeholder?: string`: The placeholder text for the input.
- `value?: string`: The value of the input. This is a controlled component.
- `bordered?: boolean`: If `true`, the input will have a border.
- `ghost?: boolean`: If `true`, the input will have a ghost style.
- `class?: string`: Additional CSS classes to apply to the input.
- `oninput?: (event: Event) => void`: A callback function to be executed when the input value changes.

## Usage

```svelte
<script>
	import { Input } from '$lib/components/input';
	let value = $state('');
</script>

<Input
	variant="primary"
	placeholder="Enter text..."
	value={value}
	oninput={(e) => (value = e.currentTarget.value)}
/>

<p>Value: {value}</p>
```
