import React, { useEffect, useState } from 'react'
import { getMovieList } from '../../../services/api';


const Card = () => {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        getMovieList().then((result) => {
            setPopularMovies(result)
        })
    }, [])

    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            {popularMovies.map((movie, item) => (
                <div key={item} className='max-w-xs rounded overflow-hidden shadow-lg flex-wrap'>
                    <div className="relative">
                        <img
                            className="w-full h-auto"
                            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
                            alt="Gambar Card"
                        />
                        <div className="absolbg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...ute bottom-0 left-0 w-full h-20 bg-black bg-opacity-50 text-white flex items-center justify-center">
                            {movie.title}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card