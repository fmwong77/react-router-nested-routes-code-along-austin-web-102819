import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = (movies) => {
	const renderMovies = Object.keys(movies).map((movieID) => (
		<Link key={movieID} to={`/movies/${movies}`}>
			{movieID}
		</Link>
	));

	return <div>{this.renderMovies}</div>;
};

export default MoviesList;
