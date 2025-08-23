<script lang="ts">
<<<<<<< HEAD
import type { PasswordStrengthIndicatorProps } from './password-strength-indicator.types';

let { ...props }: PasswordStrengthIndicatorProps = $props();
=======
	import type { PasswordStrengthIndicatorProps } from './password-strength-indicator.types.js';

	let {
	password = undefined,
	minLength = undefined,
	requirements = undefined,
	strengthLevels = undefined,
	showStrengthBar = undefined,
	showRequirements = undefined,
	showScore = undefined,
	barHeight = undefined,
	cx = undefined,
	onstrengthchange = undefined
} = $props();
>>>>>>> main
</script>
