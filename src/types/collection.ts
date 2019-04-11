import { GiphyGifObject } from './giphyApi';

export interface CollectionProps {
	collection: Collection;
	hovered: boolean;
	connectDropTarget: (component: React.ReactNode) => any;
	showItems: (id: number) => any;
	active: boolean;
}

export interface Collection {
	id: number;
	name: string;
	items: Array<GiphyGifObject>;
	active: boolean;
}
