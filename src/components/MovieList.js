import React from 'react';

const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent
    return (
        <>
            {
                props.movie?.map((movie, index) => (
                    <div className="col-8 col-sm-12 col-md-6 col-lg-3 me-3 text-center">
                        <div className="image-container">
                            <img src={movie.Poster} alt={movie.Title} />
                            <div
                                onClick={() => props.handleFavoritesClick(movie)}
                                className="overlay d-flex align-items-center justify-content-center"><FavoriteComponent /></div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default MovieList;