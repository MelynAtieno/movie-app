import React , {useState} from 'react';

function Search ({ search }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = e => {
    e.preventDefault();
    search(searchValue);
  };

  const handleInput = e => {
    setSearchValue(e.target.value);
  };

	

	return (
		<div className="searchbox">
			<input 
				type="text" 
				placeholder="Enter name of movie..." 
				className="search" 
				onChange={handleInput}
				
			/>
			<button
			onClick={handleSearch} value = "Search">SEARCH</button>
			
		</div>
	)
}

export default Search;