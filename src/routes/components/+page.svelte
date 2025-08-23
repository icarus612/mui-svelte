<script lang="ts">
	import Accordion from '$lib/components/accordion/accordion.svelte';
	import Alert from '$lib/components/alert/alert.svelte';
	import AppBar from '$lib/components/app-bar/app-bar.svelte';
	import Avatar from '$lib/components/avatar/avatar.svelte';
	import Badge from '$lib/components/badge/badge.svelte';
</script>

<h1 class="text-4xl font-bold text-center my-8">Component Playground</h1>

<div class="max-w-4xl mx-auto p-4">
	<h2 class="text-2xl font-semibold mb-4 border-b pb-2">Accordion</h2>
	<div class="space-y-2">
		{#snippet summary1}
			Accordion 1
		{/snippet}
		{#snippet details1}
			<p>Here's the content for the first accordion. It can contain any markup.</p>
		{/snippet}
		<Accordion summary={summary1} details={details1} />

		{#snippet summary2}
			Accordion 2 (Initially Expanded)
		{/snippet}
		{#snippet details2}
			<p>This one starts open.</p>
		{/snippet}
		<Accordion defaultExpanded={true} summary={summary2} details={details2} />

		{#snippet summary3}
			Accordion 3 (Disabled)
		{/snippet}
		{#snippet details3}
			<p>You can't open this one.</p>
		{/snippet}
		<Accordion disabled={true} summary={summary3} details={details3} />
	</div>

	<h2 class="text-2xl font-semibold mb-4 mt-8 border-b pb-2">Alert</h2>
	<div class="space-y-4">
		<Alert>This is a default (info) alert.</Alert>
		<Alert color="success">This is a success alert.</Alert>

		{#snippet warning_children}
			This is a <strong>warning</strong> alert with custom markup.
		{/snippet}
		<Alert color="warning" children={warning_children} />

		<Alert color="error" onclose={() => {
			console.log('Alert closed!');
		}}>This is a closable error alert.</Alert>
		<Alert color="info" variant="soft">This is a soft info alert.</Alert>
		<Alert color="success" variant="outlined">This is an outlined success alert.</Alert>
		<Alert color="warning" variant="dash">This is a dashed warning alert.</Alert>
	</div>

	<h2 class="text-2xl font-semibold mb-4 mt-8 border-b pb-2">App Bar</h2>
	<div class="space-y-4">
		<AppBar>
			<div class="flex-1">
				<a href="/" class="btn btn-ghost text-xl">
					daisyUI
				</a>
			</div>
			<div class="flex-none">
				<button class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-5 w-5 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
						></path>
					</svg>
				</button>
			</div>
		</AppBar>
	</div>

	<h2 class="text-2xl font-semibold mb-4 mt-8 border-b pb-2">Avatar</h2>
	<div class="flex items-center space-x-4">
		<Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Circular Avatar" />
		<Avatar
			src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
			alt="Rounded Avatar"
			variant="rounded"
		/>
		<Avatar
			src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
			alt="Square Avatar"
			variant="square"
		/>
		<Avatar>AB</Avatar>
		<Avatar variant="rounded">CD</Avatar>
		<Avatar variant="square">EF</Avatar>
	</div>

	<h2 class="text-2xl font-semibold mb-4 mt-8 border-b pb-2">Badge</h2>
	<div class="flex items-center space-x-4">
		<Badge badgeContent="5" />
		<Badge badgeContent="New" color="primary" />
		<Badge badgeContent="Hot" color="secondary" />
		<Badge badgeContent={100} max={99} />
		<Badge variant="dot" badgeContent="" />

		<Badge badgeContent="8" color="primary">
			<div class="w-24 h-12 bg-base-300 rounded-lg flex items-center justify-center">
				Content
			</div>
		</Badge>
	</div>
</div>
