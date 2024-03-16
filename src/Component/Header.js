import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { logOutFailure, logOutStart, logOutSuccess, userSelector } from '../redux/user/userSlice';


const Header = ()=>{
    const {currentUser} = useSelector(userSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = async ()=>{
        try {
            dispatch(logOutStart())
            const res = await axios.get(`http://localhost:8000/api/v1/user/sign-out`);
            const responseData = res.data;
            console.log(responseData);
            if(!responseData.success){
                dispatch(logOutFailure(responseData.message));
                return;
            }
            dispatch(logOutSuccess());
            

            navigate("/sign-in")
        } catch (error) {
            if (error.response){
                console.error("Response Data:", error.response.data);
            }else if(error.request){
                console.error("No response received from server:", error.request);
            }else{
                console.error("Request setup error:", error.message);
            }
        }
    }

  return (
    <>
        <header className=' bg-slate-600 shadow-md shadow-slate-600 '>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-lime-300 italic font-semibold'>followUp</span>
                    <span className='text-amber-500 font-sans '>Reminder</span>
                </h1>
                
                <ul className='flex items-center gap-4 text-white'>
                    <Link to="/">
                        <li className='hidden md:inline font-semibold hover:underline cursor-pointer text-white'>Home</li>
                    </Link>
                    {currentUser?(
                        <>                         
                            <Link>
                                <li className='hidden md:inline font-semibold hover:underline cursor-pointer text-white'>Follow-Ups</li>
                            </Link>
                            <Link to="/profile">
                                <li className='hidden md:inline font-semibold hover:underline cursor-pointer text-white'>{currentUser?currentUser.name.split(" ")[0] : "Profile"}</li>
                            </Link>
                            <li className='hidden md:inline font-semibold hover:underline cursor-pointer text-white' onClick={handleLogOut}>Log-Out</li>
                        </>   
                    ):(
                        <Link to="/sign-in">
                            <li className='hidden md:inline font-semibold hover:underline cursor-pointer text-white'>Sign-in</li>
                        </Link>
                    )}
                    
                    
                </ul>
            </div>
        </header>
        
    </>
  )
}

export default Header