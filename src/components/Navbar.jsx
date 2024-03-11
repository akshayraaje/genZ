import React from 'react'
import logo from '../assets/Logo.png'
import { MdOutlineDownloading } from "react-icons/md";

const Navbar = () => {
  return (
    <>
        <nav className=' font-poppins opacity-90 flex justify-between items-center w-[90vw] m-auto h-[15vh]'>
            <div className="h-auto flex items-center gap-3 cursor-pointer">
                <img className=' rounded-full hover:scale-110 duration-300 ease-linear h-12 w-12 animate-pulse' src={logo} alt="" />
                <h3 className='text-2xl font-extrabold animate-pulse'>NFT's</h3>
            </div>
            <div className="invisible lg:visible ">
                <ul className='lg:flex  lg:justify-center lg:gap-20  lg:-ml-[470px]'>
                    <li className=' cursor-pointer text-slate-500 hover:text-black hover:font-bold ease-in-out duration-300'>Discover</li>
                    <li className=' cursor-pointer text-slate-500 hover:text-black hover:font-bold ease-in-out duration-300'>How it Work</li>
                    <li className=' cursor-pointer font-bold  hover:text-black hover:font-bold ease-in-out duration-300'>Marketplace <span className=' uppercase text-[10px] bg-yellow-500 p-1 rounded-lg'>pro</span></li>
                </ul>
            </div>
            <div className="flex gap-5 lg:gap-9 text-center items-center">
                <button className=" bg-yellow-500 p-2 lg:p-3 rounded-lg font-bold -ml-[20px] hover:bg-white hover:text-black hover:border-2  duration-300 ease-linear">Connet Wallet</button>
                <MdOutlineDownloading className=' lg:text-4xl bg-black text-white p-2 h-10 w-10 lg:h-12 lg:w-12 hover:animate-bounce rounded-lg cursor-pointer hover:bg-white hover:text-black duration-300 ease-linear' />
            </div>
        </nav>
    </>
  )
}

export default Navbar