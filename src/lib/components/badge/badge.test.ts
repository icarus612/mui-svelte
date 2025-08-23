import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Badge from './badge.svelte';
import '@testing-library/jest-dom/vitest';

describe('Badge', () => {
	// Simple Badge tests
	it('should render a simple badge with content', () => {
		const { container } = render(Badge, { props: { badgeContent: 'New' } });
		expect(screen.getByText('New')).toBeInTheDocument();
		expect(container.querySelector('.badge')).toBeInTheDocument();
	});

	it('should apply color classes to a simple badge', () => {
		const { container } = render(Badge, { props: { badgeContent: 'New', color: 'primary' } });
		expect(container.querySelector('.badge')).toHaveClass('badge-primary');
	});

	it('should render nothing when invisible is true for a simple badge', () => {
		const { container } = render(Badge, {
			props: { badgeContent: 'New', invisible: true }
		});
		expect(container.querySelector('.badge')).not.toBeInTheDocument();
	});

	// Indicator (wrapper) Badge tests
	it('should render as an indicator when children are provided', () => {
		const { container } = render(Badge, {
			props: {
				badgeContent: '5',
				children: '<span>Hello</span>'
			}
		});
		expect(container.querySelector('.indicator')).toBeInTheDocument();
		expect(screen.getByText('Hello')).toBeInTheDocument();
		expect(screen.getByText('5')).toBeInTheDocument();
		expect(screen.getByText('5')).toHaveClass('indicator-item');
	});

	it('should apply anchor origin classes correctly', () => {
		const { container } = render(Badge, {
			props: {
				badgeContent: '5',
				children: '<span>Hello</span>',
				anchorOrigin: { vertical: 'bottom', horizontal: 'right' }
			}
		});
		const indicatorItem = container.querySelector('.indicator-item');
		expect(indicatorItem).toHaveClass('indicator-bottom', 'indicator-end');
	});

	it('should handle the max count correctly', () => {
		render(Badge, {
			props: {
				badgeContent: 100,
				max: 99,
				children: '<span>Hello</span>'
			}
		});
		expect(screen.getByText('99+')).toBeInTheDocument();
	});

	it('should show zero when showZero is true and badgeContent is 0', () => {
		render(Badge, {
			props: {
				badgeContent: 0,
				showZero: true,
				children: '<span>Hello</span>'
			}
		});
		expect(screen.getByText('0')).toBeInTheDocument();
	});

	it('should be invisible when invisible is true for an indicator', () => {
		render(Badge, {
			props: {
				badgeContent: '5',
				invisible: true,
				children: '<span>Hello</span>'
			}
		});
		expect(screen.queryByText('5')).not.toBeInTheDocument();
	});

	it('should render a dot when variant is dot', () => {
		const { container } = render(Badge, {
			props: {
				variant: 'dot',
				children: '<span>Hello</span>'
			}
		});
		expect(container.querySelector('.badge')).toHaveClass('badge-xs');
	});
});
