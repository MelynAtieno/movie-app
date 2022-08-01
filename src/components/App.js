import React,{useState} from "react";
import axios from "axios";

import MovieList from "./MoviesList";
import SearchMovie from "./SearchMovie";

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
	




export default App;
