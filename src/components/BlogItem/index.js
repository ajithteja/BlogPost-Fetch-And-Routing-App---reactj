import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {author, avatarUrl, id, imageUrl, title, topic} = eachItem

  return (
    <Link to={`blogs/${id}`} className="blogList-link-nav">
      <div className="flex-li-container">
        <img src={imageUrl} alt="" className="thumbnail-img" />
        <div className="blog-details-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="profile-name-container">
            <img src={avatarUrl} alt="" className="profile" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
