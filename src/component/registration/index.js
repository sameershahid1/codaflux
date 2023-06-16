import { Link, useNavigate } from 'react-router-dom'
import React from 'react'

import Logo from '../../assets/images/logo.png';

import './index.css'

const Registration = () => {
    const navigate = useNavigate();
    const signupHandler = (e) => {
        navigate('/otp-code');
    }

    return (
        <div className='flex items-center justify-center custom-width-1'>
            <div className='flex flex-col justify-start gap-6 mt-36 w-96 custom-width-1 custom-margin-top-1' >
                < img className='w-36' src={Logo} alt='logo' />
                <div className='flex flex-col gap-3 custom-width-1'>
                    <h2 className='text-3xl text-[30px] text-[#101828] font-semibold'>Create your account</h2>
                    <p className='text-gray-500'>Welcome back! Please enter your details</p>
                </div>
                <form className='flex flex-col gap-3 custom-width-1'>
                    <div className='flex flex-col gap-1'>
                        <label className='font-medium text-[14px] text-gray-700' htmlFor='name'>Name</label>
                        <input className='h-12 text-[18px] border-[1px] border-gray-300 rounded-lg outline-none ps-3 light-shadow' type='text' id='name' name='name' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='font-medium text-[14px] text-gray-700' htmlFor='company'>Your Company</label>
                        <input className='h-12 text-[18px] border-[1px] border-gray-300 rounded-lg outline-none ps-3 light-shadow' type='text' id='company' name='company' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='font-medium text-[14px] text-gray-700' htmlFor='email'>Email</label>
                        <input className='h-12 text-[18px] border-[1px] border-gray-300 rounded-lg outline-none ps-3 light-shadow' type='text' id='email' name='email' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='font-medium text-[14px] text-gray-700' htmlFor='password'>Password</label>
                        <input className='h-12 text-[18px] border-[1px] border-gray-300 rounded-lg outline-none ps-3 light-shadow' type='password' id='password' name='password' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='font-medium text-[14px] text-gray-700' htmlFor='conform_password'>Conform Password</label>
                        <input className='h-12 text-[18px] border-[1px] border-gray-300 rounded-lg outline-none ps-3 light-shadow' type='password' id='conform_password' name='conform_password' />
                    </div>
                    <div className='flex items-center mt-3'>
                        <button onClick={signupHandler} type='button' className='bg-[#314153] text-white w-screen h-12 rounded-lg font-semibold light-shadow-md'>
                            Sign in
                        </button>
                    </div>
                </form>
                <div className='flex items-center justify-center gap-2 mt-2'>
                    <span className='font-medium text-gray-600'>Already have an account?</span>
                    <Link to='/' className=' text-[#47AEC6] font-medium text-[16px]'>Sign In</Link>
                </div>
            </div >
        </div >
    )
}

export default Registration
