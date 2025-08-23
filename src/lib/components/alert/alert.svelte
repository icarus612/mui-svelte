<script lang="ts">
	import type { AlertProps } from './alert.types.js';
	import {
		CheckCircle,
		ExclamationTriangle,
		InformationCircle,
		XCircle,
		XMark
	} from '$lib/icons/index.js';

	let {
		color = 'info',
		role = 'alert',
		variant = 'standard',
		onclose = undefined,
		children: childrenSnippet,
		action = undefined,
		icon = undefined
	} = $props<AlertProps>();

	let open = true;

	const colors = {
		info: 'alert-info',
		success: 'alert-success',
		warning: 'alert-warning',
		error: 'alert-error'
	};

	const variants = {
		standard: '',
		filled: '',
		outlined: 'alert-outline'
	};

	const icons = {
		info: InformationCircle,
		success: CheckCircle,
		warning: ExclamationTriangle,
		error: XCircle
	};

	function handleClose() {
		open = false;
		if (onclose) {
			onclose();
		}
	}
</script>

{#if open}
	<div role={role} class="alert {colors[color]} {variants[variant]}">
		{#if icon}
			{@render icon()}
		{:else}
			<svelte:component this={icons[color]} class="h-6 w-6" />
		{/if}

		<span>
			{#if childrenSnippet}
				{@render childrenSnippet()}
			{/if}
		</span>

		{#if action}
			<div class="flex-none">
				{@render action()}
			</div>
		{/if}

		{#if onclose}
			<div class="flex-none">
				<button class="btn btn-sm btn-ghost" on:click={handleClose}>
					<XMark class="h-6 w-6" />
				</button>
			</div>
		{/if}
	</div>
{/if}
