import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Alert from './alert.svelte';
import '@testing-library/jest-dom/vitest';

describe('Alert', () => {
	it('should render its children', () => {
		render(Alert, {
			props: {
				children: 'This is an alert.'
			}
		});
		expect(screen.getByText('This is an alert.')).toBeInTheDocument();
	});

	it('should apply color classes correctly', () => {
		const { container } = render(Alert, { props: { color: 'success' } });
		expect(container.querySelector('.alert')).toHaveClass('alert-success');
	});

	it('should apply variant classes correctly', () => {
		const { container } = render(Alert, { props: { variant: 'outlined' } });
		expect(container.querySelector('.alert')).toHaveClass('alert-outline');
	});

	it('should display a default icon for each color', () => {
		const { container, rerender } = render(Alert, { color: 'info' });
		expect(container.querySelector('svg')).toBeInTheDocument();
		expect(container.querySelector('.stroke-info')).toBeInTheDocument();

		rerender({ color: 'success' });
		expect(container.querySelector('svg')).toBeInTheDocument();

		rerender({ color: 'warning' });
		expect(container.querySelector('svg')).toBeInTheDocument();

		rerender({ color: 'error' });
		expect(container.querySelector('svg')).toBeInTheDocument();
	});

	it('should display a custom icon when provided', () => {
		render(Alert, {
			props: {
				icon: '<svg data-testid="custom-icon"></svg>'
			}
		});
		expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
	});

	it('should call onclose when the close button is clicked', async () => {
		const handleClose = vi.fn();
		render(Alert, {
			props: {
				onclose: handleClose
			}
		});

		const closeButton = screen.getByLabelText('close');
		await fireEvent.click(closeButton);

		expect(handleClose).toHaveBeenCalledTimes(1);
	});

	it('should be removed from the DOM when the close button is clicked', async () => {
		const { container } = render(Alert, { props: { onclose: () => {} } });

		const closeButton = screen.getByLabelText('close');
		await fireEvent.click(closeButton);

		expect(container.querySelector('.alert')).not.toBeInTheDocument();
	});
});
