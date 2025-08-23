<script lang="ts">
	import type { AlertProps, AlertColor } from './alert.types.js';

	let {
		color = 'info',
		severity = 'info',
		variant = 'standard',
		role = 'alert',
		class: cx = '',
		onclose,
		children,
		action,
		icon
	}: AlertProps = $props();

	let show = $state(true);

	const alertColor = color || severity;

	const alertClass = $derived(
		[
			'alert',
			alertColor ? `alert-${alertColor}` : '',
			variant === 'outlined' ? 'alert-outline' : '',
			variant === 'soft' ? 'alert-soft' : '',
			variant === 'dash' ? 'alert-dash' : '',
			cx
		]
			.join(' ')
			.trim()
	);

	function handleClose() {
		show = false;
		if (onclose) {
			onclose();
		}
	}

	const ICONS: Record<AlertColor, string> = {
		info: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
		success: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
		warning: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>`,
		error: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
	};
</script>

{#if show}
	<div {role} class={alertClass}>
		{#if icon}
			{#if typeof icon === 'string'}
				{@html icon}
			{:else}
				{@render icon()}
			{/if}
		{:else if alertColor}
			{@html ICONS[alertColor]}
		{/if}

		<div class="flex-grow">
			{#if children}
				{#if typeof children === 'string'}
					{children}
				{:else}
					{@render children()}
				{/if}
			{/if}
		</div>

		{#if action}
			<div class="flex-none">
				{#if typeof action === 'string'}
					{action}
				{:else}
					{@render action()}
				{/if}
			</div>
		{/if}

		{#if onclose}
			<div class="flex-none">
				<button
					class="btn btn-sm btn-ghost"
					aria-label="close"
					onclick={handleClose}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		{/if}
	</div>
{/if}
