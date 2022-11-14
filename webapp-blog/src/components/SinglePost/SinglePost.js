import { useContext, useEffect ,useState } from "react";
import { Link, useLocation } from "react-router-dom"
import "./SinglePost.css"
import axios from "axios";
import { Context } from "../../context/Context";

const SinglePost = () => {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [posts ,setPosts] = useState({})
  const PF = "https://blog-app-aaryan.herokuapp.com/images/"
  const {user} =useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);


  useEffect(()=>{
    const getPost = async() =>{
      const res = await axios.get("https://blog-app-aaryan.herokuapp.com/api/posts/" + path)
      setPosts(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    }
    getPost()
  },[path])


  const handleDelete = async() =>{
    try{
      await axios.delete(`https://blog-app-aaryan.herokuapp.com/api/posts/${posts._id} `, {data:{username:user.username}});
      window.location.replace("/");

    }catch(err){}
  }
  const handleUpdate = async () => {
    try {
      await axios.put(`https://blog-app-aaryan.herokuapp.com/api/posts/${posts._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) {}
  };


  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {posts.photo && (
          <img src={PF + posts.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {posts.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${posts.username}`} className="link">
              <b> {posts.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(posts.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}

export default SinglePost