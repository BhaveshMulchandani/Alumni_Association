import React from 'react'
import Navbar from '../componenets/Navbar'

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <div>
      <h1 className='text-pink-600 flex justify-center mt-5 text-3xl font-semibold'>Welcome Back Bhavesh Mulchandani</h1>

      <div className='flex mt-10 ml-10 mr-10 gap-5'>
        {/* post section */}
      <div className='w-[65%] p-5 overflow-y-auto bg-red-100 flex flex-col'>

        <div className='p-5 rounded-md bg-white shadow-md mb-5'>
        <div className='flex items-center gap-5'>
        <div>
          <img src="https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyTExJYk10UkEwY3x8ZW58MHx8fHx8" alt="profile picture" className=' w-20 h-20 rounded-full object-cover' />
        </div>
        <div>
          <h1 className='font-bold text-xl'>Bhavesh M</h1>
          <h5 className='font-light text-sm'>Software Enginner-Amazone</h5>
        </div>
        </div>

        <div className='mt-5'>
          <p className='text-base leading-relaxed text-justify tracking-tighter'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio libero quibusdam quo ab vel labore officia. Doloremque, inventore? Quo consequuntur sequi, voluptatum laudantium ea, modi quibusdam nulla nostrum, distinctio velit neque ipsa esse! Unde aperiam id omnis molestiae impedit, ipsam amet et molestias ratione reiciendis, beatae, magnam delectus quas sunt?</p>
          <img src="https://plus.unsplash.com/premium_photo-1668487827039-ec0bedd0eb85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlua2VkJTIwaW4lMjBwb3N0fGVufDB8fDB8fHww" alt="post image" className='rounded-md mt-5 w-full'/>
        </div>

        <div>
          <ul className='flex justify-around mt-5'>
            <li className='flex flex-col items-center cursor-pointer'>
            <i className="ri-thumb-up-line text-lg"></i>
            <h1>Like</h1>
            </li>
            <li className='flex flex-col items-center cursor-pointer'>
            <i className="ri-send-plane-fill text-lg"></i>
            <h1>Share</h1>
            </li>
          </ul>
        </div>
        </div>
      </div>

      {/* //chat section */}
      <div className='w-[35%] p-5 border-l overflow-y-auto bg-gray-100'>
        <h1>hdhdhdhdhd</h1>
      </div>
      </div>
      
    </div>
    </>
  )
}

export default Dashboard