import { expect, test } from 'vitest';
import { render } from '@testing-library/svelte';
import '@testing-library/jest-dom/vitest';
import Icon from './icon.svelte';

test('renders icon component', () => {
	const { getByRole } = render(Icon, { props: { icon: 'academic-cap' } });
	expect(getByRole('img')).toBeInTheDocument();
});
