import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import SnackbarQueueTest from './SnackbarQueueTest.svelte';
import { snackbarQueue, pushAlert } from './snackbar.store';
import { tick } from 'svelte';

test('renders snackbar queue', () => {
	render(SnackbarQueueTest);
	expect(screen.getByText('SnackbarQueue Test')).toBeInTheDocument();
});

test('pushes and pops alerts', async () => {
	vi.useFakeTimers();
	expect(snackbarQueue.length).toBe(0);

	pushAlert({ title: 'Test alert', autoHide: 1000 });
	await tick();
	expect(snackbarQueue.length).toBe(1);
	expect(screen.getByText('Test alert')).toBeInTheDocument();

	vi.advanceTimersByTime(1000);
	await tick();
	expect(snackbarQueue.length).toBe(0);
	vi.useRealTimers();
});
