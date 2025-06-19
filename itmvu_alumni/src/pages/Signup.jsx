import React from 'react'
import logo from  '../assets/logo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = () => {


  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [passingyear, setpassingyear] = useState('')
  const [stream, setstream] = useState('')
  const [password, setpassword] = useState('')
  const [role, setrole] = useState('student')

  const navigate = useNavigate()

  return (
    <>
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

            setname('')
            setemail('')
            setpassingyear('')
            setstream('')
            setpassword('')

            localStorage.setItem('role',role)

            navigate('/login')

          }} action="" className='w-3/4 mt-8'>

            <input 
            type="text" 
            placeholder='Enter name here...' 
            className='rounded-md w-full h-14 border-2 border-black :: hover:border-pink-900 text-3xl px-4'
            value={name}
            onChange={(e)=>setname(e.target.value)}

            />
            
            <input 
            type="text" 
            placeholder='Enter email here...' 
            className='rounded-md w-full h-14 border-2 border-black :: hover:border-pink-900 text-3xl px-4 mt-3'
            value={email}
            onChange={(e)=>setemail(e.target.value)}

            />
            <input 
            type="text" 
            placeholder='Enter passingyear here...' 
            className='rounded-md w-full h-14 border-2 border-black :: hover:border-pink-900 text-3xl px-4 mt-3'
            value={passingyear}
            onChange={(e)=>setpassingyear(e.target.value)}
            />
            <input 
            type="text" 
            placeholder='Enter stream here...' 
            className='rounded-md w-full h-14 border-2 border-black :: hover:border-pink-900 text-3xl px-4 mt-3'
            value={stream}
            onChange={(e)=>setstream(e.target.value)}
            />
            <input 
            type="password" 
            placeholder='create password' 
            className='rounded-md w-full h-14 border-2 border-black :: hover:border-pink-900 text-3xl px-4 mt-3'
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            />

            <select name="role" value={role} onChange={(e)=>setrole(e.target.value)}   className='rounded-md w-full h-14 border-2 border-black hover:border-pink-900 text-3xl px-4 mt-3'>
              <option value="alumni">alumni</option>
              <option value="student">student</option>
            </select>

            <input 
            type="submit" 
            className='mt-10 bg-pink-900 w-full p-3 text-white :: hover:font-semibold  text-3xl rounded-md' value={"Register"} 
            />
          </form>
        </div>
    </div>
    </>
  )
}

export default Signup