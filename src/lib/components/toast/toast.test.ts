import { describe, it, expect } from 'vitest';
import { Toast } from './index.js';
describe('Toast', () => {
	it('should be a function', () => {
		expect(typeof Toast).toBe('function');
	});
});
