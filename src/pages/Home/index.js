import React from 'react'
import Header from '../../components/Header'
import Card from '../../components/Card'

const Home = () => {
  return (
    <div className='bg-black w-screen h-full'>
      <Header />
      <div className='p-20 flex gap-10 flex-wrap justify-center'>
        <Card />
      </div>
    </div>
  )
}

export default Home