import React, { useState } from 'react'
import { searchMovie } from '../../../services/api'

const SearchBar = () => {

    const [popularMovies, setPopularMovies] = useState([])

    const search = async (isi) => {
        if (isi.length > 3) {
            const searchFunction = await searchMovie(isi)
            setPopularMovies(searchFunction.results)
        }
    }

    return (
        <div>
            <input onChange={({ target }) => search(target.value)} className='px-3 w-80 h-10 rounded-lg' type='text' placeholder='Cari Film Disini'></input>
        </div>
    )
}

export default SearchBar