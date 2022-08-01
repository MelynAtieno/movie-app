import React from "react";

function Result({ result, openDisplayMovie }) {
	return (
		<div className="result" onClick={() => openDisplayMovie(result.imdbID)}>
			<img src={result.Poster} alt="poster" />
			<h3>{result.Title}</h3>
		</div>
	)
}

export default Result;