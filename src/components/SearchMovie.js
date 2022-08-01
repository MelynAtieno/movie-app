import React from 'react';

function SearchMovie ({ handleInput, search }) {
	return (
		<div className="searchbox">
			<input 
				type="text" 
				placeholder="Enter name of movie..." 
				className="search" 
				onChange={handleInput}
			/>
			<button onClick={search}>SEARCH</button>
		</div>
	)
}

export default SearchMovie;