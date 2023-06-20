import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import SearchIcon from "@mui/icons-material/Search";
import CalendarIcon from "../../assets/images/calendar.png";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import './index.css'

const data = [
    {
        date: 'Jan 1, 2023 - 05:23 AM',
        payment: ['Amazon Payment', 'Paypal Payment', 'Ebay Payment']
    },
    {
        date: 'Jan 1, 2023 - 05:23 AM',
        payment: ['Amazon Payment', 'Paypal Payment', 'Ebay Payment']
    },
]

const Statement = ({ handleValue }) => {
    const breadcrumbs = [
        <Link key="1" className="text-gray-900 font-semibold" to="/dashboard">
            Home
        </Link>,
        <p key="3" className="text-[#98A2B3]">
            Bank Statement
        </p>,
    ];

    const handleTransaction = () => {
        handleValue(8)
    }

    return (
        <div className="flex flex-col justify-center gap-3 w-[81vw] dashboard-width">
            <h1 className="text-[24px] font-semibold text-[#1C1F28]">
                Bank Statement
            </h1>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
            <div className="flex flex-col gap-10  border rounded-lg bg-[#FFFFFF] p-7 mt-4 statement-width">
                <div className="bg-[#F9FAFB] p-4 pr-5 ps-5 rounded-xl flex flex-wrap justify-between items-center">
                    <div className="items-center flex gap-2 bg-[#FFFFFF] border rounded-lg p-2 pt-1 pb-1 light-shadow-normal-1">
                        <SearchIcon
                            sx={{
                                color: "#667085",
                                fontSize: "1.9rem",
                            }}
                        />
                        <input
                            className="outline-none w-80 search-width profile-search-width"
                            placeholder="Search for Statement"
                        />
                    </div>

                    <div className="flex items-center gap-3 border bg-[#FFFFFF] p-2 ps-4 pr-4 rounded-lg light-shadow-normal-1">
                        <img className="w-[20px]" src={CalendarIcon} alt="calendar-icon" />
                        <p className='text-[14px] text-[#344054] font-semibold'>Jan 1,2023-Jan 31,2023</p>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    {data.map(element => {
                        return (
                            <ul className="">
                                <li className='text-[#667085] font-medium border-b pt-4 pb-4'>
                                    {element.date}
                                </li>
                                {
                                    element.payment.map(item => {
                                        return (
                                            <>
                                                <li onClick={handleTransaction} className='cursor-pointer flex justify-between text-[#262526] font-semibold border-b pt-4 pb-4'>
                                                    <span>{item}</span>
                                                    <KeyboardArrowRightIcon sx={{ marginRight: '1rem' }} />
                                                </li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Statement
