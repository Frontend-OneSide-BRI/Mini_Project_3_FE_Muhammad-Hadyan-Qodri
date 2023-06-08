import React from 'react'

const Login = () => {
    return (
        <div className='flex' >
            <img className='w-full h-screen relative' src='https://img1.hotstarext.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/8579/1498579-h-4dfb0de0e149' alt='...' />
            <div className='w-full h-screen bg-gradient-to-r from-black absolute py-48'>
                <div className='flex justify-center pt-10'>
                    <h1 className='font-bold text-5xl text-white :text-center :text-sm'>Selamat Datang Di MyMovie</h1>
                </div>
                <div className='flex justify-center flex-wrap mt-5'>
                    <p className='text-white text-xl font-light'>Tonton di mana pun. Batalkan kapan pun. Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.</p>
                </div>
                <a href='/Home'>
                    <div className='flex justify-center mt-10'>
                        <button className='bg-yellow-500 w-2/4 mx-3 h-16 rounded-xl'><p className='text-white font-bold text-lg'>Lets Get Started</p></button>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Login