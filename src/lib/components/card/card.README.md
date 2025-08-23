# Card Component

A component to display content in a card.

## Props

- `bordered?: boolean`: Adds a border to the card.
- `dashed?: boolean`: Adds a dashed border to the card.
- `imageFull?: boolean`: The image will be the background of the card.
- `side?: boolean`: The image will be on the side of the card.
- `size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'`: The size of the card.
- `class?: string`: Additional CSS classes to apply to the card.
- `children`: The main content of the card. This is a Svelte 5 snippet.
- `figure`: The image or figure of the card. This is a Svelte 5 snippet.
- `title`: The title of the card. This is a Svelte 5 snippet.
- `actions`: The actions of the card, usually buttons. This is a Svelte 5 snippet.

## Usage

```svelte
<script>
	import { Card } from '$lib/components/card';
</script>

<Card>
	{#snippet title()}
		Card Title
	{/snippet}
	{#snippet children()}
		<p>This is the content of the card.</p>
	{/snippet}
	{#snippet actions()}
		<button class="btn btn-primary">Action</button>
	{/snippet}
</Card>
```

### With an image

```svelte
<script>
	import { Card } from '$lib/components/card';
</script>

<Card>
	{#snippet figure()}
		<img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
	{/snippet}
	{#snippet title()}
		Shoes!
	{/snippet}
	{#snippet children()}
		<p>If a dog chews shoes whose shoes does he choose?</p>
	{/snippet}
	{#snippet actions()}
		<button class="btn btn-primary">Buy Now</button>
	{/snippet}
</Card>
```
