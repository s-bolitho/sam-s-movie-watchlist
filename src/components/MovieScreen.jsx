import React from 'react';
import MovieCard from './MovieCard'

const MovieScreen = ({ addMovie, movieList, watchList, page, setPage, removeMovie }) => {
    const increment = () => setPage(page + 1)
    const decrement = () => setPage(page - 1)

    const movieDisplay = movieList.map((movie, index) => {
        return <MovieCard movie={movie}/>
    });
    
    return (
        <div className="page">
            <h1>Sam's Movie Theater</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className='btn-container'>
                <button onClick={increment}>Next</button>
                <button onClick={page !== 1 && decrement}>Previous</button>
            </div>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    );
}

export default MovieScreen;