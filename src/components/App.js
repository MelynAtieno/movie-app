import React from "react";
import "./index.css";
import MovieList from './components/MovieList';


function App () {
	const [movies, setMovies] = useState([]);

	const getMovieRequest = async () => {
		const url = "https://api.themoviedb.org/3/movie/550?api_key=b082632c7b887de3dbcf4651f0252347";

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest();
	}, []);

	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
				<MovieList movies={movies} />
			</div>
		</div>
	);
};

export default App;
