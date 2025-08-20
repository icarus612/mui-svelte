import { describe, it, expect } from 'vitest';
import { Snackbar } from './index.js';
describe('Snackbar', () => {
	it('should be a function', () => {
		expect(typeof Snackbar).toBe('function');
	});
});
