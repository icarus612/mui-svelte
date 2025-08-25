import { describe, it, expect } from 'vitest';
import { FileUpload } from './index.js';

describe('FileUpload', () => {
	it('should be a function', () => {
		expect(typeof FileUpload).toBe('function');
	});
});
