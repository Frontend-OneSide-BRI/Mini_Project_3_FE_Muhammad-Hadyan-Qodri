import React from 'react'
import { useGetPopularMoviesQuery } from '../../../services/API/movieApi';
import MovieCard from '../../molecules/MovieCard';


const MovieList = () => {
    const { data: movies, error, isLoading } = useGetPopularMoviesQuery();
    console.log(movies)
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong</p>;
    return movies.results.map((item) => {
        return (
            <div>
                <div key={item.id}>
                    <MovieCard poster={item.poster_path} judul={item.title} date={item.release_date} rating={item.vote_average} />
                </div>
            </div>
        )
    })

}

export default MovieList