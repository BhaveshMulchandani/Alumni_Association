import React, { useState } from 'react'
import logo from  '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const navigate = useNavigate()

  return ( 
   
      <div className='min-h-screen'>
          <div className='h-20 w-full bg-pink-900 flex items-center justify-center px-4'>
              <img src={logo} alt="logo" className='h-15 w-auto flex justify-center items-center'/>
          </div>
  
          <div className='mt-6 px-4 text-center'>
              <h1 className='font-bold text-6xl tracking-tight leading-tight'>WELCOME TO <span className=' text-pink-900'>ALUMNI</span> PORTAL</h1>
  
          </div>
  
          <div className='mt-12 px-4 text-center flex flex-col items-center'>
            <form onSubmit={(e)=>{
              e.preventDefault()
  
             
              setemail('')
              setpassword('')

              localStorage.getItem('role') === 'student' ? navigate('/student_dashboard') : navigate('/dashboard')



  
            }} action="" className='w-3/4 mt-8'>
  
              <input 
              type="text" 
              placeholder='Enter email here...' 
              className='rounded-md w-full h-14 border-2 border-black :: hover:border-pink-900 text-3xl px-4 mt-3'
              value={email}
              onChange={(e)=>setemail(e.target.value)}
              />
              
              <input 
              type="password" 
              placeholder='create password' 
              className='rounded-md w-full h-14 border-2 border-black :: hover:border-pink-900 text-3xl px-4 mt-3'
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
              />

              <input 
              type="submit" 
              className='mt-10 bg-pink-900 w-full p-3 text-white :: hover:font-semibold  text-3xl rounded-md' value={"Login"} 
              />

            </form>
          </div>
      </div>
)}

export default Login