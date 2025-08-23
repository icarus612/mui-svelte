<script lang="ts">
	import type { DialogProps } from './dialog.types.js';

	let {
		open = false,
		'aria-describedby': ariaDescribedby,
		'aria-labelledby': ariaLabelledby,
		disableEscapeKeyDown = false,
		class: cx = '',
		onclose,
		oncancel,
		onbackdropclick,
		children
	}: DialogProps = $props();

	let dialogEl: HTMLDialogElement;

	$effect(() => {
		if (dialogEl) {
			if (open) {
				dialogEl.showModal();
			} else {
				dialogEl.close();
			}
		}
	});

	function handleCancel(e: Event) {
		if (disableEscapeKeyDown) {
			e.preventDefault();
		} else {
			if (oncancel) {
				oncancel(e);
			}
			open = false;
		}
	}

	function handleClose(e: Event) {
		if (onclose) {
			onclose(e);
		}
		open = false;
	}

	function handleClick(e: MouseEvent) {
		if (e.target === dialogEl && onbackdropclick) {
			onbackdropclick(e);
		}
	}
</script>

<dialog
	bind:this={dialogEl}
	class="modal {cx}"
	onclose={handleClose}
	oncancel={handleCancel}
	onclick={handleClick}
	aria-labelledby={ariaLabelledby}
	aria-describedby={ariaDescribedby}
>
	<div class="modal-box">
		{#if children}
			{#if typeof children === 'string'}
				{@html children}
			{:else}
				{@render children()}
			{/if}
		{/if}
	</div>
</dialog>
