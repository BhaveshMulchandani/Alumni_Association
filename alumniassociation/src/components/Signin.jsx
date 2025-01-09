import React from 'react'

const Signin = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='border-black border-2 rounded-md w-1/4 flex flex-col items-center justify-center p-5 gap-y-7 shadow-black shadow-sm'>
            <span className='font-semibold text-3xl text-center w-full'>Sign in your account</span>
            <form action="" className='flex flex-col items-center justify-center gap-3 w-full'>
                <input type="email" placeholder='Enter your email here...' required className='border-black border-2 rounded-md w-full text-lg'/>
                <input type="password" placeholder='Enter your password here...' required className='border-black border-2 rounded-md w-full text-lg'/>
                <select name="" id="" required className='border-black border-2 rounded-md text-lg self-start'>
                    <option value="">Select Role</option>
                    <option value="student">Student</option>
                    <option value="alumni">Alumni</option>
                </select>
            </form>
            <input type="submit" className='w-full border-2 rounded-md bg-blue-700 hover:bg-blue-950 text-white text-xl' value='Sign in'/>
        </div>
    </div>
  )
}

export default Signin