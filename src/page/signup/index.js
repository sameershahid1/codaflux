import React from 'react'
import { Outlet } from 'react-router-dom'
import LoginImg from '../../assets/images/login.png'

import './index.css'

const Login = () => {
    return (
        <section className='flex lg:flex-row md:flex-col-reverse'>
            <div className='flex-1'>
                <Outlet />
            </div>
            <div className='flex-1 md:hidden sm:hidden lg:block hidden-lower-sm'>
                <img className='w-screen h-screen' src={LoginImg} alt='login-img' />
            </div>
        </section>
    )
}

export default Login


