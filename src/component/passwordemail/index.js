import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'


const PasswordEmail = () => {
    const navigate = useNavigate()
    const backHandler = () => {
        navigate('/')
    }

    const resetPasswordHandler = () => {
        navigate('/verify-email')
    }

    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <div className='flex flex-col justify-start gap-6 mt-36' >
                <div onClick={backHandler} className='flex justify-center border rounded-full w-10 pt-2 pb-2 light-shadow-arrow  cursor-pointer'>
                    <ArrowBackIcon />
                </div>
                <div>
                    <h2 className='text-3xl text-[30px] text-[#101828] font-semibold'>Forgot Password</h2>
                    <p className='text-gray-500 mt-4 max-w-[300px] text-width'>Please Enter your email address to recover your address</p>
                </div>
                <form className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-1'>
                        <label className='font-medium text-gray-700' htmlFor='email'>Email</label>
                        <input className='h-12 text-[18px] border-[1px] border-gray-300 rounded-lg outline-none ps-3 light-shadow' type='text' id='email' name='email' />
                    </div>
                    <button onClick={resetPasswordHandler} type='button' className='bg-[#314153] text-white h-12 rounded-lg font-semibold light-shadow-md'>Reset Password</button>
                </form>
            </div>
        </div>
    )
}

export default PasswordEmail

