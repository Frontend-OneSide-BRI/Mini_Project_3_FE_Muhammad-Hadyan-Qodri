import React from 'react'

const Header = () => {
    return (
        <div className='w-screen h-28 bg-red-500 flex items-center justify-around'>
            <h1 className='text-white'>MyMovie</h1>
            <div>
                <input className='px-5' type='text' placeholder='Cari Film Disini'></input>
            </div>
        </div>
    )
}

export default Header