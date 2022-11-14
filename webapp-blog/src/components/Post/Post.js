import { Link } from "react-router-dom"
import "./Post.css"

const Post = ({post}) => {
const PF = "https://blog-app-aaryan.herokuapp.com/images/"

  return (
    <div className="post">
        
        {post.photo &&(<img src={PF + post.photo} alt="" className="postImg" />
        )}
        <div className="postInfo">
            <div className="postCats">
                 {post.categories.map((c)=>(
                    <span className="postCat">{c.name}</span>
                 ))}
            </div>
            <Link className="link" to={`/post/${post._id}`}>
            <span className="postTitle">
                {post.title}
            </span>
            </Link>
            
            <hr/>
            <span className="postDate">{new Date(post.createdAt).toDateString()} </span>

        </div>
        <p className="postDesc">
            {post.desc}
        </p>
    </div>
  )
}

export default Post