import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, theme }) => {
  return (
    <div className="movie-list" style={{ backgroundColor: theme.movieListBackground }}>
      {movies.length > 0 ? (
        movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

export default MovieList;