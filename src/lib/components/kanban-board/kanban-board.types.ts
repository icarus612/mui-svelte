export type KanbanCard = {
	id: string;
	[key: string]: any;
};

export type KanbanColumn = {
	id: string;
	title: string;
	cards: KanbanCard[];
};

export type KanbanBoardProps = {
	columns?: KanbanColumn[];
	allowAddCard?: boolean;
	allowEditCard?: boolean;
	allowDeleteCard?: boolean;
	allowAddColumn?: boolean;
	allowEditColumn?: boolean;
	allowDeleteColumn?: boolean;
	columnWidth?: number;
	gap?: number;
	class?: string;
};
