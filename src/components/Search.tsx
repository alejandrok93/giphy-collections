import * as React from 'react';
import _ from 'lodash';
import { AnyAction } from 'redux';

import './styles.css';

interface SearchProps {
	handleSearch: (input: string) => any;
}

interface SearchState {
	input: string;
}
class Search extends React.Component<SearchProps, SearchState> {
	constructor(props: any) {
		super(props);
		this.state = { input: '' };
	}

	delayedSearch = _.debounce(this.props.handleSearch, 1000);

	handleChange = (e: any) => {
		//Use debounce function to efficiently search as user is typing
		let input = e.target.value;

		this.setState({ ...this.state, input }, () => this.delayedSearch(input));
	};

	onSubmit = (e: any) => {
		e.preventDefault();

		//Call handle search function
		this.props.handleSearch(this.state.input);

		//Clear search box
		this.setState({ input: '' });
	};

	render() {
		return (
			<div className="search">
				<form onSubmit={e => this.onSubmit(e)}>
					<input
						type="text"
						value={this.state.input}
						onChange={e => this.handleChange(e)}
					/>
					<button>Search</button>
				</form>
			</div>
		);
	}
}

export default Search;
