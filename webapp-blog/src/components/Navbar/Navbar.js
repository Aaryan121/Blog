import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='top'>
        <div className="topleft">
            <div className="logo">
                Bloggy
            </div>
        </div>
        <div className="topCenter">
            <ul className="navlist">
                <li className="navListItem">HOME</li>
                <li className="navListItem">ABOUT</li>
                <li className="navListItem">CONTRACTS</li>
                <li className="navListItem">WRITE</li>
                <li className="navListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img src="Photo by mohamed abdelghaffar from Pexels: https://www.pexels.com/photo/man-in-black-jacket-771742/" alt="profile" />
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </div>
    </div>
  )
}

export default Navbar