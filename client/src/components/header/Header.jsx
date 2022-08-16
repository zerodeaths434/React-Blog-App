import React from 'react'
import "./header.css"
import img from "../../images/home-page.jpg"

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>BLOG</span>
        </div>
        <img 
        className="headerImg" 
        src={img} 
        alt="Something" />
    </div>
  )
}

export default Header