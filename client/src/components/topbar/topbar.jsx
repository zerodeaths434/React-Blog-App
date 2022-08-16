import React, { useContext } from 'react'
import "./topbar.css"
import { Link } from "react-router-dom"
import { Context } from '../../context/Context';

const Topbar=()=> {
  const { user,dispatch } = useContext(Context);

  const PF="http://localhost:5000/Images/"

  const handleLogout=()=>{
    dispatch({type:"LOGOUT"})
  }
    return (
    <div className="top">
        <div className="topLeft">
        <i className=" topIcon fa-brands fa-twitter"></i>
        <i className=" topIcon fa-brands fa-instagram"></i>
        <i className=" topIcon fa-brands fa-youtube"></i>
        <i className=" topIcon fa-brands fa-facebook"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link to="/" className='link'>HOME </Link></li>
                <li className="topListItem"><Link to="/" className='link'>ABOUT </Link></li>
                <li className="topListItem"><Link to="/" className='link'>CONTACT </Link></li>
                <li className="topListItem"><Link to="/write" className='link'>WRITE </Link></li>
                <li className="topListItem"><Link to="/login" className='link' onClick={handleLogout}>{user && "LOGOUT"} </Link></li>
            </ul>
        </div>
        <div className="topRight">
          { user ? (
            <Link to="/settings"><img className="topImg" src={PF+user.profilePic} alt=""/></Link>
          )
            :(<ul className='topList'>
              <li className='topListItem'>
                <Link to="/login" className='link'>LOGIN </Link>
              </li>
              <li className='topListItem'>
                <Link to="/register" className='link'>REGISTER </Link>
              </li>
            </ul>
            )
          }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
  )
}

export default Topbar;
