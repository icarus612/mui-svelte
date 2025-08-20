import fs from 'fs';
import path from 'path';

console.log('Starting FINAL Svelte file correction script...');

const componentsDir = path.join('src', 'lib', 'components');
let correctedCount = 0;

function addDefaultValues(propsString) {
	// Split by comma, but be careful of generics in snippets
	const props = [];
	let buffer = '';
	let angleBracketDepth = 0;
	for (const char of propsString) {
		if (char === '<') angleBracketDepth++;
		if (char === '>') angleBracketDepth--;
		if (char === ',' && angleBracketDepth === 0) {
			props.push(buffer.trim());
			buffer = '';
		} else {
			buffer += char;
		}
	}
	props.push(buffer.trim());

	return props
		.map((prop) => {
			const trimmedProp = prop.trim();
			if (trimmedProp && !trimmedProp.includes('=')) {
				// Special handling for renamed props like `children: childrenSnippet`
				if (trimmedProp.includes(':')) {
					const [key, alias] = trimmedProp.split(':');
					return `${key.trim()}: ${alias.trim()}`;
				}
				return `${trimmedProp} = undefined`;
			}
			return trimmedProp;
		})
		.join(', ');
}

try {
	const componentDirs = fs.readdirSync(componentsDir).filter((f) => {
		const dirPath = path.join(componentsDir, f);
		return fs.statSync(dirPath).isDirectory();
	});

	for (const dir of componentDirs) {
		const svelteFilePath = path.join(componentsDir, dir, `${dir}.svelte`);

		if (fs.existsSync(svelteFilePath)) {
			try {
				let content = fs.readFileSync(svelteFilePath, 'utf-8');
				const originalContent = content;

				const propsRegex = /let \{([\s\S]*?)\} = \$props\(\);/;
				const match = content.match(propsRegex);

				if (match && match[1]) {
					const propsContent = match[1].replace(/\n/g, ' ').replace(/\t/g, '');
					const correctedProps = addDefaultValues(propsContent);
					const finalPropsString = '\n\t' + correctedProps.split(', ').join(',\n\t') + '\n';
					content = content.replace(propsRegex, `let {${finalPropsString}} = $props();`);
				}

				if (content !== originalContent) {
					fs.writeFileSync(svelteFilePath, content);
					console.log(`Corrected: ${svelteFilePath}`);
					correctedCount++;
				}
			} catch (e) {
				console.error(`Failed to process ${svelteFilePath}: ${e.message}`);
			}
		}
	}
} catch (e) {
	console.error(`Error reading components directory: ${e.message}`);
}

console.log(`\nCorrection script finished. Corrected ${correctedCount} files.`);
