import React from 'react'
import MovieList from '../../components/organisms/MovieList'
import MovieSearch from '../../components/molecules/MovieSearch';

const Home = () => {

  return (
    <div className='bg-gradient-to-r from-black via-slate-800 to-slate-400 w-full h-full'>
      <MovieSearch />
      <div>
        <h1 className='text-white text-4xl font-bold mx-16'>Film Popular</h1>
      </div>
      <div className='px-9 py-10 flex gap-10 flex-wrap justify-center'>
        <MovieList />
      </div>
    </div>
  )
}

export default Home;