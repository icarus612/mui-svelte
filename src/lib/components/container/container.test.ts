import { describe, it, expect } from 'vitest';
import { Container } from './index.js';
describe('Container', () => {
	it('should be a function', () => {
		expect(typeof Container).toBe('function');
	});
});
