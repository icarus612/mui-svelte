import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Card from './card.svelte';
import '@testing-library/jest-dom/vitest';

test('renders card with children', () => {
	render(Card, {
		props: {
			children: () => 'Card content'
		}
	});

	expect(screen.getByText('Card content')).toBeInTheDocument();
});

test('renders with title', () => {
	render(Card, {
		props: {
			title: () => 'Card title',
			children: () => 'Card content'
		}
	});

	expect(screen.getByText('Card title')).toBeInTheDocument();
});

test('renders with actions', () => {
	render(Card, {
		props: {
			actions: () => '<button>Action</button>',
			children: () => 'Card content'
		}
	});

	expect(screen.getByText('Action')).toBeInTheDocument();
});

test('renders with figure', () => {
	render(Card, {
		props: {
			figure: () => '<img src="test.jpg" alt="figure" />',
			children: () => 'Card content'
		}
	});

	expect(screen.getByAltText('figure')).toBeInTheDocument();
});

test('applies bordered class', () => {
	const { container } = render(Card, {
		props: {
			bordered: true,
			children: () => 'Card content'
		}
	});

	expect(container.firstChild).toHaveClass('card-border');
});

test('applies side class', () => {
	const { container } = render(Card, {
		props: {
			side: true,
			children: () => 'Card content'
		}
	});

	expect(container.firstChild).toHaveClass('card-side');
});

test('applies image-full class', () => {
	const { container } = render(Card, {
		props: {
			imageFull: true,
			children: () => 'Card content'
		}
	});

	expect(container.firstChild).toHaveClass('image-full');
});
