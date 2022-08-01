import React from 'react';


// function MovieList(props) {
// 	return (
// 		<>
// 			{props.movies.map((movie, index) => (
// 				<div className='image-container d-flex justify-content-start m-3'>
// 					<img src={movie.Poster} alt='movie'></img>
					
// 				</div>
// 			))}
// 		</>
// 	);
// };



import Result from './Result'

function MovieList ({ results, openPopup }) {
	return (
		<section className="results">
			{results.map(result => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
			))}
		</section>
	)
}



export default MovieList;

