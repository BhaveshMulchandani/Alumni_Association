import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import {Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Job from './pages/Job'
import Profile from './pages/Profile'
import Events from './pages/Events'
import Home from './pages/Home'



const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/job' element={<Job/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/event' element={<Events/>}/>
      </Routes>

      {/* <Navbar/> */}
    
    </>
  )
}

export default App