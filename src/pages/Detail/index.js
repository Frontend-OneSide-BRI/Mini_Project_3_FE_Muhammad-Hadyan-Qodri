import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from '../../services/API/movieApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'

const Detail = () => {
  const { movieId } = useParams();
  const { data: movie, isLoading, isError } = useGetMovieByIdQuery(movieId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred</div>;
  }

  if (!movie) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-black via-slate-800 to-slate-400 h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 w-9/12 h-4/5 max-h-screen min-h-fit">
        <a href='/Home'>
          <FontAwesomeIcon icon={faBackward} size="xl" style={{ color: "#000" }} />
        </a>
        <img
          className="w-2/4 h-auto mx-auto rounded-lg shadow-lg"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt="Movie Poster"
        />
        <h1 className="text-3xl font-bold text-gray-800 mt-4">{movie.title}</h1>
        <p className="text-gray-600 mt-2 text-justify">{movie.overview}</p>
        <div className="mt-4 flex items-center">
          <span className="text-gray-800 font-bold">Rating:</span>
          <span className="ml-2 text-gray-600 underline decoration-1">{movie.vote_average}</span>
        </div>
      </div>
    </div>
  );
};

export default Detail;