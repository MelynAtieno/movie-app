import React from "react";

function Result({ movie}) {
	return (
		<div className="result" >
			
			<img src={movie.Poster} alt="poster" />
			<h3>{movie.Title}</h3>
			<h4>Year:{movie.Year}</h4>
			<h4>imdbID: {movie.imdbID}</h4>
		</div>
	)
}

export default Result;