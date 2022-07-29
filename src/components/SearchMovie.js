import React from 'react';

function SearchMovie (props) {
	return (
		<div className="search">
			<input
				className="input"
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder="Enter name of movie..."
			></input>
		</div>
	);
};

export default SearchMovie;