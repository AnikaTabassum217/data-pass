import Image from 'next/image'
import React from 'react'
import logo from '../../../public/assets/images/logo.avif'
import { TbSearch } from "react-icons/tb";
import { BsCart3 } from "react-icons/bs";
import { LuUser } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import ToggleMode from '../ToggleMode';

const Navbar = () => {

  
  return (
   
    <>
    
     <div className=' bg-red-00 grid grid-cols-4 gap-10 p-4'>
        <div className='bg-red-00 flex  justify-end gap-4 cursor-pointer' >
<div>
  <Image  src={logo}
      width={150}
      height={150}
      alt="Picture of the author"></Image>
      </div>
<div>Pages</div>

        </div>
        <div className='col-span-2 bg-red-00'>
            <div>
            <label className="relative block">
  <span className="sr-only">Search</span>
  <span className="absolute inset-y-0 right-6 flex items-center pr-2 h-10 mt-0.5 w-10  text-white bg-black rounded-full">
  <TbSearch className='h-10 w-10 ml-2 cursor-pointer' />
  </span>
  <input className=" placeholder:text-slate-400 block bg-slate-200 w-full border border-slate-300 rounded-full py-3 mt-[-0.5rem] pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
</label>
            </div>
        </div>
        <div className='flex justify-start gap-4 cursor-pointer'>
        <div className=''>
        {/* <MdOutlineWbSunny size={24} />
        <FaRegMoon /> */}
         <div><ToggleMode ></ToggleMode></div>
        </div>
        <div><BsCart3 size={24} /></div>
        <div><LuUser size={24}/></div>
       
        </div>
     </div>
  
    </>
  )
}

export default Navbar





