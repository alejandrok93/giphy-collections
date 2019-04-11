import { GiphyGifObject } from './giphyApi';
import { any } from 'prop-types';

export interface ResultProps {
	item: GiphyGifObject;
	key: string;
	connectDragSource: (component: React.ReactNode) => any;
	isDragging: boolean;
	handleDrop: (item: GiphyGifObject, collection_id: number) => any;
}
