<script lang="ts">
<<<<<<< HEAD
import type { StepperProps } from './stepper.types';

let { ...props }: StepperProps = $props();
=======
	import type { StepperProps } from './stepper.types.js';
	let {
	activeStep = undefined,
	alternativeLabel = undefined,
	nonLinear = undefined,
	orientation = undefined,
	cx = undefined,
	children: childrenSnippet = undefined,
	connector = undefined
} = $props();
>>>>>>> main
</script>
