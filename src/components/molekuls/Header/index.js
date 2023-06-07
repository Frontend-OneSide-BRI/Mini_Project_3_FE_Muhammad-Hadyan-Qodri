import React from 'react'
import SearchBar from '../../atoms/SearchBar'

const Header = () => {
    return (
        <div className='w-screen h-28 bg-sky-900 flex items-center justify-around'>
            <h1 className='text-white text-4xl font-bold'>MyMovie</h1>
            <div>
                <SearchBar/>
            </div>
        </div>
    )
}

export default Header