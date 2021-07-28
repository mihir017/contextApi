import React from 'react';

const Movie = ({movie}) => {
    return (
        <div>
            <h2>{movie.name}</h2>
            <p>Industry: {movie.industry} | Year: {movie.year}</p>
        </div>
    )
}

export default Movie;