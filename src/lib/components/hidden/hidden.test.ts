import { describe, it, expect } from 'vitest';
import { Hidden } from './index.js';
describe('Hidden', () => {
	it('should be a function', () => {
		expect(typeof Hidden).toBe('function');
	});
});
