import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import "./Navbar.css"

const Navbar = () => {
    const {user ,dispatch} = useContext(Context);

    const handelLogout=()=>{
        dispatch({type:"LOGOUT"});
    }
  return (
    <div className='top'>
        <div className="topLeft">
            <div className="logo">
            <Link to="/" className='link' >Bloggy</Link>
            </div>
        </div>
        <div className="topCenter">
            <ul className="navList">
                <li className="navListItem">
                    <Link to="/" className='link' >HOME</Link>
                </li>
                
                <li className="navListItem">
                <Link to="/write" className='link' >WRITE</Link>
                </li>
                <li className="navListItem" onClick={handelLogout}>
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {user? (
            <Link to="/settings" className='link'>
                <img className='topImg' src={user.profilePic} alt="profile" />
            </Link>
            
                )
                :
                (<ul className='navList'>
                    <li className='navListItem'> 
                        <Link to="/login" className='link' >LOGIN</Link>
                    </li>
                    <li className='navListItem'>
                    <Link to="/register" className='link' >REGISTER</Link>
                    </li>
                    </ul>
                    )}
            
            </div>
    </div>
  )
}

export default Navbar