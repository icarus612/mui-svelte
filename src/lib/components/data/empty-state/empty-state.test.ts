import { describe, it, expect } from 'vitest';
import { EmptyState } from './index.js';

describe('EmptyState', () => {
	it('should be a function', () => {
		expect(typeof EmptyState).toBe('function');
	});
});
