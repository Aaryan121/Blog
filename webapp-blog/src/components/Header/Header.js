import React from 'react'
import "./Header.css"
import img from "../../assets/img/blog.webp"

const Header = () => {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className='headerTitleSm'>Bloggy</span>
            <span className="headerTitlelg">Blogs</span>
        </div>
        <img src={img} alt="" className="headerImg" />
    </div>
  )
}

export default Header;