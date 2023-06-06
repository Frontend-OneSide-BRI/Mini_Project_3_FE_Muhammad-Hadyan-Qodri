import React from 'react'

const Login = () => {
    return (
        <div className='w-full h-screen bg-gray-300 p-32'>
            <div className='flex justify-center pt-10'>
                <h1 className='font-bold text-5xl self-end'>Selamat Datang Di myMovie</h1>
            </div>
            <div className='mt-20'>
                <div className='mt-10 flex justify-center'>
                    <input className='h-10 w-2/6 border-2 border-slate-700 rounded-xl'></input>
                </div>
                <div className='mt-10 flex justify-center'>
                    <input className='h-10 w-2/6 border-2 border-slate-700 rounded-xl'></input>
                </div>
            </div>
            <div className='flex gap-4 justify-center mt-10'>
                <button className='bg-red-500 w-48 mx-3 h-12 rounded-xl'>Login</button>
                <button className='bg-red-500 w-48 mx-3 h-12 rounded-xl'>Login</button>
            </div>
        </div>
    )
}

export default Login