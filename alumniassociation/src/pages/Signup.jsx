import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Signup = () => {

  const navigate = useNavigate()

  const [name, setname] = useState('')
  const [collegename, setcollegename] = useState('')
  const [department, setdepartment] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')


const submitHandler = (e) => {
  e.preventDefault()
  navigate('/signin')
}


  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='border-black border-2 rounded-md w-1/4 flex flex-col items-center justify-center p-5 gap-y-7 shadow-black shadow-sm'>
            <span className='font-semibold text-3xl text-center w-full'>Create an account</span>
            <div className='flex flex-col items-center justify-center gap-3'>
                <form action="" onSubmit={
                  submitHandler
                }  className='flex flex-col gap-3 w-full'>
                    <input type="text" placeholder='Enter your name here...' className='border-black border-2 rounded-md w-full text-lg' value={name} onChange={(e) => setname(e.target.value)}/>
                    <input type="text" placeholder='Enter your collegename here...' className='border-black border-2 rounded-md w-full' value={collegename} onChange={(e) => setcollegename(e.target.value)}/>
                    <input type="text" placeholder='Enter your department here...' className='border-black border-2 rounded-md w-full' value={department} onChange={(e) => setdepartment(e.target.value)}/>
                    <input type="email" placeholder='Enter your email here...' required className='border-black border-2 rounded-md w-full' value={email} onChange={(e) => setemail(e.target.value)}/>
                    <input type="password" placeholder='Enter your password here...' required className='border-black border-2 rounded-md w-full' value={password} onChange={(e) => setpassword(e.target.value)}/>
                    <input type="submit" className='w-full border-2 rounded-md bg-blue-700 hover:bg-blue-950 text-white text-lg' value='Signup'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup