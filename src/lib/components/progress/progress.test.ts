import { describe, it, expect } from 'vitest';
import { Progress } from './index.js';
describe('Progress', () => {
	it('should be a function', () => {
		expect(typeof Progress).toBe('function');
	});
});
