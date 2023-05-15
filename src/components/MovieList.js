import styled from 'styled-components'

const OverlayText = styled.div`
    color: white;
`

const MovieList = (props) => {
	const FavoriteComponent = props.favoriteComponent
	return (
		<>
			{props.movies?.map((movie, index) => (
				<div key={movie.imdbID} className="col-8 col-sm-12 col-md-6 col-lg-3 me-3 text-center image-container">
					<img src={movie.Poster} alt={movie.Title} />

					<button className="overlay d-flex align-items-center justify-content-center"
						onClick={() => props.handleFavoritesClick(movie)}
					><FavoriteComponent />
					</button>

					<OverlayText>
					</OverlayText>
				</div>
			))}
		</>
	);
};

export default MovieList;