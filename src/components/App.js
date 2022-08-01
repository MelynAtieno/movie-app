import React,{useState} from "react";
import axios from "axios";
import MoviesList from "./MoviesList";
import SearchMovie from "./SearchMovie";
import DisplayMovie from "./DisplayMovie";


function App() {
	const [state, setState] = useState({
	  s: "",
	  results: [],
	  selected: {}
	});

	

	const apiurl = "http://www.omdbapi.com/?apikey=3e79d2e4"
	
	
  
	const search = (e) => {
	  if (e.key === "Enter") {
		axios.get( apiurl + "&s=" + state.s).then(({ data }) => {
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
	
	  const openDisplayMovie = id => {
		axios.get(apiurl + "&i=" + id).then(({ data }) => {
		  let result = data.SearchMovie;
	
		  console.log(result);
	
		  setState(prevState => {
			return { ...prevState, selected: result }
		  });
		});
	  }

	  
	  const closeDisplayMovie = () => {
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
	
			<MoviesList results={state.results} openDisplayMovie={openDisplayMovie} />
	
			{(typeof state.selected.Title != "undefined") ? <DisplayMovie selected={state.selected} closeDisplayMovie={closeDisplayMovie} /> : false}
		  </main>
		</div>
	  );
	}
	




export default App;
