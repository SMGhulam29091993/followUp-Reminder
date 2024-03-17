import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateFailure, updateStart, updateSuccess, userSelector } from '../redux/user/userSlice';
import axios from "axios";

const UpdateProfile = () => {
  const {currentUser, loading, error} = useSelector(userSelector)
  const params= useParams();
  const dispatch = useDispatch()
  const userID = params.userID;
  const navigate = useNavigate()
  console.log(userID);
  
  const [formData,setFormData] = useState({});

  const handleChange = (e)=>{
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
  }

  console.log(formData,);


  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      dispatch(updateStart());
      const res = await axios.put(`http://localhost:8000/api/v1/user/update-profile/${userID}`, formData);
      const responseData = res.data;
      console.log(responseData);
      if(!responseData.success){
        dispatch(updateFailure(responseData.message));
        return;
      }
      setTimeout(()=>{
        dispatch(updateSuccess(responseData.user));
        navigate("/profile")
      }, 5000)
      
      
    } catch (error) {
      if(error.response){
        if(error.response){
          console.error("Server Error Response:", error.response.data);
          dispatch(updateFailure(error.response.data.message))
          
      }else if(error.request){
          console.error(`No response received from server ${error.request}`);
          dispatch(updateFailure(error.request))
      }else{
          console.error(`Request setup error : ${error.message}`);
          dispatch(updateFailure(error.message))
      }
      }
    }
  }


  return (
    <>
      <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center text-orange-500 mb-8'>
          Update Profile
        </h1>

        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            
            <input type="text" placeholder='Name' className='rounded-lg border p-3 bg-slate-300' 
                    id="username" defaultValue={currentUser && currentUser.name} onChange={handleChange}  />

            <input type="text" placeholder='Email' className='rounded-lg border p-3 bg-slate-300' 
                    id="email" defaultValue={currentUser && currentUser.email} onChange={handleChange}  />

            <input type="password" placeholder='Password' className='rounded-lg border p-3 bg-slate-300' 
                    id="password"  onChange={handleChange}  />

            <input type="text" placeholder='Contact Number' className='rounded-lg border p-3 bg-slate-300' 
                    id="contact" defaultValue={currentUser && currentUser.contact} onChange={handleChange}  />

            <input type="text" placeholder='Designation' className='rounded-lg border p-3 bg-slate-300' 
                    id="designation" defaultValue={currentUser && currentUser.designation} onChange={handleChange}  />

            <input type="text" placeholder='Organization' className='rounded-lg border p-3 bg-slate-300' 
                    id="organization" defaultValue={currentUser && currentUser.organization} onChange={handleChange}  />

            <button className='rounded-lg bg-blue-700 uppercase p-3 text-white hover:opacity-80 disabled:opacity:60'>
                    {loading?"Updating":"Update"}</button>
        </form>
      </div>
    </>
  )
}

export default UpdateProfile;

