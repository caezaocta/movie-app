import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movie?.map((movie, index) => (
                <div className="col-8 col-sm-12 col-md-6 col-lg-3">
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
            ))}
        </>
    );
};

export default MovieList;