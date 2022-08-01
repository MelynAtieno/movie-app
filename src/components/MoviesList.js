import React from 'react';
import Result from './Result';

function MoviesList ({ results, openDisplayMovie }){
	return (
		<section className="results">
			{results && results.map((result) => { return (
				<Result key={result.imdbID} result={result} openDisplayMovie={openDisplayMovie} />
			)}
			)}
		</section>
	)
}

export default MoviesList;

