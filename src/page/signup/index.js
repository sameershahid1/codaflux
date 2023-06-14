import React from 'react'
import { Outlet } from 'react-router-dom'
import LoginImg from '../../assets/images/login.png'

const Login = () => {
    return (
        <section className='flex'>
            <div className='flex-1'>
                <Outlet />
            </div>
            <div className='flex-1'>
                <img className='w-screen h-screen' src={LoginImg} alt='login-img' />
            </div>
        </section>
    )
}

export default Login


