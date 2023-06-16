import React from 'react'

import MailImage from '../../assets/images/email.png'
import { useNavigate } from 'react-router-dom'

const VerifyEmail = () => {
    const navigate = useNavigate()
    const passwordEmail = () => {
        navigate('/password-email')
    }
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <div className='flex flex-col items-center justify-center gap-5 mt-36' >
                <img className='w-[120px]' src={MailImage} alt='mail-img' />
                <h2 className='text-3xl mt-4 text-[30px] text-[#101828] font-semibold'>Verify your Email</h2>
                <p className='text-gray-500 text-center max-w-[300px]'>Click the link we just send to your email <span className='text-gray-600 font-medium'>demo123@gmail.com</span></p>
            </div>
            <div className='flex flex-col justify-center w-[350px] mt-4 gap-3' >
                <button onClick={passwordEmail} type='button' className='bg-[#314153] text-white h-12 rounded-lg font-semibold light-shadow-md'>Change Email</button>
                <button type='button' className='bg-white text-[#314153] h-12 rounded-lg font-semibold light-shadow-normal light-shadow-md'>Resend Link</button>
            </div>
        </div>
    )
}

export default VerifyEmail
