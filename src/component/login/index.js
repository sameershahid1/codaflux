import React from 'react'
import { Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';

import './index.css'

import GoogleIcon from '../../assets/images/google.png'
import FacebookIcon from '../../assets/images/facebook.png'
import AppleIcon from '../../assets/images/apple.png'
import Logo from '../../assets/images/logo.png';


const customSwitchStyle = {
    color: 'White',
};

const signUpEmails = [
    { 'id': 1, 'text': 'Sign up with Google', 'icon': GoogleIcon },
    { 'id': 2, 'text': 'Sign up with FaceBook', 'icon': FacebookIcon },
    { 'id': 3, 'text': 'Sign up with Apple', 'icon': AppleIcon }
];


const Login = () => {
    return (
        <div className='flex items-center justify-center custom-width-1'>
            <div className='flex flex-col justify-start gap-3 mt-36 w-96 custom-width-1' >
                <img className='w-36' src={Logo} alt='logo' />
                <h2 className='text-3xl text-[30px] mt-3 text-[#101828] font-semibold custom-width-1'>Log in to your account</h2>
                <p className='text-gray-500 custom-width-1'>Welcome back! Please enter your details</p>
                <form className='flex flex-col gap-3 custom-width-1'>
                    <div className='flex flex-col gap-1 custom-width-1'>
                        <label className='font-medium text-gray-700' htmlFor='email'>Email</label>
                        <input className='h-12 text-[18px] border-[1px] border-gray-300 rounded-lg outline-none ps-3 light-shadow' type='text' id='email' name='email' />
                    </div>
                    <div className='flex flex-col gap-1 custom-width-1'>
                        <label className='font-medium text-gray-700' htmlFor='password'>Password</label>
                        <input className='h-12 text-[18px] border-[1px] border-gray-300 rounded-lg outline-none ps-3 light-shadow' type='password' id='password' name='password' />
                    </div>
                    <div className='flex items-center justify-between custom-width-1'>
                        <div className='flex items-center'>
                            <Switch style={customSwitchStyle} size='medium' />
                            <span className='text-gray-700 text-[14px]'>Remember me</span>
                        </div>
                        <Link className='text-[#47AEC6] font-medium text-[16px]' to='/password-email'>Forgot Password?</Link>
                    </div>
                    <div className='flex items-center custom-width-1'>
                        <button type='button' className='bg-[#314153] text-white w-screen h-12 rounded-lg font-semibold light-shadow-md'>Sign in</button>
                    </div>
                </form>
                <div className='mt-2 mb-2 custom-width-1'>
                    <Divider><span className='text-gray-500'>OR</span></Divider>
                </div>
                <div className='flex flex-col justify-center gap-3 custom-width-1'>
                    {signUpEmails.map(element => <button key={element.id} className='border-[1px] border-[#D0D5DD] bg-white text-[#344054] h-12 rounded-lg font-semibold light-shadow'>
                        <div className='flex items-center justify-center gap-4'>
                            <img className='w-6' src={element.icon} alt="social-media-icon" />
                            <span className='font-normal'>{element.text}</span>
                        </div>
                    </button>)}
                </div>
                <div className='flex items-center justify-center gap-2 mt-3 custom-width-1'>
                    <span className='font-medium text-gray-600'>Don't have an account?</span>
                    <Link to='/registration' className=' text-[#47AEC6] font-medium text-[16px]'>Sign up</Link>
                </div>
            </div >
        </div >
    )
}

export default Login

