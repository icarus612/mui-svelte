import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Button from './button.svelte';
import Snippet from '../../stories/Snippet.svelte';

test('renders button with children', () => {
	render(Button, {
		props: {
			children: Snippet
		}
	});

	// There is no easy way to test the content of a snippet,
	// so we just check if the button is rendered.
	expect(screen.getByRole('button')).toBeInTheDocument();
});

test('button is disabled when disabled prop is true', () => {
	render(Button, {
		props: {
			children: Snippet,
			disabled: true
		}
	});

	expect(screen.getByRole('button')).toBeDisabled();
});
