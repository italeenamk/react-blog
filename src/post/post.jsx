import './post.css';


const Post = () => {
  return(
      <>
          <div className="post">
              <img className="post-img" src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt=""/>
              <div className="post-info">
                  <div className="post-categories">
                      <span className="post-categorie">Music</span>
                      <span className="post-categorie">Life</span>
                  </div>
                  <span className="post-title">Lorem ipsum dolor sit amet.</span>
                  <hr/>
                  <span className="post-date">1 hour ago</span>
              </div>
              <p className="post-description">Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Accusantium architecto assumenda, at commodi cumque
                  debitis deleniti eaque magni molestiae odio optio perferendis praesentium
                  quam quibusdam quidem sit unde ut voluptate?
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Accusantium architecto assumenda, at commodi cumque
                  debitis deleniti eaque magni molestiae odio optio perferendis praesentium
                  quam quibusdam quidem sit unde ut voluptate?
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Accusantium architecto assumenda, at commodi cumque
                  debitis deleniti eaque magni molestiae odio optio perferendis praesentium
                  quam quibusdam quidem sit unde ut voluptate?
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Accusantium architecto assumenda, at commodi cumque
                  debitis deleniti eaque magni molestiae odio optio perferendis praesentium
                  quam quibusdam quidem sit unde ut voluptate?
              </p>
          </div>
      </>
  )
}

export default Post;