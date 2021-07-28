import React, { useContext, useState } from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () => {

    const [name,setName] = useState('');
    const [industry,setIndustry] = useState('');
    const [year,setYear] = useState('');
    const [movies,setMovies] = useContext(MovieContext);

    const onChangeMovie = (e) => {
        setName(e.target.value);
    }
    const onChangeIndustry = (e) => {
        setIndustry(e.target.value);
    }
    const onChangeYear = (e) => {
        setYear(e.target.value);
    }
    const onAddMovie = (e) => {
        e.preventDefault();
        setMovies(prevMovie => [...prevMovie, {name: name, industry: industry, year: year}]);
    }

    return (
        <div onSubmit={onAddMovie}>
            <form>
                <input type="text" value={name} placeholder="Enter Movie name" name="name" onChange={onChangeMovie}/>
                <input type="text" value={industry} placeholder="Enter Movie Industry" name="industry" onChange={onChangeIndustry} />
                <input type="number" value={year} placeholder="Enter release year" name="year" onChange={onChangeYear} />
                <button type="submit">Add Movie</button>
            </form>
        </div>
    )
}

export default AddMovie
