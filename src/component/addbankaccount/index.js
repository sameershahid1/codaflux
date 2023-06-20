import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CloseIcon from '@mui/icons-material/Close';

import AionImg from '../../assets/images/aion.png'
import KBCImg from '../../assets/images/KBC.png'
import BNPImg from '../../assets/images/BNP.png'
import BanquImg from '../../assets/images/Banque.png'
import SuccessImg from '../../assets/images/towway.png'

import './index.css'

function createData(id, src, bankName, accountHolder, accountNumber, amount) {
    return { id, src, bankName, accountHolder, accountNumber, amount };
}

const oldRows = [
    createData(1, AionImg, 'Aion', 'Zohaib', 'BE74 0634 8461 8907', 24.09),
    createData(2, KBCImg, 'KBC Brusseis', 'Sameer', 'BE74 0634 8461 8907', 24.09),
    createData(3, BNPImg, 'BNP Paribas Fortis', 'Arsalan', 'BE74 0634 8461 8907', 24.09),
    createData(4, BanquImg, 'Bank Banque J.VanBreda & C', 'Mohid', 'BE74 0634 8461 8907', 24.09),
];

const AddBankAccount = () => {
    const [bankInformation, setBankInformation] = useState({ ...oldRows[0] })
    const [activate, setActivate] = useState({
        modal: false,
        switch: false,
    })
    const breadcrumbs = [
        <Link key="1" className="text-gray-900 font-semibold" to="/dashboard">
            Home
        </Link>,
        <Link key="1" className="text-gray-900 font-semibold" to="/dashboard">
            Accounts Overview
        </Link>
        ,
        <p key="3" className="text-[#98A2B3]">
            Add Bank Account
        </p>,
    ];

    return (
        <div className="flex flex-col justify-center gap-3 w-[81vw] dashboard-width">
            {
                activate.modal ?
                    <div class="m-auto fixed inset-0 z-50 flex items-center justify-center w-[39vw]">
                        <div class="fixed inset-0 bg-[#353B38] opacity-75"></div>
                        <div class="relative bg-white p-8 pt-4 rounded-2xl shadow-lg">
                            <div onClick={() => { setActivate({ modal: false, switch: false }) }} class="flex justify-end cursor-pointer">
                                <CloseIcon sx={{ color: '#98A2B3' }} />
                            </div>

                            {
                                !activate.switch ?
                                    <>
                                        <div className="flex flex-col gap-7">
                                            <article className="text-center flex flex-col items-center justify-center gap-6">
                                                <img className='w-20' src={SuccessImg} alt="img" />
                                                <h1 className='text-[#101828] font-semibold text-[24px] mt-4'>Do you want to add an additional account?</h1>
                                                <p class="text-[#667085]">Unfortunately, your current subscription doesn’t allow this. Please ‘Cancel’ and change your subscription so that you can add extra bank accounts.</p>
                                            </article>
                                            <div className='flex flex-col items-center gap-4'>
                                                <button onClick={() => { setActivate({ modal: true, switch: true }) }} className='bg-[#314153] text-white rounded-lg w-72 pt-2 pb-2 font-semibold' type="button">
                                                    Switch Account
                                                </button>
                                                <button onClick={() => { setActivate({ modal: false, switch: false }) }} className='bg-white text-[#314153] rounded-lg w-72 pt-2 pb-2 font-semibold light-shadow-normal' type="button">
                                                    Cancel
                                                </button>

                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="flex flex-col gap-7">
                                            <article className="text-center flex flex-col items-center justify-center gap-6 mt-7">
                                                <p class="text-[#667085]">Make sure that in the following screens of Belfius you always select all bank accounts you want CODAFLUX to connect with (and not only the new ones).</p>
                                            </article>
                                            <div className='flex flex-col items-center gap-4'>
                                                <button onClick={() => { setActivate({ modal: false, switch: false }) }} className='bg-[#314153] text-white rounded-lg w-72 pt-2 pb-2 font-semibold' type="button">
                                                    Got it
                                                </button>
                                            </div>
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                    : null
            }

            <h1 className="text-[24px] font-semibold text-[#1C1F28]">
                Accounts Overview
            </h1>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
            <div className="flex flex-col gap-10  border rounded-lg bg-[#FFFFFF] p-7 mt-4 account-width">
                <div className="bg-[#47AEC6] flex items-center gap-7 pt-6 pb-6 ps-7 rounded-2xl accounts-header-container">
                    <div>
                        <img src={bankInformation.src} alt='bank-img' />
                    </div>
                    <div className="text-white flex flex-col gap-3">
                        <h1 className='text-3xl font-semibold title-text'>{bankInformation.accountNumber}</h1>
                        <div className="flex gap-10 text-[19px] info-space-container">
                            <span className="flex gap-5 info-space-1">
                                <span className='font-normal'>Name:</span> <span className="font-medium"> {bankInformation.accountHolder}</span>
                            </span>
                            <span className="flex gap-5 info-space-1">
                                <span className='font-normal'>Balance:</span> <span className="font-medium">{bankInformation.amount} USD</span>
                            </span>
                        </div>
                    </div>
                </div>
                <p className="text-[#667085] text-[16px]">Add an Account</p>
                <div className="flex flex-col gap-3">
                    {
                        oldRows.map((element => {
                            return (
                                <div onClick={() => {
                                    setBankInformation({ ...element })
                                }} 
                                className='border-b cursor-pointer border-[#EAECF0] pb-4 flex justify-between items-center bank-flex-column'>
                                    <div className='flex items-center gap-4'>
                                        <img className='w-16' src={element.src} alt={'bank-img'} />
                                        <p className='text-[#262526] font-medium'>{element.bankName}</p>
                                    </div>
                                    <button onClick={() => { setActivate({ modal: true, switch: false }) }} className='text-[#344054] font-semibold w-32 rounded-lg pt-2 pb-2 light-shadow-normal' type="button">Add Account</button>
                                </div>
                            )
                        }))
                    }
                </div>
            </div>
        </div>
    )
}

export default AddBankAccount
