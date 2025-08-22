import { describe, it, expect } from 'vitest';
import { Rating } from './index.js';

describe('Rating', () => {
	it('should be a function', () => {
		expect(typeof Rating).toBe('function');
	});
});
