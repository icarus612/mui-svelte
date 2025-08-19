# Icon Component

This component is used to display SVG icons. It dynamically loads the icon from the `src/lib/icons` directory.

## Props

- `icon: string` (required): The name of the icon to display (e.g., 'academic-cap').
- `class?: string`: Additional CSS classes to apply to the SVG element.
- `stroke?: string`: The stroke color of the icon.
- `fill?: string`: The fill color of the icon.
- `strokeWidth?: string`: The stroke width of the icon.
- `viewBox?: string`: The viewBox of the icon.

## Usage

```svelte
<script>
	import { Icon } from '$lib/components/icon';
</script>

<Icon icon="academic-cap" class="w-6 h-6 text-blue-500" />
```
