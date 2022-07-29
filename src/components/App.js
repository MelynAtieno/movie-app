import React, {useEffect, useState}from "react";
import "../index.css";
import MovieList from "./MoviesList";
import SearchMovie from "./SearchMovie";


function App () {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState("");

	// const getMovieRequest = async (searchValue) => {
	// 	const url = "https://api.themoviedb.org/3/movie/550?api_key=b082632c7b887de3dbcf4651f0252347";

	// 	const response = await fetch(url);
	// 	const responseJson = await response.json();

	// 	if (responseJson.Search) {
	// 		setMovies(responseJson.Search);
	// 	}
	// };

	useEffect(() => {
		fetch("https://api.themoviedb.org/3/movie/550?api_key=b082632c7b887de3dbcf4651f0252347")
		  .then(res => res.json())
		  .then(data => setMovies(data))
	  }, []);

	// useEffect(() => {
	// 	getMovieRequest(searchValue);
	// }, [searchValue]);

	return (
		<div className='container-fluid movie-app'>
			<div className="rowd">
			<SearchMovie searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList movies={movies} />

			</div>
		</div>
	);
};

export default App;
