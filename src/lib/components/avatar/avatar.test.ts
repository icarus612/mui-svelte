import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Avatar from './avatar.svelte';
import '@testing-library/jest-dom/vitest';

describe('Avatar', () => {
	it('should render an image avatar when src is provided', () => {
		const { container } = render(Avatar, {
			props: {
				src: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
				alt: 'Test Avatar'
			}
		});

		const img = screen.getByAltText('Test Avatar');
		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute(
			'src',
			'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
		);
		expect(container.querySelector('.avatar')).toBeInTheDocument();
	});

	it('should render a placeholder with text when no src is provided', () => {
		const { container } = render(Avatar, {
			props: {
				children: 'JO'
			}
		});

		expect(screen.getByText('JO')).toBeInTheDocument();
		expect(container.querySelector('.avatar.placeholder')).toBeInTheDocument();
	});

	it('should apply variant classes correctly', () => {
		const { container: containerCircular } = render(Avatar, {
			props: { variant: 'circular' }
		});
		expect(containerCircular.querySelector('.w-24')).toHaveClass('rounded-full');

		const { container: containerRounded } = render(Avatar, {
			props: { variant: 'rounded' }
		});
		expect(containerRounded.querySelector('.w-24')).toHaveClass('rounded-xl');

		const { container: containerSquare } = render(Avatar, {
			props: { variant: 'square' }
		});
		expect(containerSquare.querySelector('.w-24')).not.toHaveClass('rounded-full');
		expect(containerSquare.querySelector('.w-24')).not.toHaveClass('rounded-xl');
	});

	it('should apply custom classes', () => {
		const { container } = render(Avatar, {
			props: {
				class: 'custom-class'
			}
		});
		expect(container.querySelector('.avatar')).toHaveClass('custom-class');
	});
});
