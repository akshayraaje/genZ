import React from 'react'
import pro1 from '../assets/pro1.jpeg'

const Profile = () => {
  return (
    <>
        <div className="flex font-poppins gap-4 items-center">
            <img className=' h-14 w-14 rounded-full invisible lg:visible' src={pro1} alt="" />
            <h3 className=' text-2xl  invisible lg:visible'>Real  NFTs</h3>
        </div>
    </>
  )
}

export default Profile