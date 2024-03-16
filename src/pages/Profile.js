import React from 'react';
import { FaPen } from "react-icons/fa";
import { userSelector } from '../redux/user/userSlice';
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';


const Profile = () => {
  const {currentUser} = useSelector(userSelector)
  return (
    <>
      <div className='max-w-6xl my-5 border border-black mx-auto'>
        <div className='profile-container max-w-md border border-red-600 p-2 flex flex-col'>
          <div className='image-name-container p-2 flex gap-4 items-center'>
            <img src="" alt="profileImage" className='h-36 w-36 rounded-full border border-black'/>
            <div className='flex flex-col'>
              <p className='text-lg'>{currentUser?currentUser.name : "NAME"}</p>
              <p className='text-lg'>{currentUser?currentUser.email :"EMAIL"}</p>
              <p className='text-lg'>{currentUser?currentUser.designation: "DESIGNATION"}</p>
              <p className='text-lg'>{currentUser?currentUser.organization : "ORGANIZATION"}</p>
            </div>
          </div> 
          <Link to={`/update-profile/${currentUser._id}`}>
            <p className='flex gap-2 items-center mx-5 bg-orange-400 p-2 rounded-lg justify-center font-semibold text-white'>Update Profile <FaPen/></p>
          </Link>
                  
        </div>        
      </div>
    </>
  )
}

export default Profile