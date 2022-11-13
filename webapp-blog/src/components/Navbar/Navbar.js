import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    const user = false;
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
                <Link to="/about" className='link' >ABOUT</Link>
                </li>
                <li className="navListItem">
                <Link to="/contract" className='link' >CONTACT</Link>
                </li>
                <li className="navListItem">
                <Link to="/write" className='link' >WRITE</Link>
                </li>
                <li className="navListItem">
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {user? (<img className='topImg' src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80" alt="profile" />
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
            
             <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
    </div>
  )
}

export default Navbar