<script lang="ts">
	const {
		stroke = 'white',
		fill = 'none',
		cx = '',
		icon: i = '',
		strokeWidth = '1.5',
		viewBox = '0 0 24 24'
	} = $props();

	let icon = $state<any>(null);
	
	$effect(() => {
		if (i) {
			import(`../icons/${i}.svelte`).then(module => {
				icon = module.default;
			}).catch(err => {
				console.error(`Failed to load icon: ${i}`, err);
			});
		}
	});
</script>

<svg
	{stroke}
	{fill}
	{viewBox}
	class={cx}
	stroke-width={strokeWidth}
	xmlns="http://www.w3.org/2000/svg"
>
	{#if icon}
		{#await Promise.resolve(icon)}
			<span></span>
		{:then Component}
			<Component />
		{/await}
	{/if}
</svg>