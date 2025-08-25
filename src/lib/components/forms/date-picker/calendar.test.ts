import { describe, it, expect } from 'vitest';
import { Calendar } from './index.js';

describe('Calendar', () => {
	it('should be a function', () => {
		expect(typeof Calendar).toBe('function');
	});
});
