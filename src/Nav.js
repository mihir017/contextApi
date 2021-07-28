import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {

    const [movies] = useContext(MovieContext)

    return (
        <div className="navbar">
            <h3>Movie Detail</h3>
            <p>Total Movies: {movies.length}</p>
        </div>
    )
}

export default Nav;