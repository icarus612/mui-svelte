# Button Component

A versatile button component that supports various styles and sizes based on DaisyUI.

## Props

- `variant?: ButtonVariant`: The visual style of the button. Can be `'primary'`, `'secondary'`, `'accent'`, `'ghost'`, `'link'`, `'info'`, `'success'`, `'warning'`, `'error'`, or `'neutral'`.
- `size?: ButtonSize`: The size of the button. Can be `'lg'`, `'md'`, `'sm'`, or `'xs'`.
- `disabled?: boolean`: If `true`, the button will be disabled.
- `outline?: boolean`: If `true`, the button will have an outline style.
- `wide?: boolean`: If `true`, the button will be wider.
- `glass?: boolean`: If `true`, the button will have a glass effect.
- `class?: string`: Additional CSS classes to apply to the button.
- `children`: The content to be displayed inside the button. This is a Svelte 5 snippet.
- `onclick?: (event: MouseEvent) => void`: A callback function to be executed when the button is clicked.

## Usage

```svelte
<script>
	import { Button } from '$lib/components/button';
</script>

<Button variant="primary" size="lg" onclick={() => alert('Clicked!')}>
	{#snippet children()}
		Click me!
	{/snippet}
</Button>
```
