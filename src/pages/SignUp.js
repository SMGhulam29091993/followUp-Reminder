import React, { useState } from 'react'

const SignUp = () => {
    const [formData,setFormData] = useState({name:"", email:"", contact:"", designation:"", organization:""});

    // the below handleChange function will take the value from form and store in formData
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.id] : e.target.value
        })
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
    }

  return (
    <>
        <div className='mx-auto my-16 border border-gray-900 shadow-zinc-600 shadow-md max-w-xl'>
            <div className='w-full flex flex-col items-center justify-center gap-4 p-3'>
                <h1 className='font-semibold text-lg sm:text-2xl text-orange-300'>Sign Up</h1>
                <form className='w-full text-xs sm:text-lg' onSubmit={handleSubmit}>   
                    <div className='flex items-center flex-wrap gap-4 mb-4'>
                        <label style={{width:"20%"}}>
                         Name 
                        </label>
                        <input type='text' placeholder='Enter your name' value={formData.name} onChange={handleChange} id="name"
                            className='border border-slate-700 rounded p-1 outline-none bg-transparent' style={{width:"70%"}} required/>
                    </div>
                    <div className='flex items-center flex-wrap gap-4 mb-4'>
                        <label  style={{width:"20%"}}>
                            Email 
                        </label>
                        <input type='email' placeholder='Enter your email' value={formData.email} onChange={handleChange} id='email'
                            className='border border-slate-700 rounded p-1 outline-none bg-transparent' style={{width:"70%"}} required/>
                    </div>
                    <div className='flex items-center flex-wrap gap-4 mb-4'>
                        <label style={{width:"20%"}}>
                            Contact Number 
                        </label>
                        <input type='text' placeholder='Enter your contact number' value={formData.contact} onChange={handleChange} id='contact'
                            className='border border-slate-700 rounded p-1 outline-none bg-transparent' style={{width:"70%"}} required />
                    </div>
                    <div className='flex items-center flex-wrap gap-4 mb-4'>
                        <label style={{width:"20%"}}>
                            Designation 
                        </label>
                        <input type='text' placeholder='Enter your designation' value={formData.designation} onChange={handleChange} id='designation'
                            className='border border-slate-700 rounded p-1 outline-none bg-transparent' style={{width:"70%"}} required/>
                    </div>
                    <div className='flex items-center flex-wrap gap-4 mb-4'>
                        <label style={{width:"20%"}}>
                            Organization 
                        </label>
                        <input type='text' placeholder='Enter your organization name' value={formData.organization} onChange={handleChange} id='organization'
                            className='border border-slate-700 rounded p-1 outline-none bg-transparent' style={{width:"70%"}} required/>
                    </div>
                    <button type='submit' className='w-full bg-blue-700 p-3 text-white rounded-lg uppercase hover:opacity-90 disabled:opacity-70'>Sign Up</button>
                </form>
            </div>           
        </div>
    </>
  )
}

export default SignUp