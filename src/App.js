import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from './components/MovieList'
import MovieListHeading from './components/MovieListHeading'
import SearchBox from './components/SearchBox'
import AddFavorite from './components/AddFavorite'
import RemoveFavorite from './components/RemoveFavorite'
import './App.css'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([])

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=9a6a7701`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue])

  useEffect(() => {
    const movieFavorites = JSON.parse(localStorage.getItem('react-movie-app-favorites')
    );
    setFavorites(movieFavorites);
  }, [])

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favorites', JSON.stringify(items))
  }

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie]
    setFavorites(newFavoriteList)
    saveToLocalStorage(newFavoriteList)
  }

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID);
    setFavorites(newFavoriteList)
    saveToLocalStorage(newFavoriteList)
  }

  return (
    <div className="container movie-app ">
      <div className="row mt-3 mb-4 d-flex justify-content-between align-items-center">
        <MovieListHeading heading='Movies' />
        <SearchBox value={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movie={movies}
          favoriteComponent={AddFavorite}
          handleFavoritesClick={addFavoriteMovie}
        />
      </div>
      <div className="row mt-5 mb-4 d-flex justify-content-between align-items-center">
        <MovieListHeading heading='Favorites' />
      </div>
      <div className="row">
        <MovieList movie={favorites}
          favoriteComponent={RemoveFavorite}
          handleFavoritesClick={removeFavoriteMovie}
        />
      </div>
    </div>
  );
};

export default App;
