<script lang="ts">
	import type { IconProps } from './icon.types';

	let {
		icon,
		class: cx = '',
		stroke = 'currentColor',
		fill = 'none',
		strokeWidth = '1.5',
		viewBox = '0 0 24 24'
	}: IconProps = $props();

	let iconContent = $state<string | null>(null);

	$effect(() => {
		if (icon) {
			// @ts-expect-error - This is a dynamic import
			import(`../../icons/${icon}.svelte?raw`).then(module => {
				iconContent = module.default;
			}).catch(err => {
				console.error(`Failed to load icon: ${icon}`, err);
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
	role="img"
>
	{@html iconContent}
</svg>