import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Dialog from './dialog.svelte';
import DialogTestHelper from './Dialog.test.helper.svelte';
import '@testing-library/jest-dom/vitest';

describe('Dialog', () => {
	it('should not have the open attribute by default', () => {
		const { container } = render(Dialog);
		expect(container.querySelector('dialog')).not.toHaveAttribute('open');
	});

	it('should be visible when open prop is true', () => {
		render(Dialog, { props: { open: true } });
		const dialog = screen.getByRole('dialog');
		expect(dialog).toBeVisible();
	});

	it('should render its children', () => {
		render(Dialog, {
			props: {
				open: true,
				children: 'Dialog Content'
			}
		});
		expect(screen.getByText('Dialog Content')).toBeInTheDocument();
	});

	it('should call onclose when the dialog is closed by changing the open prop', async () => {
		const handleClose = vi.fn();
		const { component } = render(DialogTestHelper, {
			open: true,
			onclose: handleClose
		});

		// To simulate closing, we set the open prop to false
		await component.$set({ open: false });

		// The close event on the dialog is asynchronous
		await new Promise((r) => setTimeout(r, 0));

		expect(handleClose).toHaveBeenCalledTimes(1);
	});

	it('should call onbackdropclick when the backdrop is clicked', async () => {
		const handleBackdropClick = vi.fn();
		render(Dialog, {
			props: {
				open: true,
				onbackdropclick: handleBackdropClick
			}
		});
		await fireEvent.click(screen.getByRole('dialog'));
		expect(handleBackdropClick).toHaveBeenCalledTimes(1);
	});

	it('should not close with escape key when disableEscapeKeyDown is true', async () => {
		const handleCancel = vi.fn();
		render(Dialog, {
			props: {
				open: true,
				disableEscapeKeyDown: true,
				oncancel: handleCancel
			}
		});
		await fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' });
		expect(handleCancel).not.toHaveBeenCalled();
	});
});
