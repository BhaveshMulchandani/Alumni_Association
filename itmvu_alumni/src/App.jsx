import React from 'react'
import Navbar_student from './componenets/Navbar_student'
// import Signup from './pages/Signup'
// import Login from './pages/Login'
// import {Routes,Route } from 'react-router-dom'
// import Dashboard from './pages/Dashboard'
// import Job from './pages/Job'
// import Profile from './pages/Profile'
// import Events from './pages/Events'
// import Home from './pages/Home'
// import Create_Post from './pages/Create_Post'
// import Mentorship from './pages/Mentorship'
// import Donation from './pages/Donation'



const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/job' element={<Job/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/event' element={<Events/>}/>
        <Route path='/post' element={<Create_Post/>}/>
        <Route path='/mentorship' element={<Mentorship/>}/>
        <Route path='/donate' element={<Donation/>}/>
      </Routes> */}

       <Navbar_student/>
    
    </>
  )
}

export default App