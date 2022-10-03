import React from 'react';

const MovieCard = ({ movie, addMovie, removeMovie, watchList }) => {
    const inWatchList = watchList.filter((item) => {
        return item.id === movie.id
    })

    const button = inWatchList === 0 ? <button onClick={() => addMovie(movie)}>Add Movie</button> : <button onClick={() => removeMovie(movie)}>Remove</button>
    
    return (
        <div className='movie-card'>
            <div>
                <img src="https://image.tmdb.org/t/p/original${movie.poster_path}"/>
                <h3>{movie.original_title}</h3>
            </div>
            {button}
        </div>
    )
};

export default MovieCard;