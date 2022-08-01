import React from 'react';

function SearchMovie ({ handleInput, search }) {
	return (
		<div className="searchbox">
			<input 
				type="text" 
				placeholder="Enter name of movie..." 
				className="search" 
				onChange={handleInput}
				onKeyPress={search}
			/>
		</div>
	)
}

export default SearchMovie;