<script lang="ts">
	import { snackbarQueue, popAlert } from './snackbar.store';
	import type { Snackbar, SnackbarQueueProps, SnackbarVariant } from './snackbar-queue.types';
	import { Icon } from '$lib/components/icon';

	let { class: cx = '' }: SnackbarQueueProps = $props();

	const variantMap = {
		info: 'alert-info',
		success: 'alert-success',
		warning: 'alert-warning',
		error: 'alert-error'
	};

	function getIcon(variant: SnackbarVariant) {
		switch (variant) {
			case 'success':
				return 'check-circle';
			case 'warning':
				return 'exclamation-triangle';
			case 'error':
				return 'x-circle';
			default:
				return 'information-circle';
		}
	}
</script>

<div class={`fixed bottom-4 right-4 z-50 flex flex-col gap-4 ${cx}`}>
	{@each snackbarQueue as snackbar (snackbar.id)}
		<div role="alert" class={`alert ${variantMap[snackbar.variant]}`}>
			<Icon icon={getIcon(snackbar.variant)} class="w-6 h-6" />
			<div>
				<h3 class="font-bold">{snackbar.title}</h3>
				<div class="text-xs">{snackbar.content}</div>
			</div>
			<button class="btn btn-sm btn-ghost" onclick={() => popAlert(snackbar.id)}>
				<Icon icon="x-mark" class="w-4 h-4" />
			</button>
		</div>
	{/each}
</div>
