import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import SnackbarQueue from './snackbar-queue.svelte';
import { snackbarQueue, pushAlert } from './snackbar.store.svelte';
import { tick } from 'svelte';
import '@testing-library/jest-dom/vitest';

test('renders snackbar queue container', () => {
	const { container } = render(SnackbarQueue);
	const queueElement = container.querySelector('.fixed.bottom-4.right-4');
	expect(queueElement).toBeInTheDocument();
});

test('pushes and pops alerts', async () => {
	vi.useFakeTimers();
	render(SnackbarQueue);
	expect(snackbarQueue().length).toBe(0);

	pushAlert({ title: 'Test alert', autoHide: 1000 });
	await tick();
	expect(snackbarQueue().length).toBe(1);
	expect(screen.getByText('Test alert')).toBeInTheDocument();

	vi.advanceTimersByTime(1000);
	await tick();
	expect(snackbarQueue().length).toBe(0);
	vi.useRealTimers();
});
