import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {
    blogList: [],
    isLoading: true,
  }

  componentDidMount = () => {
    this.getBlogListDate()
  }

  getBlogListDate = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const formateData = data.map(eachItem => ({
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))

    this.setState({
      blogList: formateData,
      isLoading: false,
    })
  }

  render() {
    const {blogList, isLoading} = this.state

    return (
      <div className="blogList-ul-container">
        {isLoading ? (
          <div data-testid="loader" className="loader-css">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogList.map(eachItem => (
            <BlogItem key={eachItem.id} eachItem={eachItem} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
