import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Breadcrumbs from './breadcrumbs.svelte';
import '@testing-library/jest-dom/vitest';

describe('Breadcrumbs', () => {
	it('should render a breadcrumbs container with a ul', () => {
		const { container } = render(Breadcrumbs);
		expect(container.querySelector('.breadcrumbs')).toBeInTheDocument();
		expect(container.querySelector('.breadcrumbs ul')).toBeInTheDocument();
	});

	it('should render its children', () => {
		render(Breadcrumbs, {
			props: {
				children: '<li><a>Home</a></li>'
			}
		});
		expect(screen.getByText('Home')).toBeInTheDocument();
	});

	it('should apply custom classes', () => {
		const { container } = render(Breadcrumbs, {
			props: {
				class: 'custom-class'
			}
		});
		expect(container.querySelector('.breadcrumbs')).toHaveClass('custom-class');
	});

	it('should have a default aria-label', () => {
		render(Breadcrumbs);
		expect(screen.getByLabelText('breadcrumb')).toBeInTheDocument();
	});

	it('should have a custom aria-label', () => {
		render(Breadcrumbs, {
			props: {
				'aria-label': 'custom breadcrumb'
			}
		});
		expect(screen.getByLabelText('custom breadcrumb')).toBeInTheDocument();
	});
});
