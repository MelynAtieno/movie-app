import React,{useEffect, useState} from "react";
import Search from "./Search";
import Result from "./Result";


const apiurl = "https://www.omdbapi.com/?s=batman&apikey=3e79d2e4"

function App() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(null);
	

	useEffect(() => {
		fetch(apiurl)
		  .then(res => res.json())
		  .then(jsonres => {
			setMovies(jsonres.Search);
		  });
	  }, []);

	  const search = searchValue => {
		setLoading(true);
		fetch(
		  searchValue !== ""
			? `http://www.omdbapi.com/?s=${searchValue}&apikey=3e79d2e4`
			: `http://www.omdbapi.com/?s=batman&apikey=3e79d2e4`
		)
		  .then(res => res.json())
		  .then(jsonres => {
			setMovies(jsonres.Search);
			setLoading(false);
		  });
	  };
	  

	  const handleMovies = movies => {
		return loading ? (
		  <span>loading...</span>
		) : movies !== undefined ? (
		  movies.map((movie, index) => <Result key={index} movie={movie} />)
		) : (
		  <span>There is no movie</span>
		);
	  };

	  
	  return (

		<div className="app">
			<h1>Movie Database App</h1>
			<Search search={search} />
		<main>
		  
		  <div className="row">{handleMovies(movies)}</div>
		</main>
		</div>
	  );
	};

export default App;
