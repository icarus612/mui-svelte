# Alert Component

A component to display alerts.

## Props

- `variant?: 'outline' | 'dash' | 'soft'`: The visual style of the alert.
- `color?: 'info' | 'success' | 'warning' | 'error'`: The color of the alert.
- `direction?: 'vertical' | 'horizontal'`: The layout direction of the alert.
- `class?: string`: Additional CSS classes to apply to the alert.
- `children`: The content to be displayed inside the alert. This is a Svelte 5 snippet.
- `icon`: An optional icon to display in the alert. This is a Svelte 5 snippet.

## Usage

```svelte
<script>
	import { Alert } from '$lib/components/alert';
</script>

<Alert color="success">
	{#snippet children()}
		Your message has been sent.
	{/snippet}
</Alert>
```

### With an icon

```svelte
<script>
	import { Alert } from '$lib/components/alert';
</script>

<Alert color="info">
    {#snippet icon()}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    {/snippet}
	{#snippet children()}
		This is an informational alert.
	{/snippet}
</Alert>
```
