# SnackbarQueue Component

A robust notification system that displays a queue of snackbars (toasts) in the bottom-right corner of the screen. Features automatic dismissal, multiple variants, and a global store for easy access from any component.

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

## API Reference

### `pushAlert` function

The `pushAlert` function accepts an object with the following properties:

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `title` | `string` | ✅ | - | The title of the snackbar |
| `content` | `string` | ❌ | - | Additional content/description |
| `variant` | `'info' \| 'success' \| 'warning' \| 'error'` | ❌ | `'info'` | Visual style of the snackbar |
| `autoHide` | `number` | ❌ | `5000` | Duration in ms before auto-dismissal (0 to disable) |

### `popAlert` function

Manually remove a specific alert from the queue:

```typescript
import { popAlert } from '$lib/components/snackbar-queue';

// Remove alert by ID (returned from pushAlert)
popAlert(alertId);
```

### `snackbarQueue` store

Access the current queue of alerts:

```typescript
import { snackbarQueue } from '$lib/components/snackbar-queue';

// Get current alerts
const alerts = snackbarQueue();
```

## Examples

### Different Variants

```svelte
<script>
	import { pushAlert } from '$lib/components/snackbar-queue';
</script>

<!-- Info (default) -->
<button onclick={() => pushAlert({ 
	title: 'Info', 
	content: 'This is an informational message.' 
})}>
	Info Alert
</button>

<!-- Success -->
<button onclick={() => pushAlert({ 
	title: 'Success!', 
	content: 'Operation completed successfully.', 
	variant: 'success' 
})}>
	Success Alert
</button>

<!-- Warning -->
<button onclick={() => pushAlert({ 
	title: 'Warning', 
	content: 'Please review before proceeding.', 
	variant: 'warning' 
})}>
	Warning Alert
</button>

<!-- Error -->
<button onclick={() => pushAlert({ 
	title: 'Error', 
	content: 'Something went wrong. Please try again.', 
	variant: 'error' 
})}>
	Error Alert
</button>
```

### Custom Timing

```svelte
<script>
	import { pushAlert } from '$lib/components/snackbar-queue';
</script>

<!-- Quick notification (2 seconds) -->
<button onclick={() => pushAlert({ 
	title: 'Quick!', 
	autoHide: 2000 
})}>
	Quick Alert
</button>

<!-- Persistent notification (won't auto-hide) -->
<button onclick={() => pushAlert({ 
	title: 'Important!', 
	content: 'This message requires your attention.', 
	variant: 'warning',
	autoHide: 0 
})}>
	Persistent Alert
</button>
```

### Form Submission Example

```svelte
<script>
	import { pushAlert } from '$lib/components/snackbar-queue';
	
	async function handleSubmit() {
		try {
			await saveData();
			pushAlert({
				title: 'Saved!',
				content: 'Your changes have been saved successfully.',
				variant: 'success'
			});
		} catch (error) {
			pushAlert({
				title: 'Save Failed',
				content: error.message,
				variant: 'error',
				autoHide: 10000 // Show errors longer
			});
		}
	}
</script>
```

## Styling

The component uses DaisyUI alert classes and is positioned fixed in the bottom-right corner. You can customize the positioning by passing a `class` prop:

```svelte
<SnackbarQueue class="bottom-8 right-8" />
```

## Icons

Each variant automatically displays an appropriate icon:
- **Info**: Information circle
- **Success**: Check circle
- **Warning**: Exclamation triangle
- **Error**: X circle
