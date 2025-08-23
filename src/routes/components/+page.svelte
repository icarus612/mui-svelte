<script>
	import { Badge, Alert } from '$lib/components/index.js';
</script>

<div class="p-4">
	<h1 class="text-2xl font-bold">Components</h1>

	<h2 class="text-xl font-bold mt-8">Badge</h2>
	<div class="flex gap-4 items-center">
		<Badge badgeContent={5}>
			<span>Badge</span>
		</Badge>
		<Badge badgeContent={100} max={99}>
			<span>Badge</span>
		</Badge>
		<Badge color="primary" badgeContent={10}>
			<span>Badge</span>
		</Badge>
		<Badge color="secondary" variant="dot">
			<span>Badge</span>
		</Badge>
	</div>

	<h2 class="text-xl font-bold mt-8">Alert</h2>
	<div class="flex flex-col gap-4">
		<Alert>
			<span>This is an info alert.</span>
		</Alert>
		<Alert color="success">
			<span>This is a success alert.</span>
		</Alert>
		<Alert color="warning" onclose={() => {}}>
			<span>This is a warning alert.</span>
		</Alert>
		<Alert color="error" variant="outlined">
			<span>This is an error alert.</span>
		</Alert>
	</div>
</div>
