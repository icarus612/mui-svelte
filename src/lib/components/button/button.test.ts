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

test('button has btn-block class when block prop is true', () => {
	render(Button, {
		props: {
			children: 'Click me',
			block: true
		}
	});

	expect(screen.getByRole('button')).toHaveClass('btn-block');
});

test('button has btn-square class when square prop is true', () => {
	render(Button, {
		props: {
			children: 'X',
			square: true
		}
	});

	expect(screen.getByRole('button')).toHaveClass('btn-square');
});

test('button has btn-circle class when circle prop is true', () => {
	render(Button, {
		props: {
			children: 'X',
			circle: true
		}
	});

	expect(screen.getByRole('button')).toHaveClass('btn-circle');
});

test('button has btn-active class when active prop is true', () => {
	render(Button, {
		props: {
			children: 'Click me',
			active: true
		}
	});

	expect(screen.getByRole('button')).toHaveClass('btn-active');
});

test('button has loading spinner when loading prop is true', () => {
	render(Button, {
		props: {
			children: 'Loading',
			loading: true
		}
	});

	expect(screen.getByRole('button').querySelector('.loading')).toBeInTheDocument();
});
