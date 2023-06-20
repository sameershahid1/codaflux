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
import Pagination from "@mui/material/Pagination";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";

import StatementIcon from "../../assets/images/statement.png";

import './index.css'

const options = ["View", "Delete"];
const ITEM_HEIGHT = 48;
const pageSize = 7;
let idSaver = 0;


const Balance = ({ oldData }) => {
  const breadcrumbs = [
    <Link key="1" className="text-gray-900 font-semibold" to="/dashboard">
      Home
    </Link>,
    <p key="3" className="text-[#98A2B3]">
      Balance Information
    </p>,
  ];
  const [pagination, setPagination] = useState({
    count: oldData.length,
    from: 0,
    to: pageSize,
    data: oldData.slice(0, pageSize),
    oldData: oldData,
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
    const rows = pagination.oldData.filter((element) => element.id !== id);
    const data = rows.slice(pagination.from, pagination.to);
    setPagination((prev) => {
      return {
        ...prev,
        count: rows.length,
        data: [...data],
        oldData: [...rows],
      };
    });
  };

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
        <div className="bg-[#47AEC6] flex flex-col gap-2 pt-6 pb-6 ps-7 rounded-2xl">
          <h1 className="text-[30px] font-medium text-white">56,6900.67</h1>
          <div className="flex justify-center cursor-pointer gap-4 items-center border  pt-3 pb-3 pr-2 ps-2 rounded-lg w-48">
            <img className="w-4" src={StatementIcon} alt="statement-icon" />
            <span className="text-white text-[14px]">Monthly Statement</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className='text-[#667085]'>Today Transactions</p>
          <select className='pt-2 pb-2 w-24 text-center rounded-md light-shadow-normal-1'>
            <option value={"today"}>Today</option>
          </select>
        </div>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell key={1}>
                  <input
                    class="form-checkbox h-5 w-5 border border-[#D0D5DD] rounded-lg text-indigo-600 transition duration-150 ease-in-out"
                    type="checkbox"
                  />
                </TableCell>
                <TableCell key={2} sx={{ color: "#667085" }}>
                  Transaction To
                </TableCell>
                <TableCell key={3} sx={{ color: "#667085" }}>
                  Remittance info
                </TableCell>
                <TableCell key={4} sx={{ color: "#667085" }}>
                  Execution Date
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
                  <TableCell>
                    <input
                      class="form-checkbox h-5 w-5 border border-[#D0D5DD] rounded-lg text-indigo-600 transition duration-150 ease-in-out"
                      type="checkbox"
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <span className='text-[#262526] font-semibold'>{row.name}</span>
                  </TableCell>
                  <TableCell><span className='text-[#262526] font-semibold'>{row.calories}</span></TableCell>
                  <TableCell><span className='text-[#262526] font-semibold'>{row.fat}</span></TableCell>
                  <TableCell><span className='text-[#262526] font-semibold'>{row.carbs}</span></TableCell>
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
                          //   handleTransactionView(idSaver);
                          handleClose();
                        }}
                      >
                        {options[0]}
                      </MenuItem>
                      <MenuItem
                        key={options[1]}
                        onClick={() => {
                          handleDelete(idSaver);
                          handleClose();
                        }}
                      >
                        {options[1]}
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="flex justify-center">
        <Pagination
          count={Math.ceil(pagination.count / pageSize)}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Balance;
