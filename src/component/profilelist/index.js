import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SearchIcon from "@mui/icons-material/Search";
import ProfileImg from '../../assets/images/profileimage.png'

import './index.css'

function createData(id, name, email, accountNumber, phone) {
    return { id, name, email, accountNumber, phone };
}

let oldData = [
    createData(1, 'Frozen yoghurt', 'random123@gmai.com', 'DEFLKJLEKRJLKJ1256', 'xxxx-xxxx-xxxx'),
    createData(2, 'Frozen yoghurt', 'random123@gmai.com', 'DEFLKJLEKRJLKJ1256', 'xxxx-xxxx-xxxx'),
    createData(3, 'Frozen yoghurt', 'random123@gmai.com', 'DEFLKJLEKRJLKJ1256', 'xxxx-xxxx-xxxx'),
    createData(4, 'Frozen yoghurt', 'random123@gmai.com', 'DEFLKJLEKRJLKJ1256', 'xxxx-xxxx-xxxx'),
    createData(5, 'Frozen yoghurt', 'random123@gmai.com', 'DEFLKJLEKRJLKJ1256', 'xxxx-xxxx-xxxx'),
    createData(6, 'Frozen yoghurt', 'random123@gmai.com', 'DEFLKJLEKRJLKJ1256', 'xxxx-xxxx-xxxx'),
];

const pageSize = 7;
const options = ["View"];
const ITEM_HEIGHT = 48;

const ProfileList = ({ handleValue }) => {
    const breadcrumbs = [
        <Link key="1" className="text-gray-900 font-semibold"
            onClick={() => { handleValue(6) }}
            to="/dashboard">
            Home
        </Link>,
        <p key="3" className="text-[#98A2B3]">
            My profile
        </p>,
    ];
    const [pagination, setPagination] = useState({
        count: oldData.length,
        from: 0,
        to: pageSize,
        data: oldData.slice(0, pageSize),
        oldData: [...oldData],
    });

    const handleView = () => {
        handleValue(7)
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className="flex flex-col justify-center gap-3 w-[81vw] dashboard-width">
            <h1 className="text-[24px] font-semibold text-[#1C1F28]">
                Clients Overview
            </h1>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
            <div className="flex flex-col gap-10  border rounded-lg bg-[#FFFFFF] p-7 mt-4">
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
                </div>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell key={2} sx={{ color: "#667085" }}>
                                    Account Holder Name
                                </TableCell>
                                <TableCell key={3} sx={{ color: "#667085" }}>
                                    Email Address
                                </TableCell>
                                <TableCell key={5} sx={{ color: "#667085" }}>
                                    Mobile Number
                                </TableCell>
                                <TableCell key={6} sx={{ color: "#667085" }}>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pagination.data.map((row) => (
                                <TableRow sx={{ cursor: 'pointer' }}
                                    key={row.id}>
                                    <TableCell sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }} component="th" scope="row">
                                        <img className='w-10' src={ProfileImg} alt='prifile-img' />
                                        <span className='text-[#262526] font-semibold'>{row.name}</span>
                                    </TableCell>
                                    <TableCell><span className='text-[#262526] font-semibold'>{row.email}</span></TableCell>
                                    <TableCell><span className='text-[#262526] font-semibold'>{row.phone}</span></TableCell>
                                    <TableCell key={row.id}>
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
                                                onClick={handleView}
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

export default ProfileList

