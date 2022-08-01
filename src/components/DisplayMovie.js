import React from 'react'

function DisplayMovie({ selected, closeDisplayMovie }) {
	return (
		<section className="display">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating">Rating: {selected.imdbRating}</p>
				<div className="plot">
					<img src={selected.Poster} alt="post" />
					<p>{selected.Plot}</p>
				</div>
				<button className="close" onClick={closeDisplayMovie}>Close</button>
			</div>
		</section>
	)
}

export default DisplayMovie;