import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Checkbox from './checkbox.svelte';
import '@testing-library/jest-dom/vitest';

describe('Checkbox', () => {
	it('should render a checkbox', () => {
		const { container } = render(Checkbox);
		expect(container.querySelector('input[type="checkbox"]')).toBeInTheDocument();
	});

	it('should be checked when the checked prop is true', () => {
		render(Checkbox, { props: { checked: true } });
		expect(screen.getByRole('checkbox')).toBeChecked();
	});

	it('should be disabled when the disabled prop is true', () => {
		render(Checkbox, { props: { disabled: true } });
		expect(screen.getByRole('checkbox')).toBeDisabled();
	});

	it('should be indeterminate when the indeterminate prop is true', () => {
		const { container } = render(Checkbox, { props: { indeterminate: true } });
		const checkbox = container.querySelector('input[type="checkbox"]');
		expect(checkbox).toHaveProperty('indeterminate', true);
	});

	it('should apply color classes correctly', () => {
		const { container } = render(Checkbox, { props: { color: 'primary' } });
		expect(container.querySelector('.checkbox')).toHaveClass('checkbox-primary');
	});

	it('should apply size classes correctly', () => {
		const { container } = render(Checkbox, { props: { size: 'lg' } });
		expect(container.querySelector('.checkbox')).toHaveClass('checkbox-lg');
	});

	it('should call onchange handler when clicked', async () => {
		const handleChange = vi.fn();
		render(Checkbox, {
			props: {
				onchange: handleChange
			}
		});

		const checkbox = screen.getByRole('checkbox');
		await fireEvent.click(checkbox);

		expect(handleChange).toHaveBeenCalledTimes(1);
		expect(handleChange).toHaveBeenCalledWith(true);
	});
});
