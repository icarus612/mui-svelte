export type MarkdownViewerProps = {
	source: string;
	escapeHtml?: boolean;
	skipHtml?: boolean;
	sourcePos?: boolean;
	rawSourcePos?: boolean;
	includeElementIndex?: boolean;
	allowedElements?: string[];
	disallowedElements?: string[];
	allowElement?: (element: any, index: number, parent: any) => boolean;
	unwrapDisallowed?: boolean;
	linkTarget?: string | ((url: string, text: string, title: string) => string);
	transformLinkUri?: (uri: string) => string;
	transformImageUri?: (uri: string) => string;
	remarkPlugins?: any[];
	rehypePlugins?: any[];
	class?: string;
};
