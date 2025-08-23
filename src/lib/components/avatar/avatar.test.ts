import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Avatar from './avatar.svelte';
import '@testing-library/jest-dom/vitest';

test('renders image avatar', () => {
	render(Avatar, {
		props: {
			src: 'https://img.daisyui.com/images/profile/demo/2@94.webp',
			alt: 'Image avatar'
		}
	});

	expect(screen.getByAltText('Image avatar')).toBeInTheDocument();
});

test('renders placeholder avatar', () => {
	render(Avatar, {
		props: {
			placeholder: true,
			text: 'AB'
		}
	});

	expect(screen.getByText('AB')).toBeInTheDocument();
});

test('applies shape class', () => {
	const { container } = render(Avatar, {
		props: {
			shape: 'rounded-xl',
			src: 'https://img.daisyui.com/images/profile/demo/2@94.webp'
		}
	});

	expect(container.querySelector('.w-24')).toHaveClass('rounded-xl');
});

test('applies presence class', () => {
	const { container } = render(Avatar, {
		props: {
			presence: 'online',
			src: 'https://img.daisyui.com/images/profile/demo/2@94.webp'
		}
	});

	expect(container.firstChild).toHaveClass('avatar-online');
});

test('applies ring class', () => {
	const { container } = render(Avatar, {
		props: {
			ring: true,
			src: 'https://img.daisyui.com/images/profile/demo/2@94.webp'
		}
	});

	expect(container.querySelector('.w-24')).toHaveClass(
		'ring-primary',
		'ring-offset-base-100',
		'ring',
		'ring-offset-2'
	);
});
