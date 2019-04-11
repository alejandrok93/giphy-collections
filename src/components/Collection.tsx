import * as React from 'react';
import { CollectionProps } from '../types/collection';
import { DropTarget } from 'react-dnd';
import { DndTypes } from '../types/DndTypes';

import './styles.css';

//Declare spec object with allowed methods
const collectionSpec = {
	drop(props: any, monitor: any, component: React.Component) {
		const collection = props.collection;
		return { collection };
	}
};

//Declare collect funtion that returns object with props to inject to component
function collect(connect: any, monitor: any) {
	return {
		connectDropTarget: connect.dropTarget(),
		hovered: monitor.isOver(),
		item: monitor.getItem()
	};
}

const Collection = (props: CollectionProps) => {
	const { connectDropTarget, hovered, collection, active } = props;
	const items = props.collection.items || [];
	const name = props.collection.name;
	let backGroundColor = active ? 'deepskyblue' : '#282c34';

	if (hovered) {
		backGroundColor = hovered ? 'lightcyan' : '#282c34';
	}
	const number_of_items = items.length;

	console.log(props);

	return connectDropTarget(
		<div
			onClick={e => {
				props.showItems(collection.id);
			}}
			className="collection"
			style={{ color: 'white', background: backGroundColor }}
		>
			<p className="collection-name">{name}</p>
			<span className="number-of-items">{number_of_items}</span>
		</div>
	);
};

export default DropTarget(DndTypes.RESULT, collectionSpec, collect)(Collection);
