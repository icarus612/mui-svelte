import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Alert from './alert.svelte';
import '@testing-library/jest-dom/vitest';

test('renders alert with children', () => {
	render(Alert, {
		props: {
			children: () => 'Alert content'
		}
	});

	expect(screen.getByText('Alert content')).toBeInTheDocument();
});

test('applies variant class', () => {
	const { container } = render(Alert, {
		props: {
			variant: 'outline',
			children: () => 'Alert content'
		}
	});

	expect(container.firstChild).toHaveClass('alert-outline');
});

test('applies color class', () => {
	const { container } = render(Alert, {
		props: {
			color: 'success',
			children: () => 'Alert content'
		}
	});

	expect(container.firstChild).toHaveClass('alert-success');
});

test('applies direction class', () => {
	const { container } = render(Alert, {
		props: {
			direction: 'vertical',
			children: () => 'Alert content'
		}
	});

	expect(container.firstChild).toHaveClass('alert-vertical');
});

test('renders icon slot', () => {
	render(Alert, {
		props: {
			children: () => 'Alert content',
			icon: () => '<svg data-testid="icon"></svg>'
		}
	});

	expect(screen.getByTestId('icon')).toBeInTheDocument();
});
