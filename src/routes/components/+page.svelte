<script>
	import { Badge, Alert, Button, Card } from '$lib/components/index.js';
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

	<h2 class="text-xl font-bold mt-8">Button</h2>
	<div class="flex gap-4 items-center">
		<Button>Default</Button>
		<Button variant="primary">Primary</Button>
		<Button variant="secondary" outline>Secondary</Button>
		<Button variant="accent" size="lg">Accent</Button>
		<Button variant="ghost" size="sm">Ghost</Button>
		<Button variant="link" size="xs">Link</Button>
		<Button loading>Loading</Button>
	</div>

	<h2 class="text-xl font-bold mt-8">Card</h2>
	<div class="flex gap-4">
		<Card class="w-96 bg-base-100 shadow-xl">
			<figure>
				<img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</Card>
		<Card class="w-96 bg-base-100 shadow-xl" bordered>
			<figure>
				<img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</Card>
	</div>

	<h2 class="text-xl font-bold mt-8">Chip</h2>
	<div class="flex gap-4 items-center">
		<Chip label="Default" />
		<Chip label="Primary" color="primary" />
		<Chip label="Secondary" color="secondary" variant="outlined" />
		<Chip label="Deletable" ondelete={() => {}} />
	</div>

	<h2 class="text-xl font-bold mt-8">Divider</h2>
	<div class="flex flex-col gap-4">
		<Divider />
		<Divider>OR</Divider>
		<div class="flex w-full">
			<div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
			<Divider orientation="horizontal">OR</Divider>
			<div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
		</div>
	</div>
</div>
