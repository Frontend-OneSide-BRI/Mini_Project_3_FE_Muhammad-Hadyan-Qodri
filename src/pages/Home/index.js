import React from 'react'
import Header from '../../components/molekuls/Header'
import Card from '../../components/molekuls/Card'
import Category from '../../components/atoms/Category'

const Home = () => {

  return (
    <>
      <div className='bg-gradient-to-r from-black via-slate-800 to-slate-400 ... w-screen h-full'>
        <Header />
        <div className='flex justify-center'>
          <Category />
        </div>
        <div className='px-10 py-10 flex gap-10 flex-wrap justify-center'>
          <Card/>
        </div>
      </div>
    </>
  )
}

export default Home