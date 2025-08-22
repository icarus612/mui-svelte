import { describe, it, expect } from 'vitest';
import { Card } from './index.js';
describe('Card', () => {
	it('should be a function', () => {
		expect(typeof Card).toBe('function');
	});
});
