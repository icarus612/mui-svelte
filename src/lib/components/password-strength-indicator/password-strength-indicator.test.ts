import { describe, it, expect } from 'vitest';
import { PasswordStrengthIndicator } from './index.js';

describe('PasswordStrengthIndicator', () => {
	it('should be a function', () => {
		expect(typeof PasswordStrengthIndicator).toBe('function');
	});
});
