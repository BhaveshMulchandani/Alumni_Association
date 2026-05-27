import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Verify_User from './pages/Verify_User'
import Job from './pages/Job'
import Event from './pages/Event'
import Donate from './pages/Donate'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/verify_user' element={<Verify_User/>}/>
      <Route path='/job' element={<Job/>}/>
      <Route path='/event' element={<Event/>}/>
      <Route path='/donate' element={<Donate/>}/>
    </Routes>
    </>
  )
}

export default App