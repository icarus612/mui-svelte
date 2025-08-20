import { describe, it, expect } from 'vitest';
import { Pagination } from './index.js';
describe('Pagination', () => {
	it('should be a function', () => {
		expect(typeof Pagination).toBe('function');
	});
});
