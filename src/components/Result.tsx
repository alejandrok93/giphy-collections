import * as React from 'react';
import { ResultProps } from '../types/result';
import { DragSource } from 'react-dnd';
import { DndTypes } from '../types/DndTypes';
import './styles.css';

//Declare spec function that includes available methods
const resultSource = {
	beginDrag(props: any) {
		console.log('dragging item..');
		return props.item;
	},
	endDrag(props: any, monitor: any, component: React.Component) {
		if (!monitor.didDrop()) {
			return;
		}
		//Get drop target component
		const result = monitor.getDropResult();
		let collection_id;
		if (result) {
			collection_id = result.collection.id;
			console.log(collection_id);
		}
		return props.handleDrop(props.item, collection_id);
	}
};

// Declare function that returns object of the props to inject to component
function collect(connect: any, monitor: any) {
	return {
		connectDragSource: connect.dragSource(),
		connectDragPreview: connect.dragPreview(),
		isDragging: monitor.isDragging()
	};
}
const Result = (props: ResultProps) => {
	const { isDragging, connectDragSource, item } = props;
	let img_url = '';
	const opacity = isDragging ? 0 : 1;

	if (item.images) {
		img_url = item.images.fixed_height.url;
	}

	return connectDragSource(
		<div className="item" style={{ opacity }}>
			<img src={img_url} alt={item.title} />
			{/* <input type="text" value={item.bitly_gif_url} id="gif-url" /> */}
		</div>
	);
};

export default DragSource(DndTypes.RESULT, resultSource, collect)(Result);
