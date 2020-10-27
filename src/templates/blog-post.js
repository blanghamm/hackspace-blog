import Layout from "../components/layout"
import React from "react"
import Img from "gatsby-image"

const Post = ({ post }) => {
  /** @namespace  post.mainImage **/
  return (
    <Layout>
      <div className="blog-post-container">
        <h1 className="blog-post-title"> {post.title} </h1>
        <Img
          className="blog-post-img"
          fluid={post.mainImage.asset.fluid}
          alt={post.title}
        />
        {post.body.map(({ children: content }, i) => (
          <p
            key={content.length}
            className="blog-post-para"
            dangerouslySetInnerHTML={{ __html: content[i].text }}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Post
