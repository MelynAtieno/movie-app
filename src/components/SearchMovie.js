import React from 'react';


function SearchMovie (props) {
    function onSearch(e) {
        e.preventDefault();
        fetch("https://api.themoviedb.org/3/movie/550?api_key=b082632c7b887de3dbcf4651f0252347", {
          method: "POST",
        });
        console.log();
        
      }
    
	return (
		<div className="search">
			<input
				className="input"
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder="Enter name of movie..."
			></input>
            <button class="review" onClick={onSearch}><b>REVIEW</b></button>
		</div>
	);
};

export default SearchMovie;