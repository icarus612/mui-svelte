export type DiffViewerProps = {
	oldValue: string;
	newValue: string;
	splitView?: boolean;
	showDiffOnly?: boolean;
	useDarkTheme?: boolean;
	compareMethod?:
		| 'diffChars'
		| 'diffWords'
		| 'diffLines'
		| 'diffTrimmedLines'
		| 'diffSentences'
		| 'diffCss'
		| 'diffJson';
	hideLineNumbers?: boolean;
	extraLinesSurroundingDiff?: number;
	disableWordDiff?: boolean;
	leftTitle?: string;
	rightTitle?: string;
	linesOffset?: number;
	class?: string;
};
