import { useEffect, useState } from 'react'
import { Box, Drawer } from "@mui/material"
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Transaction from '../../component/transaction'
import TabPanel from '../../component/tabpanel'
import Header from "../../component/header"
import SideBar from "../../component/sidebar"
import TransactionDetail from '../../component/transactiondetail';


const current_width = window.innerWidth
let drawer = false
console.log(current_width)
if (current_width <= 972) {
    drawer = true
}

function createData(id, name, calories, fat, carbs) {
    return { id, name, calories, fat, carbs };
}

let rows = [
    createData(1, 'Frozen yoghurt', 159, 6.0, 24),
    createData(2, 'Ice cream sandwich', 237, 9.0, 37),
    createData(3, 'Eclair', 262, 16.0, 24),
    createData(4, 'Cupcake', 305, 3.7, 67),
    createData(5, 'Gingerbread', 356, 16.0, 49),
    createData(6, 'Kela', 356, 16.0, 49),
    createData(7, 'Zohaib', 356, 16.0, 49),
    createData(8, 'Sameer', 159, 6.0, 24),
    createData(9, 'Bilawal', 237, 9.0, 37),
    createData(10, 'Zeeshan', 262, 16.0, 24),
    createData(11, 'Adam', 305, 3.7, 67),
    createData(12, 'Bail', 356, 16.0, 49),
    createData(13, 'Zeerk', 356, 16.0, 49),
    createData(14, 'Kalo', 356, 16.0, 49),
];



const DashBoard = () => {
    const [value, setValue] = useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isDrawerActivate, setIsDrawerActivate] = useState(drawer)
    const [transactionDetail, setTransactionDetail] = useState({ activate: false, data: {} })

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleTransactionView = (id) => {
        const element = rows.find(element => id === element.id)
        setTransactionDetail({ activate: true, data: { ...element } })
    }

    useEffect(() => {
        const screenSizeChecker = () => {
            const width = window.innerWidth;
            if (width <= 972) {
                setIsDrawerActivate(true)
            }
            else {
                setIsDrawerActivate(false)
            }
        }

        window.addEventListener('resize', screenSizeChecker)
    }, [])

    return (
        <div className='relative'>
            <Header />
            {isDrawerActivate ?
                <IconButton sx={{ position: 'absolute', right: '10px', top: '6rem', boxShadow: '0 0 1px 1px rgba(0,0,0,0.25)' }} size='large' edge='start' color='inherit' aria-label='logo' onClick={() => { setIsDrawerOpen(true) }}>
                    <MenuIcon sx={{ fontSize: '2rem' }} />
                </IconButton> : null}
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
            >
                {isDrawerActivate ?
                    <Drawer anchor='left' open={isDrawerOpen} onClose={() => { setIsDrawerOpen(false) }}>
                        <SideBar value={value} handleChange={handleChange} />
                    </Drawer> :
                    <SideBar value={value} handleChange={handleChange} />}


                <TabPanel value={value} index={0}>
                    {transactionDetail.activate ? <TransactionDetail data={transactionDetail.data} /> : <Transaction oldData={rows} handleTransactionView={handleTransactionView} />}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Four
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Item Five
                </TabPanel>
            </Box>
        </div>
    )
}

export default DashBoard