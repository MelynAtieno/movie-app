import React from 'react';

function SearchMovie ({ handleInput, search }) {
	return (
		<section className="searchbox">
			<input 
				type="text" 
				placeholder="Enter name of movie..." 
				className="search" 
				onChange={handleInput}
				onKeyPress={search}
			/>
		</section>
	)
}



// function SearchMovie () {
//     const [searchValue, setSearchValue] = useState("");

//     function resetInputField() {
//         setSearchValue("");
//       };
    

//     function search (e, search) {
//         e.preventDefault();
//         search(searchValue);
//         resetInputField();
//       };

//     function onSearch(e) {
//         e.preventDefault();
//         fetch("https://api.themoviedb.org/3/movie/550?api_key=b082632c7b887de3dbcf4651f0252347", {
//           method: "POST",
//         });
//         console.log();
        
//       }
    
// 	return (
// 		<div className="search">
// 			<input
//                 type="text"
				
// 				value={searchValue}
// 				onChange= {search}
// 				placeholder="Enter name of movie..."
// 			></input>
//             <button class="review" onClick={onSearch}><b>SEARCH</b></button>
// 		</div>
// 	);
// };

export default SearchMovie;