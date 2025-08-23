import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import AppBar from './app-bar.svelte';
import '@testing-library/jest-dom/vitest';

describe('AppBar', () => {
	it('should render its children', () => {
		render(AppBar, {
			props: {
				children: 'Hello, AppBar!'
			}
		});
		expect(screen.getByText('Hello, AppBar!')).toBeInTheDocument();
	});

	it('should apply color classes correctly', () => {
		const { container } = render(AppBar, { props: { color: 'primary' } });
		expect(container.querySelector('.navbar')).toHaveClass('bg-primary', 'text-primary-content');
	});

	it('should apply variant classes correctly', () => {
		const { container } = render(AppBar, { props: { variant: 'outlined' } });
		expect(container.querySelector('.navbar')).toHaveClass('border');
	});

	it('should apply position style correctly', () => {
		const { container } = render(AppBar, { props: { position: 'fixed' } });
		expect(container.querySelector('.navbar')).toHaveStyle('position: fixed');
	});

	it('should handle the default case', () => {
		const { container } = render(AppBar);
		const navbar = container.querySelector('.navbar');
		expect(navbar).toHaveClass('bg-base-100');
		expect(navbar).toHaveClass('shadow-md');
		expect(navbar).toHaveStyle('position: static');
	});
});
