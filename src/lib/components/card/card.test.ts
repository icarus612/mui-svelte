import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { Card } from './index.js';
import TestSnippet from './TestSnippet.svelte';

describe('Card', () => {
	it('should render a card', () => {
		const { container } = render(Card, {
			props: {
				children: TestSnippet
			}
		});
		expect(container.querySelector('.card')).toBeInTheDocument();
	});

	it('should render a bordered card', () => {
		const { container } = render(Card, {
			props: {
				bordered: true,
				children: TestSnippet
			}
		});
		expect(container.querySelector('.card-bordered')).toBeInTheDocument();
	});

	it('should render a card with a full image', () => {
		const { container } = render(Card, {
			props: {
				imageFull: true,
				children: TestSnippet
			}
		});
		expect(container.querySelector('.image-full')).toBeInTheDocument();
	});

	it('should render a card with a side image', () => {
		const { container } = render(Card, {
			props: {
				side: true,
				children: TestSnippet
			}
		});
		expect(container.querySelector('.card-side')).toBeInTheDocument();
	});

	it('should render a card with a specific size', () => {
		const { container } = render(Card, {
			props: {
				size: 'lg',
				children: TestSnippet
			}
		});
		expect(container.querySelector('.card-lg')).toBeInTheDocument();
	});
});
