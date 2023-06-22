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

import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import CalendarIcon from "../../assets/images/calendar.png";
import IconButton from "@mui/material/IconButton";

import "./index.css";

import Filter from "../filter";

const pageSize = 7;
const options = ["View", "Delete"];

const ITEM_HEIGHT = 48;
let idSaver = 0;

const Transaction = ({ oldData, handleTransactionView, handleValue }) => {
  const [pagination, setPagination] = useState({
    count: oldData.length,
    from: 0,
    to: pageSize,
    data: oldData.slice(0, pageSize),
    oldData: [...oldData],
  });
  const [isFilter, setIsFilter] = useState(false);
  const breadcrumbs = [
    <Link
      key="1"
      className="font-semibold text-base font-medium text-gray-900 "
      to="/dashboard"
      onClick={() => { handleValue(6) }}
    >
      Home
    </Link>,
    <p key="3" className="text-[#98A2B3]">
      Transactions
    </p>,
  ];

  const handlePageChange = (e, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    const data = pagination.rows.slice(from, to);
    setPagination((prev) => {
      return { ...prev, from: from, to: to, data: [...data] };
    });
  };

  const handleFilterClose = (data) => {
    setIsFilter(data);
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
    <div className="flex flex-col justify-center gap-5 w-[76vw] dashboard-width">
      {isFilter && <Filter handleClose={handleFilterClose} />}
      <h2 className="text-[#1C1F28] font-semibold text-2xl">Transactions</h2>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <div className="bg-[#FFFFFF]  table-width border flex flex-col justify-center p-7 rounded-lg">
        <div className="bg-[#F9FAFB] p-4 pr-5 ps-5 rounded-lg flex flex-wrap justify-between items-center">
          <div className="cursor-pointer items-center flex gap-2 bg-[#FFFFFF] border rounded-lg p-2 pt-1 pb-1 light-shadow-normal-1">
            <SearchIcon
              sx={{
                color: "#667085",
                fontSize: "1.9rem",
              }}
            />
            <input
              className="outline-none w-60 search-width"
              placeholder="Search for Statement"
            />
            <FilterListIcon
              onMouseOver={() => {
                setIsFilter(true);
              }}
              sx={{
                color: "#667085",
              }}
            />
          </div>

          <div className="flex cursor-pointer items-center gap-3 border bg-[#FFFFFF] p-2 ps-4 pr-4 rounded-lg light-shadow-normal-1">
            <img className="w-[20px]" src={CalendarIcon} alt="calendar-icon" />
            <p className="text-[14px] text-[#344054] font-semibold">
              Jan 1,2023-Jan 31,2023
            </p>
          </div>
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
                    <span className="text-[#262526] font-semibold">
                      {row.name}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-[#262526] font-semibold">
                      {row.calories}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-[#262526] font-semibold">
                      {row.fat}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-[#262526] font-semibold">
                      {row.carbs}
                    </span>
                  </TableCell>
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
                          handleTransactionView(idSaver);
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

export default Transaction;
