import "./Sidebar.css"

const Sidebar = () => {
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
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Scify</li>
                <li className="sidebarListItem">Travel</li>
                <li className="sidebarListItem">Historic</li>
                <li className="sidebarListItem">IDK what next</li>

            </ul>
        </div>
    </div>
  )
}

export default Sidebar;