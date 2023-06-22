import { Link } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import SuccessIcon from '../../assets/images/success.png'

import './index.css'

const TransactionDetail = ({ data, handleValue }) => {
    const breadcrumbs = [
        <Link key="1" className='text-base font-medium text-gray-900 '
            onClick={() => { handleValue(6) }}
            to='/dashboard'>
            Home
        </Link>,
        <Link key="1" className='text-base font-medium text-gray-900 ' to='/dashboard'>
            Transaction
        </Link>,
        <p key="3" className='text-[#98A2B3]'>
            Transaction Detail
        </p>,
    ];

    return (
        <div className='flex flex-col justify-center gap-5 w-[76vw] detail-width'>
            <h2 className='text-[#1C1F28] font-semibold text-2xl'>Transactions</h2>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
            <div className='flex flex-col items-center gap-4 bg-[#FFFFFF] border rounded-lg pt-9 pb-16'>
                <div>
                    <img className='w-24' src={SuccessIcon} alt='success-icon' />
                </div>
                <div className='text-center'>
                    <p className='text-[#667085] font-semibold text-[20px]'>Payment Success!</p>
                    <p className='text-[#101828] font-semibold text-[30px]'>85.00 USD</p>
                </div>
                <ul className='flex flex-col gap-5 w-[39vw] payment-detail'>
                    <li className='flex justify-between pb-4 border-b'>
                        <span className='text-[#667085]'>Reference #</span>
                        <span className='text-[#101828] font-semibold'>xxx-xxxxxxxx</span>
                    </li>
                    <li className='flex justify-between pb-4 border-b'>
                        <span className='text-[#667085]'>Transaction Date</span>
                        <span className='text-[#101828] font-semibold'>05/29/2023</span>
                    </li>
                    <li className='flex justify-between pb-4 border-b'>
                        <span className='text-[#667085]'>Payment Status</span>
                        <span className='bg-[#d8fbe7] rounded-lg p-1 ps-3 pr-3 font-semibold text-[#12B76A]'>Success</span>
                    </li>
                    <li className='flex justify-between pb-4 border-b'>
                        <span className='text-[#667085]'>Payment Type</span>
                        <span className='text-[#101828] font-semibold'>Deposite</span>
                    </li>
                </ul>
                <div className='flex flex-col w-[39vw] payment-detail'>
                    <h1 className='text-[#667085]'>Note</h1>
                    <p className='text-[#101828] font-semibold'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TransactionDetail
