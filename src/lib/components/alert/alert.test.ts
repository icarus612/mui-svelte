import { describe, it, expect } from 'vitest';
import { Alert } from './index.js';
describe('Alert', () => {
	it('should be a function', () => {
		expect(typeof Alert).toBe('function');
	});
});
