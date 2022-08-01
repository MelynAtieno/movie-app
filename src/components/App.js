import React, {useState}from "react";
import axios from "axios"

import MovieList from "./MoviesList";
import SearchMovie from "./SearchMovie";
//import Result from "./Result";
import DisplayMovie from "./DisplayMovie";

function App() {
	const [state, setState] = useState({
	  s: "",
	  results: [],
	  selected: {}
	});
	const apiurl = "https://api.themoviedb.org/3/movie/550?api_key=b082632c7b887de3dbcf4651f0252347";
  
	const search = (e) => {
	  if (e.key === "Enter") {
		axios(apiurl + "&s=" + state.s).then(({ data }) => {
		  let results = data.SearchMovie;
  
		  setState(prevState => {
			return { ...prevState, results: results }
		  })
		});
	  }
	}
	
	const handleInput = (e) => {
		let s = e.target.value;
	
		setState(prevState => {
		  return { ...prevState, s: s }
		});
	  }
	
	  const openDisplay = id => {
		axios(apiurl + "&i=" + id).then(({ data }) => {
		  let result = data;
	
		  console.log(result);
	
		  setState(prevState => {
			return { ...prevState, selected: result }
		  });
		});
	  }

	  
	  const closeDisplay = () => {
		setState(prevState => {
		  return { ...prevState, selected: {} }
		});
	  }
	
	  return (
		<div className="App">
		  <header>
			<h1>Movie Review App</h1>
		  </header>
		  <main>
			<SearchMovie handleInput={handleInput} search={search} />
	
			<MovieList results={state.results} openDisplay={openDisplay} />
	
			{(typeof state.selected.Title != "undefined") ? <DisplayMovie selected={state.selected} closeDisplay={closeDisplay} /> : false}
		  </main>
		</div>
	  );
	}
	


// function App () {
// 	const [movies, setMovies] = useState([]);
// 	const [searchValue, setSearchValue] = useState("");

// 	// const getMovieRequest = async (searchValue) => {
// 	// 	const url = "https://api.themoviedb.org/3/movie/550?api_key=b082632c7b887de3dbcf4651f0252347";

// 	// 	const response = await fetch(url);
// 	// 	const responseJson = await response.json();

// 	// 	if (responseJson.Search) {
// 	// 		setMovies(responseJson.Search);
// 	// 	}
// 	// };

// 	useEffect(() => {
// 		fetch("https://api.themoviedb.org/3/movie/550?api_key=b082632c7b887de3dbcf4651f0252347")
// 		  .then(res => res.json())
// 		  .then(data => setMovies(data))
// 	  }, []);

// 	// useEffect(() => {
// 	// 	getMovieRequest(searchValue);
// 	// }, [searchValue]);

// 	return (
// 		<div className='container-fluid movie-app'>
// 			<div className="rowd">
// 			<SearchMovie searchValue={searchValue} setSearchValue={setSearchValue} />
// 			</div>
// 			<div className='row'>
// 				<MovieList movies={movies} />

// 			</div>
// 		</div>
// 	);
// };

export default App;
