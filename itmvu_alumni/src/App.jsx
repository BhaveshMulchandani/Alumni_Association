import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import {Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>

    
    </>
  )
}

export default App