import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import {Routes,Route } from 'react-router-dom'
import Navbar from './componenets/Navbar'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>

      {/* <Navbar/> */}
    
    </>
  )
}

export default App