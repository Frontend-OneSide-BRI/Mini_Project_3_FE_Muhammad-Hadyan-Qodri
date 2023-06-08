import React, { useState } from 'react';
import { useSearchQuery } from '../../../services/API/movieApi';
import Input from '../../atoms/Input';
import MovieCard from '../MovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const MovieSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data, error, isLoading } = useSearchQuery(searchTerm);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <div className='w-full h-28 bg-sky-900 flex items-center justify-between px-16'>
                <h1 className='text-white text-4xl font-bold'>MyMovie</h1>
                <form className='flex items-center gap-4'>
                    <Input
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <FontAwesomeIcon icon={faSearch} size="xl" style={{ color: "#e7eaee" }} />
                </form>
            </div>
            <div>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {data && (
                    <div className='px-9 py-10 flex gap-10 flex-wrap justify-center'>
                        {data.results.map((movie) => (
                            <div key={movie.id}>
                                <a href={`/movie/${movie.id}`}>
                                    <MovieCard
                                        judul={movie.title}
                                        poster={movie.poster_path}
                                        date={movie.release_date}
                                        rating={movie.vote_average}
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};

export default MovieSearch;