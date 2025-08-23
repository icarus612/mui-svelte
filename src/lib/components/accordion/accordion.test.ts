import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import AccordionTestHelper from './Accordion.test.helper.svelte';
import '@testing-library/jest-dom/vitest';

describe('Accordion', () => {
	it('should render with summary and details', () => {
		render(AccordionTestHelper, {
			props: {
				summaryText: 'Test Summary',
				detailsText: 'Test Details'
			}
		});

		expect(screen.getByText('Test Summary')).toBeInTheDocument();
		expect(screen.getByText('Test Details')).toBeInTheDocument();
	});

	it('should be collapsed by default', () => {
		const { container } = render(AccordionTestHelper, {
			props: {
				summaryText: 'Test Summary',
				detailsText: 'Test Details'
			}
		});
		expect(container.querySelector('.collapse-open')).not.toBeInTheDocument();
	});

	it('should expand when the summary is clicked', async () => {
		const { container } = render(AccordionTestHelper, {
			props: {
				summaryText: 'Test Summary',
				detailsText: 'Test Details'
			}
		});

		const summary = screen.getByText('Test Summary');
		await fireEvent.click(summary);

		expect(container.querySelector('.collapse-open')).toBeInTheDocument();
	});

	it('should be expanded by default when defaultExpanded is true', () => {
		const { container } = render(AccordionTestHelper, {
			props: {
				defaultExpanded: true,
				summaryText: 'Test Summary',
				detailsText: 'Test Details'
			}
		});
		expect(container.querySelector('.collapse-open')).toBeInTheDocument();
	});

	it('should be disabled when disabled prop is true', async () => {
		const { container } = render(AccordionTestHelper, {
			props: {
				disabled: true,
				summaryText: 'Test Summary',
				detailsText: 'Test Details'
			}
		});

		// In the component, the click handler is on the parent div, not the title.
		// Let's click the whole collapse div
		const collapseDiv = container.querySelector('.collapse');
		expect(collapseDiv).not.toBeNull();
		if (collapseDiv) {
			await fireEvent.click(collapseDiv);
		}

		expect(container.querySelector('.collapse-open')).not.toBeInTheDocument();
		expect(container.querySelector('input[type="checkbox"]')).toBeDisabled();
	});

	it('should call onchange handler when toggled', async () => {
		const handleChange = vi.fn();
		render(AccordionTestHelper, {
			props: {
				onchange: handleChange,
				summaryText: 'Test Summary',
				detailsText: 'Test Details'
			}
		});

		const summary = screen.getByText('Test Summary');
		await fireEvent.click(summary);

		expect(handleChange).toHaveBeenCalledTimes(1);
		expect(handleChange).toHaveBeenCalledWith(true);

		await fireEvent.click(summary);
		expect(handleChange).toHaveBeenCalledTimes(2);
		expect(handleChange).toHaveBeenCalledWith(false);
	});

	it('should apply square and disableGutters classes', () => {
		const { container } = render(AccordionTestHelper, {
			props: {
				square: true,
				disableGutters: true,
				summaryText: 'Test Summary',
				detailsText: 'Test Details'
			}
		});
		expect(container.querySelector('.collapse')).not.toHaveClass('rounded-box');
		expect(container.querySelector('.collapse')).toHaveClass('border-0');
	});
});
