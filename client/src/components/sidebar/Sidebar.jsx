import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import {Link} from "react-router-dom"

const Sidebar = () => {
  const [cats,setCats]=useState([])

  useEffect(()=>{
    const getCats=async()=>{
      const res=await axios.get("/categories")
      setCats(res.data);
    }
    getCats();
  },[])
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className='sidebarTitle'>ABOUT ME</span>
            <img className='sidebarImg' src="https://picsum.photos/200/300" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus laudantium quaerat maiores, eum,
                 perspiciatis architecto eos unde similique fugit repellendus repudiandae</p>
        </div>
        <div className="sidebarItem">
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((cat,index)=>(
            <Link to={`/?cat=${cat.name}`} className="link"><li className="sidebarListItem" key={index}>{cat.name}</li></Link>
          ))}
        </ul>
        </div>
        <div className="sidebarItem">
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-youtube"></i>
            <i className="sidebarIcon fa-brands fa-facebook"></i>
        </div>
        </div>
    </div>
  )
}

export default Sidebar