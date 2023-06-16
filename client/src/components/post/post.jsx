import './post.css';
import {Link} from "react-router-dom";



const Post = ({ post }) => {
  return(
      <>
          <div className="post">
              {post.photo && (
                  <img className="post-img" src={post.photo} alt=""/>
              )}
              <div className="post-info">
                  <div className="post-categories">
                      {post.categories.map((c) => (
                          <span className="post-categorie">{c.name}</span>
                      ))}
                  </div>
                  <Link style={{textDecoration: "none", color:"inherit"}} to={'/post/${post._id}'}>
                      <span className="post-title">{post.title}</span>
                  </Link>
                  <hr/>
                  <span className="post-date">{new Date (post.createdAt).toDateString()}</span>
                  <p>helo</p>
              </div>
              <p className="post-description">{post.description}
              </p>
          </div>
      </>
  )
}

export default Post;