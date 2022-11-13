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
            <img src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
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