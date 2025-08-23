import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Card from './card.svelte';
import '@testing-library/jest-dom/vitest';

describe('Card', () => {
	it('should render a card container', () => {
		const { container } = render(Card);
		expect(container.querySelector('.card')).toBeInTheDocument();
	});

	it('should render its children', () => {
		render(Card, {
			props: {
				children: 'Card Content'
			}
		});
		expect(screen.getByText('Card Content')).toBeInTheDocument();
	});

	it('should apply elevation shadow when variant is elevation', () => {
		const { container } = render(Card, { props: { variant: 'elevation' } });
		expect(container.querySelector('.card')).toHaveClass('shadow-sm');
	});

	it('should apply border when variant is outlined', () => {
		const { container } = render(Card, { props: { variant: 'outlined' } });
		expect(container.querySelector('.card')).toHaveClass('card-border');
	});

	it('should apply elevation shadow when raised is true', () => {
		const { container } = render(Card, { props: { raised: true } });
		expect(container.querySelector('.card')).toHaveClass('shadow-xl');
	});

	it('should apply custom classes', () => {
		const { container } = render(Card, {
			props: {
				class: 'custom-class'
			}
		});
		expect(container.querySelector('.card')).toHaveClass('custom-class');
	});
});
