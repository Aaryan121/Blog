import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='top'>
        <div className="topLeft">
            <div className="logo">
                Bloggy
            </div>
        </div>
        <div className="topCenter">
            <ul className="navList">
                <li className="navListItem">HOME</li>
                <li className="navListItem">ABOUT</li>
                <li className="navListItem">CONTRACTS</li>
                <li className="navListItem">WRITE</li>
                <li className="navListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            
            <img className='topImg' src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80" alt="profile" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
    </div>
  )
}

export default Navbar