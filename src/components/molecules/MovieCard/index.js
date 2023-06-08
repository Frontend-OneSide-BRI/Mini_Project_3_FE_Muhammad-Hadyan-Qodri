import React from 'react'

const MovieCard = ({ poster, judul, date, rating }) => {

  return (
    <div className='flex-wrap'>
      <div className="max-w-xs rounded-xl overflow-hidden shadow-lg relative">
        <img
          className="w-full h-auto"
          src={`${"https://image.tmdb.org/t/p/w500"}${poster}`}
          alt="..."
        />
        <div className="overlay absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300">
          <div className="px-7 pt-7">
            <a href='/Detail' className='text-white underline decoration-2 decoration-sky-800 hover:decoration-blue-400 font-bold text-lg mb-4'>{judul}</a>
            <h1 className='text-white text-justify tracking-tighter text-lg'>{date}</h1>
            <h1 className='text-white text-justify tracking-tighter text-lg'>{rating}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard;