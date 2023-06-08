import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Login from '../pages/Login'

function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>} />
                <Route path='/Login' element={<Login/>} />
                <Route path='/Home' element={<Home/>} />
                <Route path='/movies/:id' element={<Detail/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router