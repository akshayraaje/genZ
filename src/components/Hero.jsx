import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import Picture1 from '../assets/Picture1.png';
import Picture2 from '../assets/Picture2.png';
import Profile from './Profile';


const Hero = () => {
  return (
    <>
        <div className="lg:flex block w-[90vw] m-auto h-auto">
            <div className=" parent font-poppins flex flex-col lg:w-[50vw] mt-5 m-auto ml-5 lg:mt-20">
                <h1 className=" font-poppins lg:text-7xl block  text-2xl">Discover <span className=' font-bold text-black'>Digital Artworks & <br /> Collect</span> Best NFTs</h1>
                <p className=" font-poppins mt-6 text-xl text-slate-500 ">There is enough artworks available online to help you <br /> put together crypto currency website.</p>
                <div className=" mt-7 lg:flex flex justify-start gap-7">
                    <button className=" hover:bg-white hover:text-black duration-300 ease-linear border-2 bg-black text-white p-3 rounded-lg">Explore Now</button>
                    <div className="flex items-center gap-4">
                    <CiPlay1 className=' hover:animate-spin duration-300 ease-in-out  border-2 border-black p-2 cursor-pointer rounded-full text-5xl' />
                    <p className=" hover:bg-black  hover:text-white duration-300 ease-linear hover:p-3 rounded-lg">Watch Video</p>
                    </div>

                </div>
            </div>
            <div className=" font-poppins ">
                <img className='  lg:-mt-[160px] h-[550px] w-[550px]      lg:h-[980px] lg:w-[880px]' src={Picture1} alt="" />
            </div>
        </div>

        <div className=" lg:flex text-center items-center  lg:w-[80vw] lg:gap-20 lg:m-auto mr-2 -mt-4 lg:-mt-[260px]">

            <div className=" lg:flex  lg:flex-col ">
                 <h1 className=' tracking-widest mt-0 font-bold text-3xl  mb-3'>Popular Artwork </h1>
                <img  className=' lg:mt-11 ml-32 mt-8' src={Picture2} alt="" />
            </div>
            <div className=" lg:ml-44 lg:mt-34 flex mb-4 mt-9 lg:flex lg:gap-44">
                <Profile/> 

                <Profile className="invisible"/>
            </div>
        </div>
    </>
  )
}

export default Hero