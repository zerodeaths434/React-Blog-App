import axios from 'axios';
import React, { useContext, useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./singlePost.css"
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const SinglePost = () => {
  const location=useLocation();
  const path=location.pathname.split("/")[2];
  const [post,setPost]=useState({});
  const PF="http://localhost:5000/Images/"
  const {user}=useContext(Context);
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [updateMode,setUpdateMode]=useState(false);


  useEffect(()=>{
    const getPosts= async()=>{
      const res=await axios.get("/posts/"+path);
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
    }
    getPosts()
  }
  ,[path])

  const handleDelete=async()=>{
    try{
      await axios.delete("/posts/"+path,{data:{username:user.username}})
      window.location.replace("/");
    }catch(err)
    {

    }
  }

  const handleUpdate=async()=>{
    try{
      await axios.put("/posts/"+path,{username:user.username,title:title,desc})
      //window.location.reload();
      setUpdateMode(false)
    }catch(err)
    {

    }
  }
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
          {post.photo &&  <img 
          className='singlePostImg' 
          src={PF+post.photo}
          alt="" 
          />}
          {updateMode ? <input type="text" value={title} className="singlePostTitleInput" onChange={(e)=>setTitle(e.target.value)} autoFocus/> : (
          <h1 className='singlePostTitle'>
              {title}
              {post.username ===user?.username && <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid singlePostIcon fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
            <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
            </div>}
            </h1>)}
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: 
                <Link to={`/?user=${post.username}`} className="link">
                <b>{post.username}</b>
                </Link>
                </span>
                <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
            </div>
            {updateMode ? <textarea className='singlePostDescInput' value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea> : (
              <p className='singlePostDesc'>
              {desc}
            </p>
            )}
            {updateMode && <button className='singlePostButton' onClick={handleUpdate}>Update</button>}    
        </div>
    </div>
  )
}

export default SinglePost