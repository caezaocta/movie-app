import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from './components/MovieList'
import MovieListHeading from './components/MovieListHeading'
import SearchBox from './components/SearchBox'
import './App.css'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=avengers&apikey=9a6a7701`;

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson)
    setMovies(responseJson.Search)
  }

  useEffect(() => {
    getMovieRequest();
  }, [])

  return (
    <div className="container-fluid movie-app ">
      <div className="row mt-2 mb-3 d-flex justify-content-between">
        <MovieListHeading heading='Movies' />
        <SearchBox />
      </div>
      <div className="row g-0">
        <MovieList movie={movies} />
      </div>
    </div>
  );
};

export default App;
