import React from 'react'
import Header from '../../components/Header'
import Card from '../../components/Card'
import Category from '../../components/Category'

const Home = () => {
  return (
    <div className='bg-black w-screen h-screen :h-full'>
      <Header />
      <div className='flex justify-center'>
        <Category/>
      </div>
      <div className='px-20 py-10 flex gap-10 flex-wrap justify-center'>
        <Card/>
      </div>
    </div>
  )
}

export default Home