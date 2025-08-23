import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Chip from './chip.svelte';
import '@testing-library/jest-dom/vitest';

describe('Chip', () => {
	it('should render a chip with a label', () => {
		const { container } = render(Chip, { props: { label: 'Test Chip' } });
		expect(screen.getByText('Test Chip')).toBeInTheDocument();
		expect(container.querySelector('.badge')).toBeInTheDocument();
	});

	it('should be clickable when clickable prop is true', async () => {
		const handleClick = vi.fn();
		render(Chip, {
			props: {
				label: 'Test Chip',
				clickable: true,
				onclick: handleClick
			}
		});
		const chip = screen.getByRole('button');
		await fireEvent.click(chip);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('should render a delete icon when ondelete is provided', () => {
		render(Chip, {
			props: {
				label: 'Test Chip',
				ondelete: () => {}
			}
		});
		expect(screen.getByLabelText('delete')).toBeInTheDocument();
	});

	it('should call ondelete when delete icon is clicked', async () => {
		const handleDelete = vi.fn();
		render(Chip, {
			props: {
				label: 'Test Chip',
				ondelete: handleDelete
			}
		});
		const deleteButton = screen.getByLabelText('delete');
		await fireEvent.click(deleteButton);
		expect(handleDelete).toHaveBeenCalledTimes(1);
	});

	it('should apply color and variant classes', () => {
		const { container } = render(Chip, {
			props: {
				label: 'Test Chip',
				color: 'primary',
				variant: 'outlined'
			}
		});
		const chip = container.querySelector('.badge');
		expect(chip).toHaveClass('badge-primary', 'badge-outline');
	});

	it('should be disabled when disabled prop is true', () => {
		render(Chip, {
			props: {
				label: 'Test Chip',
				disabled: true,
				clickable: true
			}
		});
		expect(screen.getByRole('button')).toBeDisabled();
	});
});
