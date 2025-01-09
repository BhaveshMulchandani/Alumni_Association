import React from 'react'

const Signup = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='border-black border-2 rounded-md w-1/4 flex flex-col items-center justify-center p-5 gap-y-7 shadow-black shadow-sm'>
            <span className='font-semibold text-3xl text-center w-full'>Create an account</span>
            <div className='flex flex-col items-center justify-center gap-3'>
                <form action="" className='flex flex-col items-center justify-center gap-3 w-full'>
                    <input type="text" placeholder='Enter your name here...' className='border-black border-2 rounded-md w-full text-lg'/>
                    <input type="text" placeholder='Enter your collegename here...' className='border-black border-2 rounded-md w-full'/>
                    <input type="text" placeholder='Enter your department here...' className='border-black border-2 rounded-md w-full'/>
                    <input type="email" placeholder='Enter your email here...' required className='border-black border-2 rounded-md w-full'/>
                    <input type="password" placeholder='Enter your password here...' required className='border-black border-2 rounded-md w-full'/>
                </form>
                <input type="submit" className='w-full border-2 rounded-md bg-blue-700 hover:bg-blue-950 text-white text-lg' value='Signup'/>
            </div>
        </div>
    </div>
  )
}

export default Signup