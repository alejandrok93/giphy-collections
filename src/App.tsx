import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { DragDropContext, DragSource, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { rhythm, column, gutter, DarkGray, maxAppWidth } from './lib';
import { sofiLogo, reactLogo } from './images';
import { GiphyGifObject } from './types/giphyApi';
import { Collection as CollectionType } from './types/collection';
import axios from 'axios';

const mockResponse = require('./__tests__/mockGiphyApiResponse.json');

//Import Components
import Result from './components/Result';
import Collection from './components/Collection';
import Search from './components/Search';

//Set up API url, ----- need to remove API key and put in .env file -----
const api_key = 'Q0JJDtmMpduHC2isiGcPvMb2vRR3tWZf';

const AppPageContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
	max-width: ${maxAppWidth}px;
	margin-right: auto;
	margin-left: auto;

	// non-prod CSS guardrails
	${() => {
		if (process.env.NODE_ENV !== 'production') {
			/* Accessibility: All imgs must have an alt attribute,
			 * see https://webaim.org/techniques/alttext/
			 */
			return `
      img:not([alt]) {
        border: 5px dashed #c00 !important;
      }
    `;
		} else {
			return ``;
		}
	}};
`;

const AppHeader = styled.header`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: ${DarkGray};
	max-height: ${rhythm(4)}px;

	.react-logo-animation {
		animation: App-logo-spin infinite 20s linear;
		height: ${rhythm(2)}px;
		pointer-events: none;
	}

	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

const Page = styled.div`
	width: 100%;
	min-height: 500px;
	display: flex;
	flex-direction: row;
	@media (max-width: 768px) {
		padding: ${rhythm(1)}px ${gutter}px;
	}
`;

const CollectionsContainer = styled.section`
	width: 20%;
	border: 1px solid gray;
	background-color: #282c34;
`;

const GiphyApp = styled.div`
	width: 80%;
	border: 1px solid gray;
`;

const SearchContainer = styled.div`
	width: 100%;
	min-height: 25px;
	background-color: dimgrey;
`;

const GiphyContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const NewCollection = styled.div`
	display: flex;
	justify-content: flex-start;
	cursor: pointer;

	p {
		color: white;
		margin: 15px 5px 5px 10px;
	}
`;

const EmptyContainer = styled.div`
	font-size: 36px;
	margin: 10% 35%;
	width: 450px;
`;

interface AppState {
	displayItemsInCollection: boolean;
	items: Array<GiphyGifObject>;
	collections: Array<CollectionType>;
}

class App extends React.Component<{}, AppState> {
	constructor(props: any) {
		super(props);
		this.state = {
			displayItemsInCollection: false,
			items: [],
			collections: [
				{ id: 0, name: 'Giphy Collections', items: [], active: false },
				{ id: 1, name: 'Fun', items: [], active: false }
			]
		};
	}

	addItem = (item: GiphyGifObject, collection_id: number) => {
		//Copy previous state collections to new array
		let collections = [...this.state.collections];

		//Access target collection using collection id
		let collection;
		collection = collections.find(
			collection => collection.id === collection_id
		);

		//Add item to collection

		if (collection !== undefined) {
			collection.items.push(item);
		}

		//Update state
		this.setState({ collections });
	};
	handleSearch = (input: string) => {
		//Declare GIPHY Search URL
		let giphy_search_url = `http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=`;

		if (input.length > 0) {
			//Format search query
			input = input.replace(/ /g, '+');
			giphy_search_url = giphy_search_url + input;
			console.log(giphy_search_url);

			axios
				.get(giphy_search_url)
				.then((response: any) => {
					const data = response.data.data;

					//Turn off active state for all collections before setting state with search results
					let collections = [...this.state.collections];
					collections.forEach(collection => (collection.active = false));
					this.setState({ ...this.state, items: data });
				})
				.catch((err: any) => console.log(err));
		}
	};

	addCollection = () => {
		const result = window.prompt('New collection name:');

		if (result !== null) {
			let collections = [...this.state.collections];
			let new_collection = {
				id: this.state.collections.length,
				name: result,
				items: [],
				active: false
			};

			collections.push(new_collection);
			this.setState({ collections });
		}
	};

	showItems = (collection_id: number) => {
		let collections = [...this.state.collections];
		let collection = collections.find(
			collection => collection.id === collection_id
		);
		if (collection) {
			collections.forEach(collection => (collection.active = false));
			let items = collection.items;
			collection.active = !collection.active;

			this.setState({ displayItemsInCollection: true, items, collections });
		}
	};
	render() {
		const empty = this.state.items.length === 0 ? true : false;
		console.log(empty);
		return (
			<AppPageContainer>
				<AppHeader>
					<a href="/">
						<img src={sofiLogo} alt="SoFi logo" />
					</a>
					<img
						src={reactLogo}
						className="react-logo-animation"
						alt="React logo"
					/>
				</AppHeader>
				<Page>
					<CollectionsContainer>
						{this.state.collections.map(collection => (
							<Collection
								showItems={this.showItems}
								key={collection.id}
								collection={collection}
								active={collection.active}
							/>
						))}
						<NewCollection onClick={this.addCollection}>
							<p>+ Add a collection</p>
						</NewCollection>
					</CollectionsContainer>
					<GiphyApp>
						<SearchContainer>
							<Search handleSearch={this.handleSearch} />
						</SearchContainer>
						{empty ? <EmptyContainer>Search for GIFs!</EmptyContainer> : ''}
						<GiphyContainer>
							{this.state.items.map(item => (
								<Result key={item.id} item={item} handleDrop={this.addItem} />
							))}
						</GiphyContainer>
					</GiphyApp>
				</Page>
			</AppPageContainer>
		);
	}
}

export default DragDropContext(HTML5Backend)(App);
