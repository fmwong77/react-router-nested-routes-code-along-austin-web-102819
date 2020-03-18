// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';

const MoviesPage = ({ match, movies }) => (
	<div>
		{console.log(movies)}
		<h1>Movies List</h1>
		<MoviesList movies={movies} />
	</div>
);

export default MoviesPage;
