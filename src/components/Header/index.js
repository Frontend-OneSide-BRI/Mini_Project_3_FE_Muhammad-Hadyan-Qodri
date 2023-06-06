import React from 'react'

const Header = () => {
    return (
        <div className='w-screen h-28 bg-red-500 flex items-center justify-around'>
            <h1 className='text-white text-4xl font-bold'>MyMovie</h1>
            <div>
                <input className='px-3 w-80 h-10 rounded-lg' type='text' placeholder='Cari Film Disini'></input>
            </div>
        </div>
    )
}

export default Header