import './posts.css';
import Post from "../post/post";


const Posts = ({ posts }) => {
  return(
      <>
          <div className="posts">
              {posts.map((p) => (
                  <Post post={p}/>
              ))}
          </div>
      </>
  )
}

export default Posts;