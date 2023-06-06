import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'

function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path='/Home' element={<Home/>} />
                <Route path='/Login' element={<Login/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router