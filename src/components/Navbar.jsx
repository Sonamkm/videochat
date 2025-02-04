import React from 'react'
import logo from '../assets/logo.png'

 const Navbar = () => {
  return (

    <div className='bg-black/90 '>
      <div className='h-[5rem] flex items-center justify-between px-2 md:max-w-[90vw] mx-auto'>
    {/* Left */}
    <div className='flex items-center'>
    <div className='flex w-[4rem] h-[4rem] bg-white rounded-full'>
        <img src={logo} alt='' className='object-cover p-2' />
    </div>
  
    
    <div className='text-white font-bold'>
      <p className='text-[20px] pl-2'>Video Call App</p>
    </div>
    </div>
    {/* Right */}

    <div className=''>
        <ul className='text-white font bold flex items-center gap-4 cursor-pointer'>
          <li>About Us</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
    </div>
</div>
    </div>
  );
};

export default Navbar;
