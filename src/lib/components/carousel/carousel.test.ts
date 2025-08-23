import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Carousel from './carousel.svelte';
import '@testing-library/jest-dom/vitest';

test('renders carousel with children', () => {
	render(Carousel, {
		props: {
			children: () => 'Carousel content'
		}
	});

	expect(screen.getByText('Carousel content')).toBeInTheDocument();
});

test('applies snap class', () => {
	const { container } = render(Carousel, {
		props: {
			snap: 'center',
			children: () => 'Carousel content'
		}
	});

	expect(container.firstChild).toHaveClass('carousel-center');
});

test('applies vertical class', () => {
	const { container } = render(Carousel, {
		props: {
			vertical: true,
			children: () => 'Carousel content'
		}
	});

	expect(container.firstChild).toHaveClass('carousel-vertical');
});
