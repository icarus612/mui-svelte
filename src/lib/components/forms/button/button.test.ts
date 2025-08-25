import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Button from './button.svelte';
import '@testing-library/jest-dom/vitest';

test('renders button with children', () => {
	render(Button, {
		props: {
			children: 'Click me'
		}
	});

	expect(screen.getByRole('button')).toBeInTheDocument();
	expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('button is disabled when disabled prop is true', () => {
	render(Button, {
		props: {
			children: 'Click me',
			disabled: true
		}
	});

	expect(screen.getByRole('button')).toBeDisabled();
});
