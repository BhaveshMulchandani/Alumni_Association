import React, { useState } from 'react'

const Signin = () => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [role, setrole] = useState('')


  const submithandler = (e) => {
    e.preventDefault()
  }
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='border-black border-2 rounded-md w-1/4 flex flex-col items-center justify-center p-5 gap-y-7 shadow-black shadow-sm'>
            <span className='font-semibold text-3xl text-center w-full'>Sign in your account</span>
            <form action="" onSubmit={submithandler} className='flex flex-col items-center justify-center gap-3 w-full'>
                <input type="email" placeholder='Enter your email here...' required className='border-black border-2 rounded-md w-full text-lg' value={email} onChange={(e) => setemail(e.target.value)}/>
                <input type="password" placeholder='Enter your password here...' required className='border-black border-2 rounded-md w-full text-lg' value={password} onChange={(e) => setpassword(e.target.value)}/>
                <select name="" id="" required className='border-black border-2 rounded-md text-lg self-start' value={role} onChange={(e) => setrole(e.target.value)}>
                    <option value="">Select Role</option>
                    <option value="student">College</option>
                    <option value="alumni">Alumni</option>
                </select>
                <input type="submit" className='w-full border-2 rounded-md bg-blue-700 hover:bg-blue-950 text-white text-xl' value='Sign in'/>
            </form>
        </div>
    </div>
  )
}

export default Signin