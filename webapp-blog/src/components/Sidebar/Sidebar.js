import { useEffect, useState } from "react";
import "./Sidebar.css"
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [cats,setCats] = useState([]);

  useEffect(()=>{
    const getCats = async() =>{
      const res = await axios.get("/category");
      setCats(res.data)
    }
    getCats();
  })

  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias debitis id a.</p>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul>
              {cats.map((c)=>(
                <Link className="link" to={`/?cat=${c.name}`}>
                  <li className="sidebarListItem">
                  {c.name}
                </li>
                
                </Link>
                
              ))}
            </ul>
        </div>
    </div>
  )
}

export default Sidebar;