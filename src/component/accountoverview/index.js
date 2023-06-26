import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Pagination from "@mui/material/Pagination";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";
import CalendarIcon from "../../assets/images/calendar.png";

import AionImg from '../../assets/images/aion.png'
import KBCImg from '../../assets/images/KBC.png'
import BNPImg from '../../assets/images/BNP.png'
import BanquImg from '../../assets/images/Banque.png'


const options = ["Delete"];
const ITEM_HEIGHT = 48;
const pageSize = 7;
let idSaver = 0;
function createData(id, src, bankName, accountHolder, accountNumber, amount) {
    return { id, src, bankName, accountHolder, accountNumber, amount };
}


const AccountOverview = ({ handleValue }) => {
    const oldRows = [
        createData(1, AionImg, 'Aion', 'Zohaib', 'BE74 0634 8461 8907', 24.09),
        createData(2, KBCImg, 'KBC Brusseis', 'Sameer', 'BE74 0634 8461 8907', 24.09),
        createData(3, BNPImg, 'BNP Paribas Fortis', 'Arsalan', 'BE74 0634 8461 8907', 24.09),
        createData(4, BanquImg, 'Bank Banque J.VanBreda & C', 'Mohid', 'BE74 0634 8461 8907', 24.09),
    ];
    const breadcrumbs = [
        <Link key="1" className="text-gray-900 font-semibold"
            onClick={() => { handleValue(6) }}
            to="/dashboard">
            Home
        </Link>,
        <p key="3" className="text-[#98A2B3]">
            Accounts Overview
        </p>,
    ];
    const [pagination, setPagination] = useState({
        count: oldRows.length,
        from: 0,
        to: pageSize,
        data: oldRows.slice(0, pageSize),
        oldData: oldRows,
    });

    const handlePageChange = (e, page) => {
        const from = (page - 1) * pageSize;
        const to = ((page - 1) * pageSize) + pageSize;
        const data = pagination.rows.slice(from, to);
        setPagination((prev) => {
            return { ...prev, from: from, to: to, data: [...data] };
        });
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = (id) => {
        const rows = pagination.oldData.filter((element) => {
            if (id !== element.id) {
                return element;
            }
        });
        const data = rows.slice(pagination.from, pagination.to);
        console.log(data);
        setPagination({
            ...pagination,
            count: rows.length,
            data: [...data],
            oldData: [...rows],
        });
    };

    return (
        <div className="flex flex-col justify-center gap-3 w-[81vw] dashboard-width">
            <h1 className="text-[24px] font-semibold text-[#1C1F28]">
                Accounts Overview
            </h1>
            <div className="flex justify-between">
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
                <button onClick={() => { handleValue(5) }} className='bg-[#314153] text-white rounded-lg w-36 pt-2 pb-2 font-semibold' type="button">Add Account</button>
            </div>
            <div className="flex flex-col gap-10  border rounded-lg bg-[#FFFFFF] p-7 mt-4">
                <div className="bg-[#F9FAFB] p-4 pr-5 ps-5 rounded-lg flex flex-wrap justify-between items-center">
                    <div className="items-center flex gap-2 bg-[#FFFFFF] border rounded-lg p-2 pt-1 pb-1 light-shadow-normal-1">
                        <SearchIcon
                            sx={{
                                color: "#667085",
                                fontSize: "1.9rem",
                            }}
                        />
                        <input
                            className="outline-none w-80 search-width"
                            placeholder="Search for Accounts"
                        />
                    </div>

                    <div className="flex items-center cursor-pointer gap-3 border bg-[#FFFFFF] p-2 ps-4 pr-4 rounded-lg light-shadow-normal-1">
                        <img className="w-[20px]" src={CalendarIcon} alt="calendar-icon" />
                        <p className='text-[14px] text-[#344054] font-semibold'>Jan 1,2023-Jan 31,2023</p>
                    </div>
                </div>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell key={2} sx={{ color: "#667085" }}>
                                    Bank Name
                                </TableCell>
                                <TableCell key={4} sx={{ color: "#667085" }}>
                                    Name
                                </TableCell>
                                <TableCell key={3} sx={{ color: "#667085" }}>
                                    Account Holder
                                </TableCell>
                                <TableCell key={4} sx={{ color: "#667085" }}>
                                    Account Number
                                </TableCell>
                                <TableCell key={5} sx={{ color: "#667085" }}>
                                    Amount
                                </TableCell>
                                <TableCell key={6} sx={{ color: "#667085" }}>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pagination.data.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <img className='w-14' src={row.src} alt='back-img' />
                                        <span className='text-[#262526] font-semibold'>{row.bankName}</span>
                                    </TableCell>
                                    <TableCell><span className='text-[#262526] font-semibold'>Bilawal</span></TableCell>
                                    <TableCell><span className='text-[#262526] font-semibold'>{row.accountHolder}</span></TableCell>
                                    <TableCell><span className='text-[#262526] font-semibold'>{row.accountNumber}</span></TableCell>
                                    <TableCell><span className='text-[#262526] font-semibold'>{row.amount} USD</span></TableCell>
                                    <TableCell
                                        onClick={() => {
                                            idSaver = row.id;
                                        }}
                                        key={row.id}
                                    >
                                        <IconButton
                                            aria-label="more"
                                            id="long-button"
                                            aria-controls={open ? "long-menu" : undefined}
                                            aria-expanded={open ? "true" : undefined}
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                            sx={{
                                                boxShadow: "0 0 1px 1px rgba(0,0,0,0.2)",
                                            }}
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            id="long-menu"
                                            MenuListProps={{
                                                "aria-labelledby": "long-button",
                                            }}
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            PaperProps={{
                                                style: {
                                                    maxHeight: ITEM_HEIGHT * 4.5,
                                                    width: "20ch",
                                                    boxShadow: "1px 1px 2px 1px rgba(0,0,0,0.11)",
                                                },
                                            }}
                                        >
                                            <MenuItem
                                                key={options[0]}
                                                onClick={() => {
                                                    handleDelete(idSaver);
                                                    handleClose();
                                                }}
                                            >
                                                {options[0]}
                                            </MenuItem>
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </div>
    )
}

export default AccountOverview

