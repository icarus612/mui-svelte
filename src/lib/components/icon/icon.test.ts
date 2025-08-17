import { expect, test } from 'vitest';
import { render } from '@testing-library/svelte';
import Icon from './icon.svelte';

test('renders icon component', () => {
	const { getByRole } = render(Icon, { props: { icon: 'test' } });
	expect(getByRole('img')).toBeInTheDocument();
});
