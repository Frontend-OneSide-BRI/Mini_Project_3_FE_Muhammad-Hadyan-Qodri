import React from 'react'

const Login = () => {
    return (
        <div className='flex' >
            <img className='w-full h-screen relative' src='https://img1.hotstarext.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/8579/1498579-h-4dfb0de0e149' alt='...' />
            <div className='w-full h-screen bg-gradient-to-r from-black absolute py-32'>
                <div className='flex justify-center pt-10'>
                    <h1 className='font-bold text-5xl self-end text-white'>Selamat Datang Di myMovie</h1>
                </div>
                <div className='flex justify-center flex-wrap mt-5'>
                    <p className='text-white text-xl font-light'>Tonton di mana pun. Batalkan kapan pun. Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.</p>
                </div>
                <div className='mt-12'>
                    <div className='mt-10 flex justify-center'>
                        <input placeholder='Masukan Email Disini' className='h-10 w-2/4 border-2 border-slate-700 rounded-xl px-3'></input>
                    </div>
                    <div className='mt-10 flex justify-center'>
                        <input placeholder='Masukan Password Disini' className='h-10 w-2/4 border-2 border-slate-700 rounded-xl px-3'></input>
                    </div>
                </div>
                <div className='flex gap-4 justify-center mt-10'>
                    <button className='bg-yellow-500 w-48 mx-3 h-12 rounded-xl'><a href='/Home' className='text-white'>Login</a></button>
                    <button className='bg-yellow-500 w-48 mx-3 h-12 rounded-xl'><a href='/Home' className='text-white'>Register</a></button>
                </div>
            </div>
        </div>
    )
}

export default Login