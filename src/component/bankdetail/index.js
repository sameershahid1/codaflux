import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import GetAppIcon from '@mui/icons-material/GetApp';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";



function createData(id, bankHolder, name, cashType, date,amount) {
    return {id, bankHolder, name, cashType, date,amount};
}

let oldData = [
    createData(1, 'Frozen yoghurt', "Zohaib", "Cash Out", 'Jun 10,2023', 24),
    createData(2, 'Frozen yoghurt', "Zohaib", "Cash Out", 'Jun 10,2023', 24),
    createData(3, 'Frozen yoghurt', "Zohaib", "Cash Out", 'Jun 10,2023', 24),
    createData(4, 'Frozen yoghurt', "Zohaib", "Cash Out", 'Jun 10,2023', 24),
];
const pageSize = 7;


const BankDetail = () => {
    const breadcrumbs = [
        <Link key="1" className="text-gray-900 font-semibold" to="/dashboard">
            Home
        </Link>,
        <Link key="1" className="text-gray-900 font-semibold" to="/dashboard">
            Balance Statement
        </Link>,
        <p key="3" className="text-[#98A2B3]">
            Balance Statement Details
        </p>,
    ];

    const [pagination, setPagination] = useState({
        count: oldData.length,
        from: 0,
        to: pageSize,
        data: oldData.slice(0, pageSize),
        oldData: oldData,
    });


    return (
        <div className="flex flex-col justify-center gap-3 w-[81vw] dashboard-width">
            <h1 className="text-[24px] font-semibold text-[#1C1F28]">
                Balance Information
            </h1>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
            <div className="flex flex-col gap-10  border rounded-lg bg-[#FFFFFF] p-7 mt-4 balance-width">
                <div className="flex justify-between items-center">
                    <p className='text-[#667085]'>Today Transactions</p>
                    <select className='pt-2 pb-2 w-24 text-center rounded-md light-shadow-normal-1'>
                        <option value={"today"}>Today</option>
                    </select>
                </div>
                <div className="bg-[#47AEC6] flex flex-col gap-2 pt-6 pb-6 ps-7 rounded-2xl">
                    <h1 className="text-[30px] font-medium text-white">Account Summary</h1>
                    <div className="flex gap-7 items-center">
                        <div className="flex flex-col gap-2">
                            <span className="text-white text-[18px]">Opening Balance</span>
                            <span className="text-white text-[18px]">8x,000,00 USD</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-white text-[18px]">Closing Balance</span>
                            <span className="text-white text-[18px]">20,000,00 USD</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <p className='text-[#101828] font-semibold text-[20px]'>Statement</p>
                    <button type="button" className="p-2 pl-3 pr-3 light-shadow-normal rounded-lg">
                        <GetAppIcon />
                        <span>Export</span>
                    </button>
                </div>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell key={2} sx={{ color: "#667085" }}>
                                    Account Holder
                                </TableCell>
                                <TableCell key={3} sx={{ color: "#667085" }}>
                                    Bank Name
                                </TableCell>
                                <TableCell key={4} sx={{ color: "#667085" }}>
                                    Cash Type
                                </TableCell>
                                <TableCell key={5} sx={{ color: "#667085" }}>
                                    Execution date
                                </TableCell>
                                <TableCell key={5} sx={{ color: "#667085" }}>
                                    Amount
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pagination.data.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        <span className='text-[#262526] font-semibold'>{row.bankHolder}</span>
                                    </TableCell>
                                    <TableCell><span className='text-[#262526] font-semibold'>{row.name}</span></TableCell>
                                    <TableCell><span className='text-[#262526] font-semibold'>{row.cashType}</span></TableCell>
                                    <TableCell><span className='text-[#262526] font-semibold'>{row.date}</span></TableCell>
                                    <TableCell><span className='text-[#262526] font-semibold'>{row.amount}</span></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </div>
    )
}

export default BankDetail
