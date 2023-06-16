import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import Registration from './component/registration';

import Signup from './page/signup';
import Login from './component/login';

import Logo from './assets/images/logo.png'
import OtpCode from './component/otpcode';
import PasswordEmail from './component/passwordemail'
import VerifyEmail from './component/verifyemail';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(previous => false);
    }, 1500);

  }, [])

  return (
    <>
      {
        isLoading ?
          <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center left'>
            <img className='w-60 sm:w-96' src={Logo} alt='loading' />
          </div> :
          <Routes>
            <Route path='/' element={<Signup />}>
              <Route index element={<Login />}></Route>
              <Route path='/registration' element={<Registration />}></Route>
              <Route path='/otp-code' element={<OtpCode />}></Route>
              <Route path='/password-email' element={<PasswordEmail />}></Route>
              <Route path='/verify-email' element={<VerifyEmail />}></Route>
              <Route path='/forgot-password' element={<p className='text-2xl font-bold text-center'>Forgot Password</p>}></Route>
            </Route>
            <Route path='/dashboard' element={<p className='text-2xl font-bold text-center'>DashBoard</p>} ></Route>
          </Routes>
      }
    </>
  )
}

export default App