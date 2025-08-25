import { describe, it, expect } from 'vitest';
import { CommandPalette } from './index.js';
describe('CommandPalette', () => {
	it('should be a function', () => {
		expect(typeof CommandPalette).toBe('function');
	});
});
