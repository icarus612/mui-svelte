import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import BottomNavigation from './bottom-navigation.svelte';
import '@testing-library/jest-dom/vitest';

describe('BottomNavigation', () => {
	it('should render a dock container', () => {
		const { container } = render(BottomNavigation);
		expect(container.querySelector('.dock')).toBeInTheDocument();
	});

	it('should render its children', () => {
		render(BottomNavigation, {
			props: {
				children: '<button>Home</button>'
			}
		});
		expect(screen.getByText('Home')).toBeInTheDocument();
	});

	it('should apply custom classes', () => {
		const { container } = render(BottomNavigation, {
			props: {
				class: 'custom-class'
			}
		});
		expect(container.querySelector('.dock')).toHaveClass('custom-class');
	});
});
