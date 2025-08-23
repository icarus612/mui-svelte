# Avatar Component

A component to display avatars.

## Props

- `shape?: 'rounded' | 'rounded-xl' | 'rounded-full'`: The shape of the avatar.
- `size?: string`: The size of the avatar (e.g., 'w-24').
- `presence?: 'online' | 'offline'`: The presence indicator for the avatar.
- `placeholder?: boolean`: If `true`, the avatar will be a placeholder.
- `class?: string`: Additional CSS classes to apply to the avatar.
- `src?: string`: The image source for the avatar.
- `alt?: string`: The alt text for the image.
- `text?: string`: The text to display in a placeholder avatar.
- `ring?: boolean`: If `true`, the avatar will have a ring around it.

## Usage

### Image Avatar
```svelte
<script>
	import { Avatar } from '$lib/components/avatar';
</script>

<Avatar src="https://img.daisyui.com/images/profile/demo/2@94.webp" alt="User avatar" />
```

### Placeholder Avatar
```svelte
<script>
	import { Avatar } from '$lib/components/avatar';
</script>

<Avatar placeholder text="AB" />
```

### With Presence Indicator
```svelte
<script>
	import { Avatar } from '$lib/components/avatar';
</script>

<Avatar src="https://img.daisyui.com/images/profile/demo/2@94.webp" alt="User avatar" presence="online" />
```

### With Ring
```svelte
<script>
	import { Avatar } from '$lib/components/avatar';
</script>

<Avatar src="https://img.daisyui.com/images/profile/demo/2@94.webp" alt="User avatar" ring />
```
