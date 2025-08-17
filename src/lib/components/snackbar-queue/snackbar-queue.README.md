# SnackbarQueue Component

This component displays a queue of snackbars (toasts) in the bottom-right corner of the screen. It is intended to be used once in the main layout of the application.

## Usage

The `SnackbarQueue` component is controlled by a global store. To display a snackbar, you need to call the `pushAlert` function.

### 1. Add the component to your layout

```svelte
// src/routes/+layout.svelte
<script lang="ts">
	import { SnackbarQueue } from '$lib/components/snackbar-queue';
	let { children } = $props();
</script>

<SnackbarQueue />

{@render children()}
```

### 2. Pushing alerts from any component

```svelte
<script>
	import { pushAlert } from '$lib/components/snackbar-queue';
	import { Button } from '$lib/components/button';
</script>

<Button onclick={() => pushAlert({ title: 'Hello!', content: 'This is a snackbar.' })}>
	Show Snackbar
</Button>
```

## `pushAlert` function

The `pushAlert` function accepts an object with the following properties:

- `title: string` (required): The title of the snackbar.
- `content?: string`: The content of the snackbar.
- `variant?: SnackbarVariant`: The visual style of the snackbar. Can be `'info'`, `'success'`, `'warning'`, or `'error'`. Defaults to `'info'`.
- `autoHide?: number`: The duration in milliseconds after which the snackbar will automatically hide. Defaults to `5000`. Set to `0` to disable auto-hide.
