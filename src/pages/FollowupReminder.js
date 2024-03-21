import React from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const FollowupReminder = () => {
  return (
    <>
        <div className='mx-w-6xl mx-auto flex flex-col md:flex-row'>
            <div className='p-7 border-b-2 md:border-r-2 min-h-screen flex flex-col gap-2' >
                <h1 className='text-center text-md md:text-2xl font-semibold text-orange-700 p-3' >Add Follow-Up</h1>
                <div className='flex flex-col lg:flex-row  gap-2 '>
                    <form className='flex flex-col gap-8'>
                        <div className='flex items-center gap-1'>
                            <label className='whitespace-nowrap font-semibold'>Name : </label>
                            <input type='text' id='name' placeholder='Name of the Client' 
                                className='p-2 w-full border rounded-lg'/>
                        </div>
                        <div className='flex items-center gap-1'>
                            <label className='whitespace-nowrap font-semibold'>Organization : </label>
                            <input type='text' id='organization' placeholder='Organization of the Client' 
                                className='p-2 w-full border rounded-lg'/>
                        </div>
                        <div className='flex items-center gap-1'>
                            <label className='whitespace-nowrap font-semibold'>Designation : </label>
                            <input type='text' id='designation' placeholder='Designation of the Client' 
                                className='p-2 w-full border rounded-lg'/>
                        </div>
                        <div className='flex items-center gap-1'>
                            <label className='whitespace-nowrap font-semibold'>Message : </label>
                            <textarea id='message' placeholder='Message from the Client' 
                                className='p-2 w-full border rounded-lg'/>
                        </div>
                    </form>
                    <Calendar/>
                </div>
                
                <button className='p-3 bg-blue-600 uppercase rounded-lg text-white hover:opacity-90'>Add Follow Up</button>

            </div>
            <div className='flex-1 p-7'>
                <h1 className='text-center text-md sm:text-2xl font-semibold text-orange-700'>List of Follow-Ups</h1>
            </div>
        </div>
    </>
  )
}

export default FollowupReminder