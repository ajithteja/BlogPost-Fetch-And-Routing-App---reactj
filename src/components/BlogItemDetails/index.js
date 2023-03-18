import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogDetails: {},
    isLoading: true,
  }

  componentDidMount = () => {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const formateData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }

    this.setState({
      blogDetails: formateData,
      isLoading: false,
    })
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {author, avatarUrl, content, imageUrl, title} = blogDetails

    return (
      <div className="blog-details-container">
        {isLoading ? (
          <div data-testid="loader" className="loading-cls">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <>
            <h1 className="blog-title">{title}</h1>
            <div className="blog-profile-container">
              <img src={avatarUrl} alt="" className="blog-profile" />
              <p className="author-blog">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="thumbnail-blog-img" />
            <p className="blog-content">{content}</p>
          </>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
