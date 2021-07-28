import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  
    const [movies, setMovies] = useState([
        {
            name: "Zombi Reddy",
            industry: "South",
            year: 2021,
        },
        {
            name: "Avenger: End-game",
            industry: "Hollywood",
            year: 2019,
        },
        {
            name: "URI",
            industry: "Boolywood",
            year: 2018,
        },
    ])
  
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
};