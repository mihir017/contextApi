import React, { useContext } from 'react'
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {

    const [movies] = useContext(MovieContext);

    return (
        <div className="movielist">
            {movies.map(movie => <Movie movie={movie} key={movie.year} /> )}
        </div>
    )
}

export default MovieList
