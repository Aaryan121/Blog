import "./SinglePost.css"

const SinglePost = () => {
  return (
    <div classNameName="singlePost">
        <div className="singlePostWrapper">
            <img src="https://plus.unsplash.com/premium_photo-1664910039021-a1bfcc6574b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Name</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minus a repellat tempore, temporibus voluptates architecto numquam officiis voluptatibus culpa beatae, nesciunt deleniti ipsam ex aspernatur tenetur in voluptate saepe!</p>
            
        
        </div>
    </div>
  )
}

export default SinglePost