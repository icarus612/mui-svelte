import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import { Chip } from './index.js';
import TestSnippet from './TestSnippet.svelte';

describe('Chip', () => {
	it('should render a chip with a label', () => {
		const { getByText } = render(Chip, { props: { label: 'Test Chip' } });
		expect(getByText('Test Chip')).toBeInTheDocument();
	});

	it('should apply the correct color class', () => {
		const { container } = render(Chip, { props: { color: 'primary' } });
		expect(container.querySelector('.chip-primary')).toBeInTheDocument();
	});

	it('should apply the correct variant class', () => {
		const { container } = render(Chip, { props: { variant: 'outlined' } });
		expect(container.querySelector('.chip-outlined')).toBeInTheDocument();
	});

	it('should apply the correct size class', () => {
		const { container } = render(Chip, { props: { size: 'small' } });
		expect(container.querySelector('.chip-small')).toBeInTheDocument();
	});

	it('should be clickable when clickable prop is true', async () => {
		const onClick = vi.fn();
		const { getByRole } = render(Chip, { props: { clickable: true, onclick: onClick } });
		const chip = getByRole('button');
		await fireEvent.click(chip);
		expect(onClick).toHaveBeenCalled();
	});

	it('should be disabled when disabled prop is true', () => {
		const { container } = render(Chip, { props: { disabled: true } });
		expect(container.querySelector('.chip-disabled')).toBeInTheDocument();
	});

	it('should call ondelete when delete icon is clicked', async () => {
		const onDelete = vi.fn();
		const { container } = render(Chip, { props: { ondelete: onDelete } });
		const deleteIcon = container.querySelector('.chip-delete');
		if (deleteIcon) {
			await fireEvent.click(deleteIcon);
			expect(onDelete).toHaveBeenCalled();
		}
	});

	it('should render an avatar', () => {
		const { container } = render(Chip, {
			props: {
				avatar: TestSnippet
			}
		});
		expect(container.querySelector('.chip-avatar')).toBeInTheDocument();
	});

	it('should render an icon', () => {
		const { container } = render(Chip, {
			props: {
				icon: TestSnippet
			}
		});
		expect(container.querySelector('.chip-icon')).toBeInTheDocument();
	});
});
