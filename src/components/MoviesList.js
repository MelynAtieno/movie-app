import React from 'react';
import Result from './Result';

function MovieList ({ results, openDisplayMovie }) {
	return (
		<section className="results">
			{results.map(result => (
				<Result key={result.imdbID} result={result} openDisplayMovie={openDisplayMovie} />
			))}
		</section>
	)
}

export default MovieList;

