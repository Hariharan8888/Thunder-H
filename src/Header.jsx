import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import HeaderOption from './HeaderOption'
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { useDispatch} from 'react-redux'
import { logout } from './features/counter/userSlice'
import { auth } from './firebase'

const Header = () => {
  const dispatch = useDispatch()

  const logoutofApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  return (
    <div className='header'>
        <div className="header__left">
            <img src='data:image/jpeg;base64,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'
             alt="" />
        </div>

        <div className='header__search'>
          <SearchIcon />
            <input placeholder='Search' type="text" />
        </div>

        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title='Home'/>
          <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
          <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
          <HeaderOption Icon={ChatIcon} title='Messaging' />
          <HeaderOption Icon={NotificationsIcon} title='Notifications' />
          <HeaderOption avatar={true} title='me' 
          onClick={logoutofApp}
          />
        </div>
    </div>
  )
}

export default Header