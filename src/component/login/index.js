import React from 'react'
import Logo from '../../assets/images/logo.png';
import { Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';


const customSwitchStyle = {
    color: 'White',
};

const signUpEmails = [
    { 'text': 'Sign up with Google' },
    { 'text': 'Sign up with FaceBook' },
    { 'text': 'Sign up with Apple' }
];


const Login = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col justify-start gap-3 mt-44 w-96' >
                < img className='w-36' src={Logo} alt='logo' />
                <h2 className='text-3xl font-bold'>Log in to your account</h2>
                <p className='text-gray-500'>Welcome back! Please enter your details</p>
                <form className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-1'>
                        <label className='font-medium text-gray-700' htmlFor='email'>Email</label>
                        <input className='h-12 text-[18px] border-[1px] border-gray-300 rounded-lg outline-none ps-3 light-shadow' type='text' id='email' name='email' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='font-medium text-gray-700' htmlFor='password'>Password</label>
                        <input className='h-12 text-[18px] border-[1px] border-gray-300 rounded-lg outline-none ps-3 light-shadow' type='password' id='password' name='password' />
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <Switch style={customSwitchStyle} size='medium' />
                            <span className='text-gray-700 text-[14px]'>Remember me</span>
                        </div>
                        <Link className='text-[#47AEC6] font-medium text-[16px]' to='/password-email'>Forgot Password?</Link>
                    </div>
                    <div className='flex items-center'>
                        <button type='button' className='bg-[#314153] text-white w-screen h-12 rounded-lg font-semibold light-shadow-md'>Sign in</button>
                    </div>
                </form>
                <div className='mt-2 mb-2'>
                    <Divider><span className='text-gray-500'>OR</span></Divider>
                </div>
                <div className='flex flex-col gap-3'>
                    {signUpEmails.map(element => <button className='border-[1px] border-[#D0D5DD] bg-white text-[#344054]  h-12 rounded-lg font-semibold light-shadow' type='button'>{element.text}</button>)}
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <span className='font-medium text-gray-600'>Don't have an account?</span>
                    <Link to='/registration' className=' text-[#47AEC6] font-medium text-[16px]'>Sign up</Link>
                </div>
            </div >
        </div >
    )
}

export default Login

