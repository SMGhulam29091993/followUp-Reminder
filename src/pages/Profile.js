import React from 'react';
import { FaPen } from "react-icons/fa";
import { userSelector } from '../redux/user/userSlice';
import {useSelector} from "react-redux";

const Profile = () => {
  const {currentUser} = useSelector(userSelector)
  return (
    <>
      <div className='max-w-6xl my-5 border border-black mx-auto'>
        <div className='profile-container max-w-md border border-red-600 p-2 flex flex-col'>
          <div className='image-name-container p-2 flex gap-4 items-center'>
            <img src="" alt="profileImage" className='h-36 w-36 rounded-full border border-black'/>
            <div className='flex flex-col'>
              <p className='text-lg'>{currentUser.name}</p>
              <p className='text-lg'>{currentUser.email}</p>
              <p className='text-lg'>{currentUser.designation}</p>
              <p className='text-lg'>{currentUser.organization}</p>
            </div>
          </div>  
          <button type='submit' className='flex gap-2 items-center mx-5 bg-orange-400 p-2 rounded-lg justify-center font-semibold text-white'>Update Profile <FaPen/></button>        
        </div>        
      </div>
    </>
  )
}

export default Profile