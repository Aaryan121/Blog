import "./Post.css"

const Post = () => {
  return (
    <div className="post">
        <img src="https://plus.unsplash.com/premium_photo-1664910039021-a1bfcc6574b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Tech</span>
                <span className="postCat">ZenG</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet.
            </span>
            <hr/>
            <span className="postDate">2 hour ago</span>

        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sequi iusto quam nesciunt consectetur iure vero hic et? Quis sapiente, doloribus nostrum non quisquam velit illum illo? Unde, at eos?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, alias quo, sapiente eius iusto est, labore maxime sit deleniti accusantium adipisci? Laboriosam porro sapiente odit deserunt ab. Quas, aliquam modi?
        </p>
    </div>
  )
}

export default Post