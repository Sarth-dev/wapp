/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Mid() {
  
  return (
    <>
    
    <div id='mid' className='w-full absolute h-[50vh] z-0 bg-[#00A884]'>
        <div id='diii' className=' w-full h-[155vh]'>
        <div id='di' className='w-2/3 h-[140vh] ml-52 mt-32 bg-white '>
        <h1 className='text-3xl px-7 py-3 font-light text-start text-black'>Use Whatsapp on your computer</h1>
        <ul className='px-7 mt-5'>
          <li className='text-lg mt-3 text-black font-normal'>1. Open Whatsapp on your phone</li>
          <li className='text-lg mt-3 text-black font-normal'>2. Tap <span className='font-semibold'>Menu</span> on Android , or <span className='font-semibold'>Settings</span> on iPhone </li>
          <li className='text-lg mt-3 text-black font-normal'>3. Tap <span className='font-semibold'>Linked devices</span> and then <span className='font-semibold'>Link a device</span> </li>
          <li className='text-lg mt-3 text-black font-normal'>4. Point your phone at this screen  to capture the QR code</li>
        </ul>

        <hr className='mt-6 w-[90%] ml-7' />
        <div className='px-7 mt-7'>
        <h4 className='text-[#00A884] font-semibold'>Link with phone number</h4>
        </div>
        <div id='tutorial' className='bg-[#F9F9FA]  w-full mt-24 '>
        <h2 className='text-center font-light text-3xl mt-5' >Tutorial</h2>
        <p className='text-center font-normal text-[#00A884] mt-4'><a href="#">Need help to get Started ?</a></p>
        <div id="vid" className='px-32 py-9 '>
          <video src="./Images and videos/Tutorial start.mp4" controls></video>
        </div>
        </div>
        </div>
        </div>
    </div>
    
    </>
  )
}

export default Mid;
