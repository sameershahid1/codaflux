import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import LogoImg from '../../assets/images/logo.png'
import AvatarImg from '../../assets/images/avatar.png'


const Header = () => {
    return (
        <div className='bg-[##EAECF0] flex items-center justify-between p-5 border'>
            <img className='w-36' src={LogoImg} alt='logo' />
            <div className='flex items-center gap-2'>
                <img className='inline-block w-10 h-10 rounded-full' src={AvatarImg} alt='avatar' />
                <span className='text-[#667085]'>Alpha</span>
                <KeyboardArrowDownIcon className='cursor-pointer text-[#667085]' />
            </div>
        </div>
    )
}

export default Header


