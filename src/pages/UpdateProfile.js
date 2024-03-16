import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { userSelector } from '../redux/user/userSlice';

const UpdateProfile = () => {
  const {currentUser} = useSelector(userSelector)
  const params= useParams();
  const userID = params.userID;
  const fileRef = useRef(null);
  const [file,setFile] = useState(null)
  const [formData,setFormData] = useState({name : "",email : "", contact : "", designation : "", organization : "", imageURL: ""});

  const handleChange = (e)=>{
    if (e.target.id === "image") {
      setFile(e.target.files[0]);
      setFormData({
        ...formData,
        imageURL: file, 
      });
    } else {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }

  }
  console.log(formData,);
  const handleSubmit = ()=>{

  }

  const handleDeleteImage = ()=>{

  }

  return (
    <>
      <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center text-orange-500 mb-8'>
          Update Profile
        </h1>

        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <input type="file" accept='image/*' id="image" ref={fileRef} hidden onClick={(e)=>e.stopPropagation()} onChange={handleChange}/>
            <img src="" alt="profileImage" className='h-36 w-36 rounded-full border border-black cursor-pointer self-center' onClick={()=>fileRef.current.click()}/>
            <input type="text" placeholder='Name' className='rounded-lg border p-3 bg-slate-300' 
                    id="username" defaultValue={currentUser && currentUser.name} onChange={handleChange}  />

            <input type="text" placeholder='Email' className='rounded-lg border p-3 bg-slate-300' 
                    id="email" defaultValue={currentUser && currentUser.email} onChange={handleChange}  />

            <input type="text" placeholder='Contact Number' className='rounded-lg border p-3 bg-slate-300' 
                    id="contact" defaultValue={currentUser && currentUser.contact} onChange={handleChange}  />

            <input type="text" placeholder='Designation' className='rounded-lg border p-3 bg-slate-300' 
                    id="designation" defaultValue={currentUser && currentUser.designation} onChange={handleChange}  />

            <input type="text" placeholder='Organization' className='rounded-lg border p-3 bg-slate-300' 
                    id="organization" defaultValue={currentUser && currentUser.organization} onChange={handleChange}  />

            <button className='rounded-lg bg-blue-700 uppercase p-3 text-white hover:opacity-80 disabled:opacity:60'>
                    Update</button>
            <button className='rounded-lg max-w-lg bg-red-700 uppercase p-3 text-white hover:opacity-80 disabled:opacity:60' onClick={handleDeleteImage}>
                    Delete Image</button>
        </form>
      </div>
    </>
  )
}

export default UpdateProfile;

