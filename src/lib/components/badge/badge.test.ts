import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Badge from './badge.svelte';
import '@testing-library/jest-dom/vitest';

test('renders badge with children', () => {
	render(Badge, {
		props: {
			children: () => 'Badge content'
		}
	});

	expect(screen.getByText('Badge content')).toBeInTheDocument();
});

test('applies variant class', () => {
	const { container } = render(Badge, {
		props: {
			variant: 'outline',
			children: () => 'Badge content'
		}
	});

	expect(container.firstChild).toHaveClass('badge-outline');
});

test('applies color class', () => {
	const { container } = render(Badge, {
		props: {
			color: 'primary',
			children: () => 'Badge content'
		}
	});

	expect(container.firstChild).toHaveClass('badge-primary');
});

test('applies size class', () => {
	const { container } = render(Badge, {
		props: {
			size: 'lg',
			children: () => 'Badge content'
		}
	});

	expect(container.firstChild).toHaveClass('badge-lg');
});

test('applies all classes', () => {
	const { container } = render(Badge, {
		props: {
			variant: 'soft',
			color: 'accent',
			size: 'sm',
			children: () => 'Badge content'
		}
	});

	expect(container.firstChild).toHaveClass('badge-soft', 'badge-accent', 'badge-sm');
});
