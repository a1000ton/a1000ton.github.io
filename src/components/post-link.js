import React from "react"
import { Link } from "gatsby"
import "./post-link.css"

const PostLink = ({ post }) => (
  <div className="post-thumb">
    <Link to={post.frontmatter.slug}>
      {`${post.frontmatter.title}  ${post.frontmatter.date}`}
    </Link>
    <div>{post.description}</div>
  </div>
)

export default PostLink
