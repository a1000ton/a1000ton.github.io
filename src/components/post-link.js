import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.slug}>
      {`${post.frontmatter.title}  ${post.frontmatter.date}`}
    </Link>
    <div>{post.description}</div>
  </div>
)

export default PostLink
