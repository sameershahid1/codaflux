import { Link, useNavigate } from 'react-router-dom';
import Breadcrumbs from "@mui/material/Breadcrumbs";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AvatarIcon from '../../assets/images/profileimage.png'
import LogoutIcon from '@mui/icons-material/Logout';

import './index.css'

const Profile = ({ handleValue }) => {
    const navigate = useNavigate()
    const breadcrumbs = [
        <Link key="1" className="text-gray-900 font-semibold"
            onClick={() => { handleValue(6) }}
            to="/dashboard">
            Home
        </Link>,
        <Link key="1" className="text-gray-900 font-semibold" to="/dashboard">
            My Profile
        </Link>
        ,
        <p key="3" className="text-[#98A2B3]">
            My Profile Details
        </p>,
    ];

    return (
        <div className="flex flex-col justify-center gap-3 w-[81vw] dashboard-width ">
            <h1 className="text-[24px] font-semibold text-[#1C1F28]">
                Profile Detail
            </h1>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
            <div className="flex flex-col gap-10  border rounded-lg bg-[#FFFFFF] p-7 mt-4 profile-container">
                <div className='flex items-center justify-between p-8 pr-12 ps-12 profile-header-container'>
                    <div className='flex items-center gap-4 profile-img'>
                        <img className='w-36 profile-img-width' src={AvatarIcon} alt="avatar-icon" />
                        <div className='flex flex-col'>
                            <span className='text-[#101828] text-2xl font-medium'>Alpha Kabinekaba</span>
                            <span className='text-[#667085]'>Alphakabine@gmail.com</span>
                        </div>
                    </div>
                    <div onClick={() => {
                        navigate('/')
                    }} className='cursor-pointer text-[#F04438] font-semibold flex gap-3'>
                        <LogoutIcon />
                        <span>Logout</span>
                    </div>
                </div>
                <div className='flex flex-col gap-6 ml-auto mr-auto w-[52vw] data-sperator-1'>
                    <div className='flex gap-[10vw] border-b border-b-[#EAECF0] pb-6 profile-header-container'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2'>
                                <span className='text-[#667085]'>Account Holder Name</span>
                                <span className='text-[#101828] font-semibold'>Alpha Kabinekaba</span>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <spa className='text-[#667085]'>Mobile Number</spa>
                                <span className='text-[#101828] font-semibold'>XXXX-XXXXX-XXXX</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2'>
                                <span className='text-[#667085]'>Email Address</span>
                                <span className='text-[#101828] font-semibold'>random123@gmail.com</span>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='text-[#667085]'>Address</span>
                                <span className='text-[#101828] font-semibold'>Rue du Chateau 15, brussels</span>
                            </div>
                        </div>
                    </div>
                    <h1 className='text-[#1C1F28] font-semibold text-[20px]'>Account Information</h1>
                    <div className='flex gap-[10vw] profile-header-container'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2'>
                                <span className='text-[#667085]'>Bank Name</span>
                                <span className='text-[#101828] font-semibold'>Dexia Bank</span>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='text-[#667085]'>Statement Period</span>
                                <span className='text-[#101828] font-semibold'>12 Years</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2'>
                                <span className='text-[#667085]'>Account Number</span>
                                <span className='text-[#101828] font-semibold'>DERGF3235F4GFSD33</span>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='text-[#667085]'>Currency</span>
                                <span className='text-[#101828] font-semibold'>United State Dollar - USD</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

