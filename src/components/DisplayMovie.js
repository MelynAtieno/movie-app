import React from 'react'

function DisplayMovie({ movie, closeDisplay}) {
	return (
		<section className="display">
			<div className="content">
				<h2>{ movie.Title } <span>({ movie.Year })</span></h2>
				<p className="rating">Rating: {movie.imdbRating} </p>
				<div className="plot">
					<img src={movie.Poster} alt="post" />
					<p>{movie.Plot}</p>
				</div>
				<button className="close" onClick={closeDisplay}>Close</button>
			</div>
		</section>
	)
}

export default DisplayMovie;