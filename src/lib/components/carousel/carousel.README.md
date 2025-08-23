# Carousel Component

A component to display a carousel of items.

## Props

- `snap?: 'start' | 'center' | 'end'`: The snapping behavior of the carousel.
- `vertical?: boolean`: If `true`, the carousel will be vertical.
- `class?: string`: Additional CSS classes to apply to the carousel.
- `children`: The items to be displayed in the carousel. This is a Svelte 5 snippet.

## Usage

```svelte
<script>
	import { Carousel } from '$lib/components/carousel';
</script>

<Carousel>
	{#snippet children()}
		<div class="carousel-item">
			<img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Burger" />
		</div>
		<div class="carousel-item">
			<img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Burger" />
		</div>
		<div class="carousel-item">
			<img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Burger" />
		</div>
	{/snippet}
</Carousel>
```
