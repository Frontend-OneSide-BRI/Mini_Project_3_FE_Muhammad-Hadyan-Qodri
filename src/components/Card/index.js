import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Card = () => {
    return (
        <div className='bg-white w-64 h-1/5 rounded-3xl flex-wrap'>
            <img className='h-72 w-64 rounded-t-3xl' src='https://images.unsplash.com/photo-1495954380655-01609180eda3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' alt='' />
            <div className='mx-5 mt-2'>
                <div>
                    <h1 className='font-bold text-lg'>Iron Man</h1>
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-light fa-star" />
                </div>
                <div>
                    <p className='text-sm'>Film Iron Man dirilis oleh Marvel Studio</p>
                </div>
                <div className='flex justify-end mr-4 my-6'>
                    <a href='/Detail' className='underline decoration-pink-500 text-sm font-semibold'>Lihat</a>
                </div>
            </div>
        </div>
    )
}

export default Card