import {Routes,Route } from 'react-router-dom'
import Student_Dashboard from './pages/Student_Pages/Student_Dashboard'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Job from './pages/Job'
import Profile from './pages/Profile'
import Events from './pages/Events'
import Home from './pages/Home'
import Create_Post from './pages/Create_Post'
import Mentorship from './pages/Mentorship'
import Donation from './pages/Donation'
import Student_Profile from './pages/Student_Pages/Student_Profile'
import Student_job from './pages/Student_Pages/Student_job'
import Student_Post from './pages/Student_Pages/Student_Post'




const App = () => {

  const role = localStorage.getItem("role");
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
        <Route path='/post' element={<Create_Post/>}/>
        <Route path='/mentorship' element={<Mentorship/>}/>
        <Route path='/donate' element={<Donation/>}/>
        <Route path='/student_dashboard' element={<Student_Dashboard/>}/>
        <Route path='/student_profile' element={<Student_Profile/>}/>
        <Route path='/student_job' element={<Student_job/>}/>
        <Route path='/student_Post' element={<Student_Post/>}/>
      </Routes> 
    </>
  )
}

export default App