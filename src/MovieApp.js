import React from 'react';
import axios from 'axios';

import Movie from './Movie';

import './MovieApp.css';

class MovieApp extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // const movies = await axios.get('https://yts.mx/api/v2/list_movies.json');
    // console.log(movies.data.data.movies);

    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
    );
    console.log(movies);
    // this.setState({ movies: movies });
    this.setState({ movies, isLoading: false });
  };

  render() {
    console.log('render');
    const { isLoading, movies } = this.state;
    return (
      <section className='container'>
        {isLoading ? (
          <div className='loader'>
            <span className='loader__text'>Now loading...</span>
          </div>
        ) : (
          <div className='movies'>
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
    // 영화 데이터 로딩!
    this.getMovies();

    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 3000);
  }
}

export default MovieApp;
