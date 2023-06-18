import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'

import './index.css'

const OtpCode = () => {
    const navigate = useNavigate()
    const backHandler = () => {
        navigate('/registration')
    }
    const verfiedHandler = () => {
        navigate('/')
    }

    return (
        <div className='flex flex-col items-center justify-center gap-4 custom-width-1'>
            <div className='flex flex-col justify-start gap-6 mt-36' >
                <div onClick={backHandler} className='flex justify-center w-10 pt-2 pb-2 border rounded-full cursor-pointer light-shadow-arrow'>
                    <ArrowBackIcon />
                </div>
                <div>
                    <h2 className='text-3xl text-[30px] text-[#101828] font-semibold'>Enter OTP Code</h2>
                    <p className='mt-4 text-gray-500'>Enter the 4-digit code sent to you at <br /><span className='font-medium text-gray-600'>demo123@gmail.com</span></p>
                </div>
                <form className='flex items-center gap-4 custom-width-1'>
                    <input maxLength={1} type='number' className='outline-none border text-[48px] text-center font-bold border-[#47AEC6] max-h-[8.5vh] min-h-[8.5vh] w-[78px] rounded-xl light-blue-shadow custom-width-2' />
                    <input maxLength={1} type='number' className='outline-none border text-[48px] text-center font-bold border-[#47AEC6] max-h-[8.5vh] min-h-[8.5vh] w-[78px] rounded-xl light-blue-shadow custom-width-2' />
                    <input maxLength={1} type='number' className='outline-none border text-[48px] text-center font-bold border-[#47AEC6] max-h-[8.5vh] min-h-[8.5vh] w-[78px] rounded-xl light-blue-shadow custom-width-2' />
                    <input maxLength={1} type='number' className='outline-none border text-[48px] text-center font-bold border-[#47AEC6] max-h-[8.5vh] min-h-[8.5vh] w-[78px] rounded-xl light-blue-shadow custom-width-2' />
                </form>
                <p className='text-[#47AEC6] font-medium text-[18px]'>Resend OTP</p>
                <button onClick={verfiedHandler} type='button' className='bg-[#314153] text-white h-12 rounded-lg font-semibold light-shadow-md'>Verify OTP</button>
            </div>
        </div>
    )
}

export default OtpCode
