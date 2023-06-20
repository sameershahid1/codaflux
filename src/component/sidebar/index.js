import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DollarIcon from '../../assets/images/dollar.png'
import ImportExportIcon from '@mui/icons-material/ImportExport';
import LogoutIcon from '@mui/icons-material/Logout';
import TaskIcon from '../../assets/images/tasks.png'

import './index.css'
import { useNavigate } from 'react-router-dom';


function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const style = {
    backgroundColor: '#47AEC6',
    color: 'white',
    border: '1px solid transparent',
    borderRadius: '10px',
    marginRight: '1rem',
    marginLeft: '1rem',
}

const SideBar = ({ value, handleChange }) => {
    const navigate = useNavigate()
    const logoutHandler = () => {
        navigate('/')
    }

    return (
        <>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ paddingTop: '1.5rem', borderRight: 1, width: '15rem', borderColor: 'divider', maxHeight: '100vh', minHeight: '127vh' }}
            >
                <Tab style={value === 0 ? style : null} iconPosition="start" icon={<ImportExportIcon style={value === 0 ? { fontSize: '25px', color: 'white' } : { fontSize: '25px', color: '#98A2B3' }} />} label="Transaction" {...a11yProps(0)} />
                <Tab style={value === 1 ? style : null} iconPosition="start" icon={<img className={`w-6 ${value === 1 ? 'img-color-white' : ''}`} src={DollarIcon} alt='dollar-icon' />} label="Balance" {...a11yProps(1)} />
                <Tab style={value === 2 ? style : null} iconPosition="start" icon={<img className={`w-[17px] ${value === 2 ? 'img-color-white' : ''}`} src={TaskIcon} alt="task-icon" />} label="Statement" {...a11yProps(2)} />
                <Tab style={value === 3 ? style : null} iconPosition="start" icon={<AccountBalanceIcon style={value === 3 ? { color: 'white' } : { color: '#98A2B3' }} />} label="Accounts" {...a11yProps(3)} />
                <Tab onClick={logoutHandler} style={value === 4 ? style : null} iconPosition="start" icon={<LogoutIcon style={value === 4 ? { color: 'white' } : { color: '#98A2B3' }} />} label="Logout" {...a11yProps(4)} />
            </Tabs>
        </>
    );
}

export default SideBar
