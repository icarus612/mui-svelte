import { describe, it, expect } from 'vitest';
import { Breadcrumbs } from './index.js';
describe('Breadcrumbs', () => {
	it('should be a function', () => {
		expect(typeof Breadcrumbs).toBe('function');
	});
});
