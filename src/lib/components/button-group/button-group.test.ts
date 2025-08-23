import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import ButtonGroup from './button-group.svelte';
import '@testing-library/jest-dom/vitest';

describe('ButtonGroup', () => {
	it('should render a join container', () => {
		const { container } = render(ButtonGroup);
		expect(container.querySelector('.join')).toBeInTheDocument();
	});

	it('should render its children', () => {
		render(ButtonGroup, {
			props: {
				children: '<button>Button 1</button>'
			}
		});
		expect(screen.getByText('Button 1')).toBeInTheDocument();
	});

	it('should apply horizontal orientation by default', () => {
		const { container } = render(ButtonGroup);
		expect(container.querySelector('.join')).not.toHaveClass('join-vertical');
	});

	it('should apply vertical orientation class', () => {
		const { container } = render(ButtonGroup, {
			props: {
				orientation: 'vertical'
			}
		});
		expect(container.querySelector('.join')).toHaveClass('join-vertical');
	});

	it('should apply custom classes', () => {
		const { container } = render(ButtonGroup, {
			props: {
				class: 'custom-class'
			}
		});
		expect(container.querySelector('.join')).toHaveClass('custom-class');
	});
});
