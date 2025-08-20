import { describe, it, expect } from 'vitest';
import { Sidebar } from './index.js';
describe('Sidebar', () => {
	it('should be a function', () => {
		expect(typeof Sidebar).toBe('function');
	});
});
