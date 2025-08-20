/**
 * A type for Svelte 5 snippets.
 *
 * It's a function that receives some properties, including the children of the snippet,
 * and the parameters passed to the snippet.
 *
 * @template T - The type of the parameters passed to the snippet.
 */
export type Snippet<T extends unknown[] = []> = (
	props: {
		children?: import('svelte').Snippet;
	} & (T extends []
		? {}
		: {
				[K in keyof T]: T[K];
			})
) => import('svelte').Snippet;

/**
 * A type helper for Svelte 5's `$bindable` rune. It's just the identity
 * function, as `$bindable` is a compile-time feature.
 * @template T
 */
export type $bindable<T> = T;
