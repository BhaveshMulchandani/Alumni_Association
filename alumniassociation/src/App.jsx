import React from 'react'
import { Routes, Route } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import College from './pages/College'
import Community from './pages/Community'
import Job from './pages/Job'
import MyAccount from './pages/MyAccount'

const App = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/college' element={<College/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/job' element={<Job/>}/>
          <Route path='/myaccount' element={<MyAccount/>}/>
        </Routes>
    </div>
  )
}

export default App