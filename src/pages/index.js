import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/styles.scss"
import { graphql } from "gatsby"
import BlogPost from "../templates/blog-post"

export const pageQuery = graphql`
  query MyQuery {
    allSanityPost {
      nodes {
        id
        author {
          name
        }
        categories {
          title
        }
        title
        mainImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        body {
          children {
            text
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const posts = data.allSanityPost.nodes
  return (
    <div className="main-container">
      <SEO title="Home" />
      <div className="inner-card-container">
        <div className="card-box">
          <div className="card-right" />
          <div className="inner-card">
            <div className="words">
              <span className="first-words">Hi, I’m Ben.</span>
              <br />
              Here's my blog <br />
              for Hackspace.
            </div>
            <Image />
          </div>
        </div>
        <div className="scroll-container">
          <p className="scroll-text">
            <span className="first-word-scroll">Scroll</span> for blog
          </p>
        </div>
      </div>
      {posts.map(post => (
        <BlogPost post={post} key={post.id} />
      ))}
    </div>
  )
}

export default IndexPage
