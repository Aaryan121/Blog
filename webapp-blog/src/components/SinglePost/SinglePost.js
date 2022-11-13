import { useEffect ,useState } from "react";
import { Link, useLocation } from "react-router-dom"
import "./SinglePost.css"
import axios from "axios";

const SinglePost = () => {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [posts ,setPosts] = useState({})

  useEffect(()=>{
    const getPost = async() =>{
      const res = await axios.get("/posts/" + path)
      setPosts(res.data)
    }
    getPost()
  },[path])


  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
          {posts.photo && <img src={posts.photo} alt="" className="singlePostImg" />}
            
            <h1 className="singlePostTitle">
                {posts.title}
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:
                    <Link className="link" to={`/?user=${posts.username}`}>
                    <b>{posts.username}</b>
                    </Link>
                    
                     </span>
                    <span className="singlePostDate">
                      {
                        new Date (posts.createdAt).toDateString()
                      }
                    </span>
                </div>
                <p className="singlePostDesc">
                  {posts.desc}
                </p>
            
        
        </div>
    </div>
  )
}

export default SinglePost