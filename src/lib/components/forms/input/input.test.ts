import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Input from './input.svelte';

test('renders input component', () => {
	render(Input, { props: { placeholder: 'test' } });
	expect(screen.getByPlaceholderText('test')).toBeInTheDocument();
});

test('input is disabled when disabled prop is true', () => {
	render(Input, { props: { disabled: true } });
	expect(screen.getByRole('textbox')).toBeDisabled();
});
