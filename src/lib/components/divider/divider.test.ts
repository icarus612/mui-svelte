import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { Divider } from './index.js';
import TestSnippet from './TestSnippet.svelte';

describe('Divider', () => {
	it('should render a divider', () => {
		const { container } = render(Divider);
		expect(container.querySelector('.divider')).toBeInTheDocument();
	});

	it('should render a divider with a specific color', () => {
		const { container } = render(Divider, { props: { color: 'primary' } });
		expect(container.querySelector('.divider-primary')).toBeInTheDocument();
	});

	it('should render a horizontal divider', () => {
		const { container } = render(Divider, { props: { orientation: 'horizontal' } });
		expect(container.querySelector('.divider-horizontal')).toBeInTheDocument();
	});

	it('should render a divider with a specific position', () => {
		const { container } = render(Divider, { props: { position: 'start' } });
		expect(container.querySelector('.divider-start')).toBeInTheDocument();
	});

	it('should render a divider with children', () => {
		const { getByText } = render(Divider, {
			props: {
				children: TestSnippet
			}
		});
		expect(getByText('OR')).toBeInTheDocument();
	});
});
