import React,{useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {

  const [inputSearch, setInputSearch]=useState("");
  return (
    <div className="header">
      <div className='header_left'>

       <MenuIcon/>
         <Link to="/">
       < img className="header_logo" src={Logo} alt="YouTube"></img>
       </Link>
       </div>

       <div className='header_input'>
       <input onChange={e=>setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder='Search'/>
      <Link to={`/search/${inputSearch}`}> <SearchIcon className='header_input_button'/></Link>
       </div>
       <div className='header_icons'>
       <VideoCallIcon className='header_icon'/>
       <AppsIcon className='header_icon'/>
       <NotificationsIcon className='header_icon'/>
       <Avatar alt="Ankur Panthri" src="https://pbs.twimg.com/profile_images/1255774689441353728/XTRS11el_400x400.jpg"/>
       </div></div>
  )  
}

export default Header