import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Verify_User from './pages/Verify_User'
import Job from './pages/Job'
import Event from './pages/Event'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/verify_user' element={<Verify_User/>}/>
      <Route path='/job' element={<Job/>}/>
      <Route path='/event' element={<Event/>}/>
    </Routes>
    </>
  )
}

export default App