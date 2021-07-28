import React from 'react';
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import AddMovie from './AddMovie';
import { MovieProvider } from './MovieContext';

function App() {

  return (
    <MovieProvider className="App">
      <Nav />
      <AddMovie />
      <MovieList />
    </MovieProvider>
  );
}

export default App;
