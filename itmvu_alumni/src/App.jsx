import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import {Routes,Route } from 'react-router-dom'
import Navbar from './componenets/Navbar'
import Dashboard from './pages/Dashboard'
import Job from './pages/Job'
import College from './pages/College'
import Profile from './pages/Profile'



const App = () => {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/job' element={<Job/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/college' element={<College/>}/>
      </Routes>

      {/* <Navbar/> */}
    
    </>
  )
}

export default App