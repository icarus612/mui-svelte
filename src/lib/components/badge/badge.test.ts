import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { Badge } from './index.js';

describe('Badge', () => {
	it('should render the badge with content', () => {
		const { getByText } = render(Badge, { props: { badgeContent: '5' } });
		expect(getByText('5')).toBeInTheDocument();
	});

	it('should not render the badge when invisible is true', () => {
		const { container } = render(Badge, { props: { invisible: true } });
		expect(container.querySelector('.indicator')).not.toBeInTheDocument();
	});

	it('should show a plus sign when badgeContent is greater than max', () => {
		const { getByText } = render(Badge, { props: { badgeContent: 100, max: 99 } });
		expect(getByText('99+')).toBeInTheDocument();
	});

	it('should show zero when badgeContent is 0 and showZero is true', () => {
		const { getByText } = render(Badge, { props: { badgeContent: 0, showZero: true } });
		expect(getByText('0')).toBeInTheDocument();
	});

	it('should not show zero when badgeContent is 0 and showZero is false', () => {
		const { container } = render(Badge, { props: { badgeContent: 0, showZero: false } });
		expect(container.querySelector('.indicator-item')?.textContent).toBe('');
	});
});
