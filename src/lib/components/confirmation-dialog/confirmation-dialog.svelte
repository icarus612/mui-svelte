<script lang="ts">
	import type { ConfirmationDialogProps } from './confirmation-dialog.types.js';
	let {
	open = undefined,
	title = undefined,
	message = undefined,
	confirmText = undefined,
	cancelText = undefined,
	confirmColor = undefined,
	confirmVariant = undefined,
	cancelColor = undefined,
	cancelVariant = undefined,
	showCancel = undefined,
	loading = undefined,
	maxWidth = undefined,
	cx = undefined,
	onconfirm = undefined,
	oncancel = undefined
} = $props();
</script>
