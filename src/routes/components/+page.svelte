<script lang="ts">
	import Accordion from '$lib/components/accordion/accordion.svelte';
	import Alert from '$lib/components/alert/alert.svelte';
	import AppBar from '$lib/components/app-bar/app-bar.svelte';
	import Avatar from '$lib/components/avatar/avatar.svelte';
	import Badge from '$lib/components/badge/badge.svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs/breadcrumbs.svelte';
	import BottomNavigation from '$lib/components/bottom-navigation/bottom-navigation.svelte';
	import ButtonGroup from '$lib/components/button-group/button-group.svelte';
	import Card from '$lib/components/card/card.svelte';
	import Checkbox from '$lib/components/checkbox/checkbox.svelte';
	import Chip from '$lib/components/chip/chip.svelte';
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

	<h2 class="text-2xl font-semibold mb-4 mt-8 border-b pb-2">Breadcrumbs</h2>
	<Breadcrumbs>
		<ul>
			<li>
				<a>Home</a>
			</li>
			<li>
				<a>Documents</a>
			</li>
			<li>Add Document</li>
		</ul>
	</Breadcrumbs>

	<h2 class="text-2xl font-semibold mb-4 mt-8 border-b pb-2">Bottom Navigation</h2>
	<BottomNavigation>
		<button class="active">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
				/>
			</svg>
		</button>
		<button>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		</button>
		<button>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
				/>
			</svg>
		</button>
	</BottomNavigation>

	<h2 class="text-2xl font-semibold mb-4 mt-8 border-b pb-2">Button Group</h2>
	<div class="flex items-center space-x-4">
		<ButtonGroup>
			<button class="btn btn-primary join-item">Button 1</button>
			<button class="btn btn-primary join-item">Button 2</button>
			<button class="btn btn-primary join-item">Button 3</button>
		</ButtonGroup>
		<ButtonGroup orientation="vertical">
			<button class="btn btn-secondary join-item">Button 1</button>
			<button class="btn btn-secondary join-item">Button 2</button>
			<button class="btn btn-secondary join-item">Button 3</button>
		</ButtonGroup>
	</div>

	<h2 class="text-2xl font-semibold mb-4 mt-8 border-b pb-2">Card</h2>
	<div class="flex space-x-4">
		<Card class="w-96">
			<figure>
				<img
					src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
					alt="Shoes"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</Card>
		<Card class="w-96" variant="outlined">
			<div class="card-body">
				<h2 class="card-title">Card title!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</Card>
	</div>

	<h2 class="text-2xl font-semibold mb-4 mt-8 border-b pb-2">Checkbox</h2>
	<div class="flex items-center space-x-4">
		<Checkbox />
		<Checkbox checked />
		<Checkbox indeterminate />
		<Checkbox disabled />
		<Checkbox color="primary" checked />
		<Checkbox color="secondary" checked />
		<Checkbox size="lg" checked />
	</div>

	<h2 class="text-2xl font-semibold mb-4 mt-8 border-b pb-2">Chip</h2>
	<div class="flex items-center space-x-4">
		<Chip label="Default Chip" />
		<Chip label="Clickable Chip" clickable />
		<Chip label="Deletable Chip" ondelete={() => {}} />
		<Chip label="Primary Chip" color="primary" />
		<Chip label="Outlined Chip" variant="outlined" />
	</div>
</div>
