import Layout from "../components/layout"
import React from "react"
import Img from "gatsby-image"

const Post = ({ post }) => {
  const body = post.body
  return (
    <Layout>
      <div className="blog-post-container">
        <h1 className="blog-post-title"> {post.title} </h1>
        <Img
          className="blog-post-img"
          fluid={post.mainImage.asset.fluid}
          alt={post.title}
        />
        {body.map(({ children: content }) => (
          <p
            key={content.length}
            className="blog-post-para"
            dangerouslySetInnerHTML={{ __html: content[0].text }}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Post
