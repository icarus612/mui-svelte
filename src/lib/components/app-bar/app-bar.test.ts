import { describe, it, expect } from 'vitest';
import { AppBar } from './index.js';
describe('AppBar', () => {
	it('should be a function', () => {
		expect(typeof AppBar).toBe('function');
	});
});
