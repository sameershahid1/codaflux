import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

import LogoImg from '../../assets/images/logo.png'
import AvatarImg from '../../assets/images/avatar.png'
import { useState } from 'react';

const options = ["Profiles"];
const ITEM_HEIGHT = 48;

const Header = ({ handleValue }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className='bg-[##EAECF0] flex items-center justify-between p-5 border'>
            <img className='w-36' src={LogoImg} alt='logo' />
            <div className='flex items-center gap-2'>
                <img className='inline-block w-10 h-10 rounded-full' src={AvatarImg} alt='avatar' />
                <span className='text-[#667085]'>Alpha</span>

                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <KeyboardArrowDownIcon className='cursor-pointer text-[#667085]' />
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
                            handleValue(6)
                            handleClose()
                        }}
                    >
                        {options[0]}
                    </MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default Header


