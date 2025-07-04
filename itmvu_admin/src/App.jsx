import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Verify_User from './pages/Verify_User'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/verify_user' element={<Verify_User/>}/>

    </Routes>
    </>
  )
}

export default App