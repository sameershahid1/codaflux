import { Link } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const TransactionDetail = ({ data }) => {
    const breadcrumbs = [
        <Link key="1" className='text-base font-medium text-gray-900 ' to='/dashboard'>
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
        <div className='flex flex-col justify-center gap-5 w-[76vw] dashboard-width'>
            <h2 className='text-[#1C1F28] font-semibold text-2xl'>Transactions</h2>
            <div>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </div>
            <div>
                <div></div>
                <div>
                    <p>Payment Success!</p>
                    <p>85.00 USD</p>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default TransactionDetail
