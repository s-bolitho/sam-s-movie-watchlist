import './App.css';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieScreen from './components/MovieScreen'
import Watchlist from './components/Watchlist';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  const addMovie = (movie) => setWatchList([...watchList, movie])

  const removeMovie = (movie) => {
    const newState = watchList.filter((item) =>{
      return item !== movie;
    });
    setWatchList(newState);
  }

  const getData = () => {
    axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
        .then((res) => {
          console.log(res.data.results);
          setMovieList(res.data.results);
        });
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Header/>
      <main>
        <MovieScreen
        movieList={movieList}
        page={page}
        setPage={setPage}
        watchList={watchList}
        addMovie={addMovie}
        removeMovie={removeMovie} />
        <Watchlist 
        watchList={watchList} 
        removeMovie={removeMovie}/>
      </main>     
    </div>
  );
}

export default App;
