import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import { Alert } from './index.js';
import TestSnippet from './TestSnippet.svelte';

describe('Alert', () => {
	it('should render the alert with default props', () => {
		const { getByRole } = render(Alert);
		expect(getByRole('alert')).toBeInTheDocument();
	});

	it('should render the alert with a child', () => {
		const { getByText } = render(Alert, {
			props: {
				children: TestSnippet
			}
		});
		expect(getByText('Test message')).toBeInTheDocument();
	});

	it('should call the onclose function when the close button is clicked', async () => {
		const onClose = vi.fn();
		const { getByRole } = render(Alert, {
			props: {
				onclose: onClose
			}
		});

		const closeButton = getByRole('button');
		await fireEvent.click(closeButton);

		expect(onClose).toHaveBeenCalled();
	});

	it('should not render the close button if onclose is not provided', () => {
		const { queryByRole } = render(Alert);
		expect(queryByRole('button')).not.toBeInTheDocument();
	});
});
